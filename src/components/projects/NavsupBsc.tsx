import { Badge, Card, Flex, For, Image, Text } from "@chakra-ui/react";
import { LinkButton } from "@/components/ui/link-button";

export const NavsupBsc = () => {
  const toolsUsed = ["jQuery", "HTML5", "Bootstrap", "Oracle PL/SQL"];
  const externalLinks = [
    {
      label: "View Public Site",
      href: "https://www.navsup.navy.mil/MyNAVSUP/",
    },
  ];

  return (
    <Card.Root
      maxW="lg"
      minW='md'
      overflow="hidden"
      backgroundColor='gray.800'
      id="mynavsup-card-2024"
    >
      <Image
        src="/images/MyNAVSUP.png"
        alt="Landing page for Naval Supply Systems Command"
      />

      <Card.Body gap="2" p="4">
        <Card.Title color='purple.200'>MyNAVSUP Portal</Card.Title>

        <Card.Description color='red.300'>
          <Text
            textStyle="xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            May - November 2024
          </Text>
          <Text
            textStyle="md"
            fontWeight="normal"
            letterSpacing="tight"
          >
            Suite of 150 internal applications for the U.S. Navy.
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
          Access restricted to U.S. Navy personnel via CAC login.
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
