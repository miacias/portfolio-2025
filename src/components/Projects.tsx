import {
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ConcordeInc } from "./projects/ConcordeInc";
import { AlternateUniverses } from "./projects/AlternateUniverses";
import { NavsupBsc } from "./projects/NavsupBsc";
import { LeesCleaners } from "./projects/LeesCleaners";

export const Projects = () => {
  return (
    <Container maxW="container.xl" mb="8">
      <Heading as="h2" size="2xl" mb="6" textAlign="center">
        Portfolio
      </Heading>
      <Flex wrap='wrap' justify="center" gap={8} alignItems="flex-start">
        <AlternateUniverses />
        <LeesCleaners />
        <ConcordeInc />
        <NavsupBsc />
      </Flex>
    </Container>
  );
};