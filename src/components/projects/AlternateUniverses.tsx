import { Badge, Card, Flex, For, Image, Text } from "@chakra-ui/react";
import { LinkButton } from "@/components/ui/link-button";

export const AlternateUniverses = () => {
  const toolsUsed = [
    "Next.js",
    "Mantine UI",
    "Apollo GraphQL",
    "WordPress",
    "Advanced Custom Fields",
    "Faust.js",
  ];

  const externalLinks = [
    {
      label: "View Test Site",
      href: "https://hq48p0vt6axfbpbc8gwhz7ngs.js.wpenginepowered.com/",
    },
    {
      label: "Request to View Code",
      href: "https://github.com/miacias/alternate-universes",
    },
  ];

  return (
    <Card.Root
      maxW="xl"
      minW="md"
      overflow="hidden"
      backgroundColor='brand.dark'
      id="alternate-universes-card-2025"
    >
      <Image
        src="/images/Alternate-Universes-STAGING-crop.png"
        alt="Landing page for Alternate Universes"
      />

      <Card.Body gap="2" p="4">
        <Card.Title color="purple.200">Alternate Universes</Card.Title>

        <Text
          textStyle="lg"
          fontWeight="medium"
          letterSpacing="tight"
          color="red.300"
        >
          March 2024 - October 2025
        </Text>
        <Text
          textStyle="md"
          fontWeight="normal"
          letterSpacing="tight"
          color="red.300"
        >
          Content management system and website for local game store franchise.
        </Text>

        <Flex gap={2} wrap="wrap">
          <For each={toolsUsed}>
            {(tool) => (
              <Badge
                key={tool}
                backgroundColor="brand.secondary"
                color="black"
                w="max-content"
                p="1"
              >
                {tool}
              </Badge>
            )}
          </For>
        </Flex>

        <Text color="yellow.100">
          Built a custom WordPress theme using Faust.js to connect to a Next.js
          front-end, enabling dynamic content updates via WordPress admin panel.
          Implemented Apollo GraphQL for efficient data fetching and Mantine UI
          for a responsive, user-friendly design.
        </Text>
      </Card.Body>

      <Card.Footer gap="2" p="4">
        <For each={externalLinks}>
          {(link) => (
            <LinkButton
              key={link.label}
              href={link.href}
              p="2"
              color="black"
              backgroundColor="purple.200"
              target="_blank"
            >
              {link.label}
            </LinkButton>
          )}
        </For>
      </Card.Footer>
    </Card.Root>
  );
};
