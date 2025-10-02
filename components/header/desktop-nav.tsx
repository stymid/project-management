import { NavbarItem } from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

const DesktopNav = () => {
  return (
    <ul className="hidden lg:flex gap-4 justify-start ml-2">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            color="foreground"
            href={item.href}
          >
            {item.label}
          </NextLink>
        </NavbarItem>
      ))}
    </ul>
  );
};

export default DesktopNav;
