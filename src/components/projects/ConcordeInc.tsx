import { Badge, Card, Flex, For, Image, Text } from "@chakra-ui/react";
import { LinkButton } from "@/components/ui/link-button";

export const ConcordeInc = () => {
  const toolsUsed = [
    "React",
    "Bootstrap",
    "Telerik Kendo UI",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Validate.js",
    "Jest",
    "Mocha",
    "log4js",
  ];

  const externalLinks = [
    {
      label: "View Public Site",
      href: "https://concorde2000.com",
    },
  ];

  return (
    <Card.Root
      maxW="lg"
      minW="md"
      overflow="hidden"
      backgroundColor="gray.800"
      id="sparc-concorde-card-2025"
    >
      <Image src="/images/Concorde-sparc.png" alt="Landing page for Sparc" />

      <Card.Body gap="2" p="4">
        <Card.Title color="purple.200">Concorde Inc. - Sparc</Card.Title>

        <Text
          textStyle="xl"
          fontWeight="medium"
          letterSpacing="tight"
          color="red.300"
        >
          November 2024 - October 2025
        </Text>

        <Text
          textStyle="md"
          fontWeight="normal"
          letterSpacing="tight"
          color="red.300"
        >
          Monolithic web application serving internal and client-facing users
          for Concorde Inc., a transportation compliance and management company.
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
          Developed and maintained key features of the Sparc application,
          including user authentication, compliance tracking, and reporting
          tools. Collaborated with cross-functional teams to enhance user
          experience and ensure system reliability.
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
