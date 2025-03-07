"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";

import ContentWithHeading from "@/components/blocks/content-with-heading";
import SingleColumnSection from "@/components/blocks/single-column-section";

import { Box, Card, Flex, ScrollArea, Strong, Text } from "@radix-ui/themes";

import { merriweather } from "@/fonts";

import { hero } from "@/app/content";
import ResponsiveButton from "@/components/ui/responsive-button";
import { FileTextIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <SingleColumnSection>
          <ContentWithHeading {...hero} purpose="hero" align="center">
            <Box className="relative">
              <Card className="absolute w-80 -top-12 -right-12 z-50">
                <Flex direction="column" align="center" gap="4">
                  <Flex align="center" gap="2">
                    <FileTextIcon /> <Text>Case file attached</Text>
                  </Flex>
                  <ResponsiveButton
                    purpose="cta"
                    className="w-full cursor-pointer"
                  >
                    <Strong>Fill with AI</Strong>
                  </ResponsiveButton>
                </Flex>
              </Card>
              <Card className="w-[1000px] h-[600px] relative">
                <Card
                  className={`w-full h-full bg-white text-black ${merriweather.variable} font-[Merriweather]`}
                >
                  <ScrollArea type="always" scrollbars="vertical">
                    <Box px="9" py="9">
                      <Box>
                        <Text as="p">«COURT» COURT</Text>
                        <Text as="p">«COUNTY» COUNTY STATE OF NEW YORK</Text>
                        <Text as="p">«PLAINTIFF»</Text>
                      </Box>
                      <Flex width="100%">
                        <Box flexBasis="0" flexGrow="1">
                          <br />
                          <Text as="p">Plaintiff,</Text>
                          <br />
                          <Text as="p">Against</Text>
                          <br />
                          <Text as="p">«DEFENDANT»</Text>
                        </Box>
                        <Box flexBasis="0" flexGrow="1">
                          <Text>Index No. «INDNO»</Text>
                          <br />
                          <br />
                          <Strong>
                            EXECUTION
                            <br />
                            TO SHERIFF
                          </Strong>
                        </Box>
                      </Flex>
                      <Flex width="100%" justify="center">
                        <Text>THE PEOPLE OF THE STATE OF NEW YORK</Text>
                      </Flex>
                      <Box>
                        <Text as="p">
                          TO THE SHERIFF OF «COUNTY» COUNTY, GREETING:
                        </Text>
                        <br />
                        <Text
                          as="p"
                          style={{
                            textIndent: "5rem",
                          }}
                        >
                          WHEREAS, in an action in the «COURT» Court, County of
                          «COUNTY» between «PLAINTIFF» as plaintiff and
                          «DEFENDANT» as defendant who are all the parties named
                          in said action, a judgment was entered on «JDGTDATE»
                          in favor of «PLAINTIFF» judgment creditor and against
                          «DEBTOR» judgment debtor whose last known address is
                          «DSTREET» , «DCITSTATZIP» in the amount of $ «JDGTAMT»
                          including costs, of which $ «BALDUE» together with
                          interest thereon from «INTDATE» remains due and
                          unpaid;
                        </Text>
                        <br />
                        <Text
                          as="p"
                          style={{
                            textIndent: "5rem",
                          }}
                        >
                          YOU ARE HEREBY COMMANDED to satisfy the said judgment
                          out of the real and personal property of the above
                          named judgment debtor and the debts due to him; and
                          that only the property in which said judgment debtor
                          who is not deceased has an interest or the debts owed
                          to him shall be levied upon or sold hereunder; AND TO
                          RETURN this execution to the clerk of the above
                          captioned court within sixty days after issuance
                          unless service of this execution is made within that
                          time or within extensions of that time made in writing
                          by the attorney(s) for the judgment creditor.
                        </Text>
                      </Box>
                    </Box>
                  </ScrollArea>
                </Card>
              </Card>
            </Box>
          </ContentWithHeading>
        </SingleColumnSection>
      </main>
      <Footer />
    </>
  );
}
