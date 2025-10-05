import Link from "next/link";
import { Button } from "@heroui/button";

export function AuthButton() {
  return (
    <div className="flex gap-2">
      <Button as={Link} size="sm" variant={"bordered"} href="/auth/login">
        ورود{" "}
      </Button>
      <Button as={Link} href="/auth/sign-up" size="sm">
        ثبت نام{" "}
      </Button>
    </div>
  );
}
