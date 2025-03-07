import { Heading, HeadingProps } from "@radix-ui/themes";

export default function ResponsiveHeading(
  props: Readonly<{
    purpose?: "hero" | "section";
  }> &
    HeadingProps
) {
  return <Heading {...props}></Heading>;
}
