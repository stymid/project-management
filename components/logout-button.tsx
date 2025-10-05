"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@heroui/button";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
    router.push("/auth/login");
  };

  return (
    <Button className="border-none p-0 min-w-min min-h-min" onPress={logout}>
      خروج
    </Button>
  );
}
