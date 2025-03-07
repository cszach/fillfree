import { Flex, Text } from "@radix-ui/themes";

import SideFade from "@/components/ui/side-fade";

export type CarouselProps = Readonly<{
  duration: number;
  images: {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
    description?: string;
  }[];
}>;

function CarouselGroup({
  ariaHidden,
  ...props
}: Readonly<CarouselProps & { ariaHidden?: boolean }>) {
  return (
    <Flex
      aria-hidden={ariaHidden}
      gap="4"
      className="will-change-transform"
      style={{
        animation: `infinite-carousel ${props.duration}s linear infinite`,
      }}
    >
      {props.images.map((image) => (
        <Flex
          direction="column"
          align="center"
          gap="4"
          key={image.src}
          className="w-max h-max"
          maxWidth={`${image.width}px`}
        >
          <img
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            loading="lazy"
            style={{
              borderRadius: "var(--radius-2)",
            }}
          />
          {image.description ? (
            <Text align="center" color="gray" size="2">
              {image.description}
            </Text>
          ) : null}
        </Flex>
      ))}
    </Flex>
  );
}

export default function InfiniteCarousel(props: CarouselProps) {
  return (
    <Flex position="relative" overflow="hidden" gap="4">
      <SideFade />
      <CarouselGroup {...props} />
      <CarouselGroup {...props} ariaHidden={true} />
    </Flex>
  );
}
