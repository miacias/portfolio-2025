"use client";
import { Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LinkButton } from "./ui/link-button";

export const Resume = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Heading as="h2" size="2xl" textAlign="center">
        Resume
      </Heading>

      <Text>I invite you to learn more about my experience and skills!</Text>

      <LinkButton
        size="lg"
        p={2}
        w='md'
        backgroundColor='brand.primary'
        href="https://docs.google.com/document/export?format=txt&id=1gwYNMpDvR7mwU4Usuqo5Eq1bl4gdmNCJHpY-1So33Vw">
          Download my resume!
      </LinkButton>

      {windowWidth <= 768 ? (
        <LinkButton
          id="open-resume"
          backgroundColor='brand.secondary'
          color='purple.900'
          p={2}
          href="https://docs.google.com/document/d/1gwYNMpDvR7mwU4Usuqo5Eq1bl4gdmNCJHpY-1So33Vw/view"
          target="_blank"
          >
            View my resume!
        </LinkButton>
      ) : (
        <div id="iframe-container">
          <iframe
            className="resume-embed"
            src="https://docs.google.com/document/d/e/2PACX-1vRZKTDkEFMaIs47oLeMRDUVZU1jaWY_oTowjqWj4hVip4r2nn3UkI5z8vUAX6Ow6EUTMyHfDNz7U8yB/pub?embedded=true"
            width="850"
            height="500"
            title="Mia Ciasullo resume"
          >
            Loading Resume…
          </iframe>
        </div>
      )}
    </>
  );
};
