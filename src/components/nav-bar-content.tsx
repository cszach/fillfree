import { Button } from "@/types";
import { ReactElement } from "react";

import sitemap from "@/sitemap.json";

export type NavBarLink = {
  text: string;
  url?: string;
  menu?: {
    defaultImage?: string;
    defaultImageAlt?: string;
    items: {
      text: string;
      url?: string;
      image?: string;
      imageAlt?: string;
      after?: ReactElement;
    }[];
  };
};

export type NavBar = {
  links: NavBarLink[];
  buttons?: Button[];
};

export const content: NavBar = {
  links: [
    {
      text: "Home",
      url: sitemap.home,
    },
    {
      text: "Pricing",
      url: sitemap.pricing,
    },
    {
      text: "Company",
      url: sitemap.company,
    },
  ],
  buttons: [
    {
      text: "Sign up",
      url: sitemap.signup,
      purpose: "link",
    },
    {
      text: "Free demo",
      url: sitemap.demo,
      purpose: "link",
    },
  ],
};
