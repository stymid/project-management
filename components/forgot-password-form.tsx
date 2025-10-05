"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      // The url which will be included in the email. This URL needs to be configured in your redirect URLs in the Supabase dashboard at https://supabase.com/dashboard/project/_/auth/url-configuration
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      });
      if (error) throw error;
      setSuccess(true);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6")}>
      {success ? (
        <Card>
          <CardHeader className="flex flex-col">
            <p className="text-md font-bold">ایمیل های خود را چک کنید</p>
            <p className="text-sm">
              ایمیل حاوی دستورالعمل های بازنشانی پسوورد ارسال شد
            </p>
          </CardHeader>
          <CardBody>
            <p className="text-sm text-muted-foreground">
              اگر با ایمیلی که وارد شده است ثبت نام انجام داده باشید یک ایمیل
              حاوی بازنشانی پسسورد دریافت خواهید کرد.
            </p>
          </CardBody>
        </Card>
      ) : (
        <Card>
          <CardHeader className="flex flex-col">
            <p className="text-2xl font-bold">بازنشانی پسوورد</p>
            <p>
              ایمیل خود را وارد کنید. سپس یک لینک برای بازنشانی پسوورد برایتان
              ارسال میشود.
            </p>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleForgotPassword}>
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
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "در حال ارسال..." : "ارسال ایمیل بازنشانی"}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                اکانت دارید؟{" "}
                <Link
                  href="/auth/login"
                  className="underline underline-offset-4"
                >
                  ورود
                </Link>
              </div>
            </form>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
