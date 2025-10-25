import { Badge, Card, Flex, For, Image, Text } from "@chakra-ui/react";
import { LinkButton } from "@/components/ui/link-button";

export const LeesCleaners = () => {
  const toolsUsed = ["Vite", 'JavaScript', 'CSS3', "HTML5"];
  const externalLinks = [
    {
      label: "View Site",
      href: "https://www.leescleaners.com/",
    },
    {
      label: "View Code",
      href: "https://github.com/miacias/lees-cleaners",
    },
  ];

  return (
    <Card.Root
      maxW="lg"
      minW='md'
      overflow="hidden"
      backgroundColor='gray.800'
      id="lees-cleaners-card-2024"
    >
      <Image
        src="/images/lees-cleaners.png"
        alt="Landing page of Lee's Cleaners"
      />

      <Card.Body gap="2" p="4">
        <Card.Title color='purple.200'>{`Lee's Cleaners`}</Card.Title>

        <Card.Description color='red.300'>
          <Text
            textStyle="xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            March 2024
          </Text>
          <Text
            textStyle="md"
            fontWeight="normal"
            letterSpacing="tight"
          >
            Simple website for a local dry cleaning business.
          </Text>
        </Card.Description>

        <Flex gap={2}>
          <For each={toolsUsed}>
            {(tool) => (
              <Badge
                key={tool}
                backgroundColor='brand.secondary'
                color="black"
                w="max-content"
                p="1"
              >
                {tool}
              </Badge>
            )}
          </For>
        </Flex>

        <Text color='yellow.100'>
          Website built to provide online presence and contact information
          for local business.
        </Text>
      </Card.Body>

      <Card.Footer gap="2" p="4">
        <For each={externalLinks}>
          {(link) => (
            <LinkButton
              key={link.label}
              href={link.href}
              p="2"
              color='black'
              backgroundColor='purple.200'
            >
              {link.label}
            </LinkButton>
          )}
        </For>
      </Card.Footer>
    </Card.Root>
  );
};