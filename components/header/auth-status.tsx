"use client";
import { AuthButton } from "../auth-button";
import type { User } from "@supabase/supabase-js";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import NextLink from "next/link";
import { Button } from "@heroui/button";

export default function AuthStatus() {
  const [user, setUser] = useState<User | null>(null);
  const [isPending, setIsPending] = useState<Boolean>(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchUser() {
      const { data } = await supabase.auth.getUser();
      console.log(data, 15);

      setUser(data.user);
    }

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsPending(false);
        setUser(session?.user ?? null);
      }
    );
    fetchUser();
    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  if (isPending) {
    return <p>pendimg..</p>;
  }

  if (!user) {
    return <AuthButton />;
  }
  console.log(user, 36);

  return (
    <div className="flex items-center gap-2">
      <p>
        <span className="hidden sm:block">سلام </span>
        <NextLink className="text-primary" href="/profile">
          {user.email?.slice(0, 5)}
        </NextLink>
      </p>
      <Button
        className="hidden sm:block"
        onPress={() => supabase.auth.signOut()}
      >
        خروج
      </Button>
    </div>
  );
}
