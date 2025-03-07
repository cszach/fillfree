import { Cabin, Forum, Merriweather } from "next/font/google";

export const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cabin",
});

export const forum = Forum({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-forum",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-merriweather",
});
