import ResponsiveContainer from "@/components/ui/responsive-container";
import ResponsiveSection from "@/components/ui/responsive-section";
import { Flex } from "@radix-ui/themes";
import { ReactNode } from "react";
import { Responsive } from "@radix-ui/themes/props";

export default function SingleColumnSection({
  children,
  containerSibling,
  width,
}: Readonly<{
  children?: ReactNode;
  containerSibling?: ReactNode;
  width?: Responsive<string>;
}>) {
  return (
    <ResponsiveSection>
      <ResponsiveContainer>
        <Flex direction="column" gap="4" align="center" width={width} mx="auto">
          {children}
        </Flex>
      </ResponsiveContainer>
      {containerSibling}
    </ResponsiveSection>
  );
}
