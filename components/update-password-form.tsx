"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";

export function UpdatePasswordForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      // Update this route to redirect to an authenticated route. The user already has an active session.
      router.push("/projects");
    } catch (error: unknown) {
      console.log(error);
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader className="flex flex-col">
          <p className="text-2xl">بازنشانی رمز عبور</p>
          <p>لطفا رمز عبور جدید را وارد کنید</p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleForgotPassword}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Input
                  label="رمز عبور"
                  id="password"
                  type="password"
                  placeholder="رمز عبور جدید"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "در حال ذخیره سازی..." : "ذخیره رمز عبور"}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
