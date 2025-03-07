import { Flex, HoverCard, Inset, Link } from "@radix-ui/themes";
import ResponsiveContainer from "./ui/responsive-container";
import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import sitemap from "@/sitemap.json";
import { content, NavBarLink } from "@/components/nav-bar-content";
import { logoSvg } from "@/images";
import { Button as ButtonType } from "@/types";
import ResponsiveButton from "./ui/responsive-button";

export default function NavBar() {
  return (
    <Flex height="48px" align="center">
      <ResponsiveContainer>
        <Flex justify="between" align="center">
          <Flex
            align="center"
            gap="2"
            flexBasis="0"
            flexGrow="1"
            justify="start"
          >
            <HamburgerMenuIcon className="sm:hidden scale-[120%]" />
            <Link href={sitemap.home}>{logoSvg("#6E56CF", 36, 36)}</Link>
          </Flex>
          <Flex
            gap={{
              initial: "5",
              xl: "6",
            }}
            display={{
              initial: "none",
              xs: "flex",
            }}
            flexBasis="0"
            flexGrow="1"
            justify="center"
          >
            {content.links.map((link: NavBarLink, index: number) => {
              return link.menu ? (
                <HoverCard.Root key={"nav-bar-" + index}>
                  <HoverCard.Trigger>
                    <Link
                      weight="medium"
                      href={link.url}
                      size={{
                        initial: "2",
                        md: "4",
                      }}
                    >
                      {link.text} <ChevronDownIcon className="inline" />
                    </Link>
                  </HoverCard.Trigger>
                  <HoverCard.Content width="512px">
                    <Flex>
                      <Inset clip="padding-box" side="left" pr="current">
                        <img
                          src={link.menu.defaultImage}
                          alt={link.menu.defaultImageAlt}
                          style={{
                            display: "block",
                            objectFit: "cover",
                            width: "180px",
                            height: "256px",
                            backgroundColor: "var(--gray-5)",
                          }}
                        />
                      </Inset>
                      <Flex direction="column" gap="4" className="align-middle">
                        {link.menu.items.map((item, menuItemIndex) => (
                          <Flex
                            key={index + "-" + menuItemIndex}
                            align="center"
                          >
                            <Link weight="medium" href={item.url}>
                              {item.text}
                            </Link>
                            {item.after}
                          </Flex>
                        ))}
                      </Flex>
                    </Flex>
                  </HoverCard.Content>
                </HoverCard.Root>
              ) : (
                <Link
                  key={"nav-bar-" + index}
                  size={{
                    initial: "2",
                    md: "4",
                  }}
                  weight="medium"
                  href={link.url}
                >
                  {link.text}
                </Link>
              );
            })}
          </Flex>
          <Flex gap="4" flexBasis="0" flexGrow="1" justify="end">
            {content.buttons?.map((button: ButtonType, index: number) => (
              <ResponsiveButton
                key={"nav-bar-button-" + index}
                asChild
                variant={
                  index < content.buttons!.length - 1 ? "outline" : "solid"
                }
              >
                <Link href={button.url} weight="bold" underline="none">
                  {button.icon}
                  {button.text}
                </Link>
              </ResponsiveButton>
            ))}
          </Flex>
        </Flex>
      </ResponsiveContainer>
    </Flex>
  );
}
