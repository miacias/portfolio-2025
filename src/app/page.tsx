import {
  Avatar, Flex, Stack, Text
} from "@chakra-ui/react";
import styles from "./page.module.css";
import { Projects } from "@/components/Projects";
import { ToolsAndTech } from "@/components/ToolsAndTech";

export default function Home() {
  return (
    <div className={styles.page}>
      <Flex gap={3} align="center" mb="8">
        <Avatar.Root size={"2xl"}>
          <Avatar.Image src="/images/IMG20250405144435.jpg" alt="Avatar" />
        </Avatar.Root>

        <Stack gap="0">
          <Text fontWeight="medium">Mia Ciasullo</Text>
          <Text color="fg.muted" textStyle="sm">
            miaciasullo@gmail.com
          </Text>
        </Stack>
      </Flex>

      <main className={styles.main}>
        <Projects />
        <ToolsAndTech />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
