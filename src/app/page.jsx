"use client";
import { Box, Heading, Text, Button, Flex, VStack } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminCard from "@/components/AdminCard";
import PlayerGrid from "@/components/PlayerGrid";
import FadeInWrapper from "@/components/FadeInWrapper";

export default function HomePage() {
  return (
    <Box
      position={"relative"}
      minH={"100vh"}
      overflow={"hidden"}
      display={"flex"}
      flexDirection={"column"}
      transition={"all 0.3s ease"}
    >
      <Box
        position={"absolute"}
        inset={0}
        bgImage={{
          base: "url('/background/bg_day.png')",
          _dark: "url('/background/bg.png')",
        }}
        bgSize={"cover"}
        bgPosition={"center"}
        zIndex={-2}
        transition={"all 0.3s ease"}
      />

      <Box
        position={"absolute"}
        inset={0}
        bg={{
          base: "rgba(255,255,255,0)",
          _dark: "rgba(0,0,0,0)",
        }}
        backdropFilter={"blur(3px)"}
        zIndex={-1}
        transition={"all 0.3s ease"}
      />
      <FadeInWrapper yOffset={-2} delay={0}>
        <Navbar iconColor={"rgba(255,255,255,0.8)"} />
      </FadeInWrapper>
      <FadeInWrapper delay={0.2} yOffset={-2}>
        <Box flex={"1"} px={4} pb={12}>
          <VStack spacing={6} pt={32} textAlign={"center"} color={"white"}>
            <Heading size={"2xl"}>{`欢迎来到雾雨生电服务器！`}</Heading>
            <Text fontSize={"xl"}>{`一个充满活力和创造的地方`}</Text>
            <Flex gap={4}>
              <Button colorPalette={"teal"} size={"lg"} variant={"surface"}>
                {`加入QQ群`}
              </Button>
              <Button colorPalette={"purple"} size={"lg"} variant={"surface"}>
                {`访问晶灵社区`}
              </Button>
            </Flex>
          </VStack>
        </Box>
      </FadeInWrapper>
      <Flex direction={{ base: "column", md: "row" }} p={10} gap={6}>
        <Box flex={1}>
          <Heading size={"md"} mb={4} color={"white"}>
            {`服务器管理员`}
          </Heading>
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
}
