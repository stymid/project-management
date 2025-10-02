import { NavbarItem } from "@heroui/navbar";
import clsx from "clsx";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { Divider } from "@heroui/divider";

const AuthButtons = () => {
  return (
    <ul className="flex flex-row">
      <NavbarItem>
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium"
          )}
          color="foreground"
          href="/login"
        >
          ورود
        </NextLink>
      </NavbarItem>
      <Divider orientation="vertical" className="mx-1 h-5 bg-foreground" />
      <NavbarItem>
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium"
          )}
          color="foreground"
          href="/signup"
        >
          ثبت نام
        </NextLink>
      </NavbarItem>
    </ul>
  );
};

export default AuthButtons;
