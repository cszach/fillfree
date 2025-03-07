import { ReactNode } from "react";

import { Section } from "@radix-ui/themes";

export default function ResponsiveSection({
  children,
  className,
}: Readonly<{ children?: ReactNode; className?: string }>) {
  // TODO: fill in with resonsive design.
  return (
    <Section
      size={{
        initial: "1",
        md: "3",
      }}
      className={className}
    >
      {children}
    </Section>
  );
}
