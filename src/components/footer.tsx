import { Box, Container, Flex, Link, Text } from "@radix-ui/themes";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

import org from "@/org.json";
import { logoSvg } from "@/images";

export default function Footer() {
  return (
    <footer className="bg-[var(--accent-9)] py-[var(--space-8)]">
      <Container>
        <Flex justify="between">
          <Flex direction="column" gap="4">
            {logoSvg("white")}
            <Box>
              <Text as="p">{org.name}</Text>
              <Text as="p">{org.address.line_1}</Text>
              <Text as="p">{org.address.line_2}</Text>
              <Text as="p">
                {org.address.city}, {org.address.state} {org.address.postcode}
              </Text>
            </Box>
            <Flex gap="4">
              <Link href={org.social.discord}>
                <DiscordLogoIcon />
              </Link>
              <Link href={org.social.github}>
                <GitHubLogoIcon />
              </Link>
              <Link href={org.social.instagram}>
                <InstagramLogoIcon />
              </Link>
              <Link href={org.social.linkedin}>
                <LinkedInLogoIcon />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
}
