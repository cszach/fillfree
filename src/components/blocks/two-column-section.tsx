import ResponsiveContainer from "@/components/ui/responsive-container";
import ResponsiveSection from "@/components/ui/responsive-section";
import { Flex } from "@radix-ui/themes";
import { ReactElement } from "react";

export default function TwoColumnSection({
  leftColumn,
  rightColumn,
}: Readonly<{
  leftColumn: ReactElement;
  rightColumn: ReactElement;
}>) {
  return (
    <ResponsiveSection>
      <ResponsiveContainer>
        <Flex justify="between" gap="8" align="center">
          {leftColumn}
          {rightColumn}
        </Flex>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
}
