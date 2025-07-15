"use client";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  Clipboard,
  List,
  Link,
  Code,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AdminCard, PlayerCard, ActivePlayer } from "@/components/AdminCard";
import FadeInWrapper from "@/components/FadeInWrapper";
import { useColorMode } from "@/components/ui/color-mode";

export default function HomePage() {
  const { colorMode } = useColorMode();
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
        position={{ base: "fixed" }}
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
              <Button
                as="a"
                href="https://qun.qq.com/universal-share/share?ac=1&authKey=8aBVCDjRVfb9hdTlQJv%2FBRFPIJ50mZ1U9W%2FnLqonONPHv8%2BJczM63MgN%2BGyuXmp8&busi_data=eyJncm91cENvZGUiOiI1MTg2ODA2MTAiLCJ0b2tlbiI6IjZuOEU4V2F2MUx1dzZHR0dDS2ZuQzZWRFpTa25wNTFjM3JrVmhXMXZiUjVEVllmOCtJemtvaUQ3QjdjMUtQZnMiLCJ1aW4iOiIzNDc5NDQ1NzAzIn0%3D&data=h3ssbQhI58B3Bd49VCtJp3BKKQfULmxVh4Dox8hlCar9USveTnzpg7-mZe5dpRDhRaVBmDYyuWs-gwDFkO6D6A&svctype=4&tempid=h5_group_info"
                target="_blank"
                rel="noopener noreferrer"
                colorPalette="teal"
                size="lg"
                variant="surface"
                _hover={{ transform: "translateY(-6px)" }}
              >
                加入QQ群
              </Button>

              <Button
                as="a"
                href="https://lab.crystelf.top/"
                target="_blank"
                rel="noopener noreferrer"
                colorPalette="purple"
                size="lg"
                variant="surface"
                _hover={{ transform: "translateY(-6px)" }}
              >
                访问晶灵社区
              </Button>
            </Flex>
            <Text color={"gray"} fontSize={"sm"}>
              如果您无法通过链接加入群聊，请手动搜索群号
              <strong>
                <Clipboard.Root value="518680610">
                  <Clipboard.Trigger asChild>
                    <Link as="span" color="blue.fg" textStyle="sm">
                      <Clipboard.Indicator />
                      <Clipboard.ValueText />
                    </Link>
                  </Clipboard.Trigger>
                </Clipboard.Root>
              </strong>
            </Text>
          </VStack>
        </Box>
      </FadeInWrapper>
      <FadeInWrapper delay={0.2} yOffset={-2}>
        <Box px={10} mb={16}>
          <Box
            flex="1"
            bg={"rgba(255, 255, 255, 0.25)"}
            _dark={{ bg: "rgba(0,0,0,0)" }}
            border={"1.5px solid rgba(0,223,255)"}
            backdropFilter="blur(4px)"
            borderRadius="2xl"
            p={6}
            color={{ base: "black", _dark: "white" }}
            boxShadow="lg"
            textAlign="center"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "xl",
            }}
            cursor="default"
          >
            <Heading size="md" mb={2}>
              快速加入指南
            </Heading>
            <Text mb={4}>
              使用 Minecraft 原版客户端或Xplus优化整合包，版本：
              <Code colorPalette="blue">
                <strong>1.21/1.21.1</strong>
              </Code>
              <List.Root>
                <List.Item>
                  主线：
                  <strong>
                    <Clipboard.Root value="mc.crystelf.top">
                      <Clipboard.Trigger asChild>
                        <Link as="span" color="blue.fg" textStyle="sm">
                          <Clipboard.Indicator />
                          <Clipboard.ValueText />
                        </Link>
                      </Clipboard.Trigger>
                    </Clipboard.Root>
                  </strong>
                </List.Item>
                <List.Item>
                  备线：
                  <strong>
                    <Clipboard.Root value="server.crystelf.top:25588">
                      <Clipboard.Trigger asChild>
                        <Link as="span" color="blue.fg" textStyle="sm">
                          <Clipboard.Indicator />
                          <Clipboard.ValueText />
                        </Link>
                      </Clipboard.Trigger>
                    </Clipboard.Root>
                  </strong>
                </List.Item>
              </List.Root>
            </Text>
          </Box>
        </Box>
      </FadeInWrapper>
      <FadeInWrapper delay={0.2} yOffset={-2}>
        <Flex
          direction={{ base: "column", md: "row" }}
          px={10}
          gap={8}
          mb={10}
          justify="center"
        >
          <Box
            flex="1"
            bg={"rgba(255, 255, 255, 0.25)"}
            _dark={{ bg: "rgba(0,0,0,0)" }}
            border={"1.5px solid rgba(0,223,255)"}
            backdropFilter="blur(4px)"
            borderRadius="2xl"
            p={6}
            color={{ base: "black", _dark: "white" }}
            boxShadow="lg"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "xl",
            }}
            cursor="default"
          >
            <Heading size="md" mb={4}>
              管理员
            </Heading>
            <Flex
              gap={10}
              wrap={"wrap"}
              justify={{ base: "center", md: "flex-start" }}
            >
              <AdminCard
                uuid="81ff388f-3daa-4fe2-b563-d15a1557eda0"
                name="JosephStalin1900"
              />
              <AdminCard
                uuid="556d76c8-2904-4a90-a77c-2474af66e994"
                name="kunkun_"
              />
            </Flex>
            <Heading size="md" mb={4}>
              活跃玩家
            </Heading>
            <Flex
              gap={5}
              wrap={"wrap"}
              justify={{ base: "center", md: "flex-start" }}
            >
              <ActivePlayer
                uuid="556d76c8-2904-4a90-a77c-2474af66e994"
                name="kunkun_"
              />
              <ActivePlayer
                uuid="c9d8330c-6023-4a1e-9da1-0d98a2c8cfd2"
                name="htbmog"
              />
              <ActivePlayer
                uuid="71a30b09-3b73-4d63-a187-1c369890a91c"
                name="XI_RUN"
              />
              <ActivePlayer
                uuid="75d7daf5-f6e0-46fe-a71c-5a2a7a24e055"
                name="1123"
              />
              <ActivePlayer
                uuid="21125ec1-2cc3-4f62-9e2f-3c3e6135240d"
                name="Steven_abc"
              />
              <ActivePlayer
                uuid="80948e64-16d2-49f4-a8cf-961057d78b41"
                name="333"
              />
              <ActivePlayer
                uuid="8a378da6-a26d-44a1-a50a-dbab1eb03ee3"
                name="log_out"
              />
              <ActivePlayer
                uuid="75d7daf5-f6e0-46fe-a71c-5a2a7a24e055"
                name="yueyangzhetao"
              />
            </Flex>
          </Box>

          <Box
            flex="1"
            bg={"rgba(255, 255, 255, 0.25)"}
            _dark={{ bg: "rgba(0,0,0,0)" }}
            border={"1.5px solid rgba(0,223,255)"}
            backdropFilter="blur(4px)"
            borderRadius="2xl"
            p={6}
            color={{ base: "black", _dark: "white" }}
            boxShadow="lg"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "xl",
            }}
            cursor="default"
          >
            <Heading size="md" mb={4}>
              FogRain 的动态
            </Heading>
            <Box overflow="hidden">
              <iframe
                src="https://lab.crystelf.top/embed/user-timeline/a7uikzjj4yvs00mh?maxHeight=500"
                data-misskey-embed-id="v1_89465454-a7d8-49e6-815a-f6122e3f192e"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  border: "none",
                  width: "100%",
                  maxWidth: "500px",
                  height: "300px",
                  colorScheme: colorMode,
                }}
              />
            </Box>
            <script defer src="https://lab.crystelf.top/embed.js" />
          </Box>
        </Flex>
      </FadeInWrapper>

      <FadeInWrapper yOffset={-2} delay={0.3}>
        <Box px={10} mb={10}>
          <Box
            bg={"rgba(255, 255, 255, 0.25)"}
            _dark={{ bg: "rgba(0,0,0,0)" }}
            border={"1.5px solid rgba(0,223,255)"}
            backdropFilter="blur(4px)"
            borderRadius="2xl"
            p={6}
            color={{ base: "black", _dark: "white" }}
            boxShadow="lg"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "xl",
            }}
            cursor="default"
          >
            <Heading size={"md"} mb={4}>
              老玩家
            </Heading>
            <Text size="small" mb={4} color={"gray"}>
              感谢你们的一路支持与陪伴
            </Text>
            <Flex
              gap={6}
              wrap={"wrap"}
              justify={{ base: "center", md: "flex-start" }}
            >
              <PlayerCard
                uuid="556d76c8-2904-4a90-a77c-2474af66e994"
                name="kunkun_"
              />
              <PlayerCard
                uuid="81ff388f-3daa-4fe2-b563-d15a1557eda0"
                name="JosephStalin1900"
              />
              <PlayerCard
                uuid="c9d8330c-6023-4a1e-9da1-0d98a2c8cfd2"
                name="htbmog"
              />
              <PlayerCard
                uuid="75d7daf5-f6e0-46fe-a71c-5a2a7a24e055"
                name="1123"
              />
              <PlayerCard
                uuid="21125ec1-2cc3-4f62-9e2f-3c3e6135240d"
                name="Steven_abc"
              />
              <PlayerCard
                uuid="6a71472e-4cac-4ef4-9aee-67a54b0a854d"
                name="Torchlight"
              />
              <PlayerCard
                uuid="e22c03f8-cfd4-46be-9c84-d3b6475b3524"
                name="yanan_JNTM"
              />
              <PlayerCard
                uuid="04ea8797-3589-4bdd-aefc-42cb059bde2c"
                name="_Lin"
              />
            </Flex>
          </Box>
        </Box>
      </FadeInWrapper>
      <Footer />
    </Box>
  );
}
