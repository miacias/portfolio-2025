import {
  Container,
  Flex,
} from "@chakra-ui/react";
import { ConcordeInc } from "./projects/ConcordeInc";
import { AlternateUniverses } from "./projects/AlternateUniverses";
import { NavsupBsc } from "./projects/NavsupBsc";
import { LeesCleaners } from "./projects/LeesCleaners";

export const Projects = () => {
  return (
    <Container maxW="container.xl" mb="8">
      <Flex wrap='wrap' justify="center" gap={8}>
        <ConcordeInc />
        <AlternateUniverses />
        <NavsupBsc />
        <LeesCleaners />
      </Flex>
    </Container>
  );
};