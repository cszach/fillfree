import { ReactNode } from "react";
import { Container } from "@radix-ui/themes";

export default function ResponsiveContainer({
  children,
  className,
}: Readonly<{
  children?: ReactNode;
  className?: string;
}>) {
  return (
    <Container
      size={{
        initial: "1",
        sm: "2",
        md: "3",
        lg: "4",
      }}
      className={className}
    >
      {children}
    </Container>
  );
}
