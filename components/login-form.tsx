"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(data);

      if (error) throw error;
      // Update this route to redirect to an authenticated route. The user already has an active session.
      router.refresh();
      router.push("/projects");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="flex flex-col">
          <p className="text-2xl font-bold">ورود</p>
          <p>برای ورود به حساب خود لطفا ایمیل خود را وارد کنید.</p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Input
                  label="ایمیل"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex flex-col items-center">
                  <Link
                    href="/auth/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 underline"
                  >
                    ایا رمز خود را فراموش کرده اید؟{" "}
                  </Link>
                </div>
                <Input
                  label="رمز"
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "در حال ورود" : "ورود"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              اکانت ندارید؟
              <Link
                href="/auth/sign-up"
                className="underline underline-offset-4"
              >
                ثبت نام
              </Link>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
