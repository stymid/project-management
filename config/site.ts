export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Project Management",
  description: "پروژه هایتان را همانند بهترین ها مدریت کنید.",
  navItems: [
    {
      label: "پروژه ها",
      href: "/projects",
    },
    {
      label: "دشبورد",
      href: "/dashboard",
    },
    {
      label: "دوستان",
      href: "/friends",
    },
    {
      label: "سوالات متداول",
      href: "/questions",
    },
  ],
  navMenuItems: [
    {
      label: "دشبورد",
      href: "/dashboard",
    },
    {
      label: "پروژه ها",
      href: "/projects",
    },
    {
      label: "دوستان",
      href: "/friends",
    },
    {
      label: "سوالات متداول",
      href: "/help-feedback",
    },
  ],
  links: {
    github: "https://github.com/stymid/project-management",
    linkedin: "https://www.linkedin.com/in/mahdi-sabahi-21811922b/",
    telegram: "https://t.me/phapocalypse",
  },
};
