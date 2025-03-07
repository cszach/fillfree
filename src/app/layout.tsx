import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "@/app/globals.css";
import { Theme } from "@radix-ui/themes";
import { cabin, forum } from "@/fonts";
import org from "@/org.json";

export const metadata: Metadata = {
  title: `Legal AI for templates | ${org.name}`,
  description: "Never fill out a form again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabin.variable} ${forum.variable} antialiased overflow-x-hidden`}
      >
        <Theme accentColor="violet" radius="full" appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  );
}
