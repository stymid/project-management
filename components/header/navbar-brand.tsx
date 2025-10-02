import { NavbarBrand as HeroUINavbarBrand } from "@heroui/navbar";
import NextLink from "next/link";
import { Logo } from "../icons";

const NavbarBrand = () => {
  return (
    <HeroUINavbarBrand as="li" className="gap-3 max-w-fit">
      <NextLink className="flex justify-start items-center gap-1" href="/">
        <Logo />
        <p className="font-bold text-inherit">PMP</p>
      </NextLink>
    </HeroUINavbarBrand>
  );
};

export default NavbarBrand;
