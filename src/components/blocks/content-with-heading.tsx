import ResponsiveButton from "@/components/ui/responsive-button";
import { Button as ButtonType } from "@/types";
import {
  Flex,
  Heading,
  HeadingProps,
  Link,
  Strong,
  Text,
} from "@radix-ui/themes";
import { ReactNode } from "react";

export type Header = {
  heading: string;
  subheading: string;
  buttons: ButtonType[];
};

export default function ContentWithHeading({
  // Content
  heading,
  subheading,
  buttons,
  children,

  // Layout
  purpose,
  buttonsFlow = "column",
  align = "left",
}: Header &
  Readonly<{
    purpose?: "section" | "hero";
    heading: string;
    subheading: string;
    buttons?: ButtonType[];
    buttonsFlow?: "row" | "column";
    children?: ReactNode;
    align?: "left" | "center" | "right";
  }>) {
  const flexAlignCenterOrRight = align === "center" ? "center" : "end";
  const flexAlign = align === "left" ? "start" : flexAlignCenterOrRight;

  const buttonsBlock = (
    <Flex direction={buttonsFlow} gap="4" align={flexAlign}>
      {buttons?.map((button, index) => {
        return (
          <ResponsiveButton
            key={button.url}
            asChild={!!button.url}
            purpose={button.purpose}
            onClick={button.onClick}
            className="w-fit"
            variant={index === 0 ? "solid" : "outline"}
          >
            {button.url ? (
              <Link href={button.url} underline="none" weight="bold">
                {button.icon}
                {button.text}
              </Link>
            ) : (
              <>
                {button.icon} <Strong>{button.text}</Strong>
              </>
            )}
          </ResponsiveButton>
        );
      })}
    </Flex>
  );

  let headingSize: HeadingProps["size"];
  let subheadingSize: HeadingProps["size"];

  // TODO: Make responsive.
  switch (purpose) {
    case "hero":
      headingSize = "9";
      subheadingSize = "6";
      break;

    case "section":
    default:
      headingSize = "8";
      subheadingSize = "4";
      break;
  }

  return (
    <Flex
      direction="column"
      gap="6"
      align={flexAlign}
      flexBasis="0"
      flexGrow="1"
    >
      <Flex direction="column" gap="4" align={flexAlign}>
        <Heading as="h1" size={headingSize}>
          {heading}
        </Heading>
        <Text align={align} size={subheadingSize}>
          {subheading}
        </Text>
      </Flex>
      {buttons && buttonsBlock}
      {children}
    </Flex>
  );
}
