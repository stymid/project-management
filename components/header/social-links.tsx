import { NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

import { LindedinIcon, GithubIcon, TelegramIcon } from "@/components/icons";

const SociaLinks = () => {
  return (
    <NavbarItem className="hidden sm:flex gap-2">
      <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
        <LindedinIcon className="text-default-500" />
      </Link>
      <Link isExternal aria-label="Telegram" href={siteConfig.links.telegram}>
        <TelegramIcon className="text-default-500" />
      </Link>
      <Link isExternal aria-label="Github" href={siteConfig.links.github}>
        <GithubIcon className="text-default-500" />
      </Link>
    </NavbarItem>
  );
};

export default SociaLinks;
