import { Box } from "@radix-ui/themes";

export default function SideFade() {
  return (
    <Box
      position="absolute"
      className="w-full h-full fade-x z-50 pointer-events-none"
    ></Box>
  );
}
