import sitemap from "@/sitemap.json";
import { Header } from "@/components/blocks/content-with-heading";

export const hero: Header = {
  heading: "Never fill out another template.",
  subheading:
    "The best way for lawyers and paralegals to fill out templates with case data in seconds, not hours.",
  buttons: [
    {
      text: "Free demo (no signup required)",
      url: sitemap.demo,
      purpose: "cta",
    },
  ],
};
