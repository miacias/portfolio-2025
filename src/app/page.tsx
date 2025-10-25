import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode";
import {
  Avatar,
  Badge,
  Card,
  Container,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
// import Image from "next/image";
import { LinkButton } from "@/components/ui/link-button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Avatar.Root size={"2xl"}>
        <Avatar.Image src="/IMG20250405144435.jpg" alt="Avatar" />
      </Avatar.Root>

      <main className={styles.main}>
        <Container maxW="container.xl" mb="8" backgroundColor="purple.400">
          <Card.Root
            maxW="lg"
            overflow="hidden"
            id="sparc-concorde-card-2025"
          >
            <Image src="/Concorde-sparc.png" alt="Landing page for Sparc" />

            <Card.Body gap="2" p="4">
              <Card.Title>Concorde Inc. - Sparc</Card.Title>

              <Card.Description>
                Monolithic web application serving internal and client-facing
                users for Concorde Inc., a transportation compliance and
                management company.
              </Card.Description>

              <Text
                textStyle="xl"
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
              >
                November 2024 - October 2025
              </Text>

              <Flex gap={2} wrap="wrap">
                <Badge backgroundColor="red.400" w="max-content" p="1">
                  React
                </Badge>
                <Badge backgroundColor="teal.400" w="max-content" p="1">
                  Bootstrap
                </Badge>
                <Badge backgroundColor="green.500" w="max-content" p="1">
                  Telerik Kendo UI
                </Badge>
                <Badge backgroundColor="yellow.600" w="max-content" p="1">
                  Express.js
                </Badge>
                <Badge backgroundColor="blue.400" w="max-content" p="1">
                  MongoDB
                </Badge>
                <Badge backgroundColor="blue.600" w="max-content" p="1">
                  MySQL
                </Badge>
                <Badge backgroundColor="cyan.400" w="max-content" p="1">
                  Validate.js
                </Badge>
                <Badge backgroundColor="red.500" w="max-content" p="1">
                  Jest
                </Badge>
                <Badge backgroundColor="gray.400" w="max-content" p="1">
                  Mocha
                </Badge>
                <Badge backgroundColor="teal.400" w="max-content" p="1">
                  log4js
                </Badge>
              </Flex>
            </Card.Body>

            <Card.Footer gap="2" p="4">
              <LinkButton
                href="https://sparc.concorde2000.com"
                color={"black"}
                p="1"
              >
                View Public Site
              </LinkButton>
            </Card.Footer>
          </Card.Root>

          <Card.Root
            maxW="lg"
            overflow="hidden"
            id="alternate-universes-card-2025"
          >
            <Image
              src="/Alternate-Universes-STAGING-crop.png"
              alt="Landing page for Alternate Universes"
            />

            <Card.Body gap="2" p="4">
              <Card.Title>Alternate Universes</Card.Title>

              <Card.Description>
                Content management system and website for local game store
                franchise.
              </Card.Description>

              <Text
                textStyle="xl"
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
              >
                March 2024 - October 2025
              </Text>

              <Flex gap={2} wrap="wrap">
                <Badge backgroundColor="red.400" w="max-content" p="1">
                  Next.js (React)
                </Badge>
                <Badge backgroundColor="teal.400" w="max-content" p="1">
                  Mantine UI
                </Badge>
                <Badge backgroundColor="orange.400" w="max-content" p="1">
                  Apollo GraphQL
                </Badge>
                <Badge backgroundColor="blue.400" w="max-content" p="1">
                  WordPress
                </Badge>
                <Badge backgroundColor="purple.400" w="max-content" p="1">
                  Advanced Custom Fields
                </Badge>
                <Badge backgroundColor="cyan.400" w="max-content" p="1">
                  Faust.js
                </Badge>
              </Flex>
            </Card.Body>

            <Card.Footer gap="2" p="4">
              <LinkButton
                href="https://hq48p0vt6axfbpbc8gwhz7ngs.js.wpenginepowered.com/"
                color={"black"}
                p="1"
              >
                View Test Site
              </LinkButton>
              <LinkButton
                href="https://github.com/miacias/alternate-universes"
                variant="outline"
                p="1"
              >
                Request to View Code
              </LinkButton>
            </Card.Footer>
          </Card.Root>

          <Card.Root maxW="lg" overflow="hidden" id="mynavsup-card-2024">
            <Image
              src="/MyNAVSUP.png"
              alt="Landing page for Naval Supply Systems Command"
            />

            <Card.Body gap="2" p="4">
              <Card.Title>MyNAVSUP Portal</Card.Title>

              <Card.Description>
                Suite of 150 internal applications for the U.S. Navy.
              </Card.Description>

              <Text
                textStyle="xl"
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
              >
                May - November 2024
              </Text>

              <Flex gap={2}>
                <Badge backgroundColor="blue.400" w="max-content" p="1">
                  jQuery
                </Badge>
                <Badge backgroundColor="green.400" w="max-content" p="1">
                  HTML5
                </Badge>
                <Badge backgroundColor="teal.400" w="max-content" p="1">
                  Bootstrap
                </Badge>
                <Badge backgroundColor="orange.400" w="max-content" p="1">
                  Oracle PL/SQL
                </Badge>
              </Flex>
            </Card.Body>

            <Card.Footer gap="2" p="4">
              <LinkButton
                href="https://www.navsup.navy.mil/MyNAVSUP/"
                color={"black"}
                p="1"
              >
                View Public Site
              </LinkButton>
            </Card.Footer>
          </Card.Root>

          <Card.Root maxW="lg" overflow="hidden" id="lees-cleaners-card-2024">
            <Image
              src="/lees-cleaners.png"
              alt="Landing page of Lee's Cleaners"
            />

            <Card.Body gap="2" p="4">
              <Card.Title>{`Lee's Cleaners`}</Card.Title>

              <Card.Description>
                Simple website for a local dry cleaning business.
              </Card.Description>

              <Text
                textStyle="xl"
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
              >
                March 2024
              </Text>

              <Badge backgroundColor="purple.400" w="max-content" p="1">
                Vite
              </Badge>
            </Card.Body>

            <Card.Footer gap="2" p="4">
              <LinkButton
                href="https://www.leescleaners.com/"
                color={"black"}
                p="1"
              >
                View Site
              </LinkButton>
              <LinkButton
                href="https://github.com/miacias/lees-cleaners"
                variant="outline"
                p="1"
              >
                View Code
              </LinkButton>
            </Card.Footer>
          </Card.Root>
        </Container>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
