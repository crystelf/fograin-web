"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  Code,
  Link,
  Center,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInWrapper from "@/components/FadeInWrapper";

export default function AboutPage() {
  return (
    <Box
      position="relative"
      minH="100vh"
      display="flex"
      flexDirection="column"
      overflow="hidden"
      transition="all 0.3s ease"
    >
      <Box
        position="fixed"
        inset={0}
        bgImage={{
          base: "url('/background/bg_day.png')",
          _dark: "url('/background/bg.png')",
        }}
        bgSize="cover"
        bgPosition="center"
        zIndex={-2}
        transition="all 0.3s ease"
      />
      <Box
        position="absolute"
        inset={0}
        bg={{
          base: "rgba(255,255,255,0)",
          _dark: "rgba(0,0,0,0)",
        }}
        backdropFilter="blur(3px)"
        zIndex={-1}
        transition="all 0.3s ease"
      />

      <FadeInWrapper yOffset={-2} delay={0}>
        <Navbar iconColor="rgba(255,255,255,0.8)" />
      </FadeInWrapper>

      <FadeInWrapper delay={0.2}>
        <Center>
          <Box flex="1" px={{ base: 6, md: 12 }} pt={32} pb={16}>
            <VStack align="center" spacing={10} color="white">
              <Box>
                <Heading size="xl" colorPalette="blue" mb={4}>
                  关于雾雨生电服务器
                </Heading>
                <Text fontSize="md" mb={2}>
                  雾雨 MC 社区服务器已稳定运行 <strong>一年</strong>
                  ，曾经承载着多个不同版本、不同玩法的世界
                </Text>
                <Text fontSize="md">
                  本页面用于记录我们走过的历程，感谢每一位玩家的陪伴与贡献
                </Text>
              </Box>

              <Box>
                <Heading size="lg" colorPalette="teal" mb={3}>
                  鸣谢玩家
                </Heading>
                <Text fontSize="md" mb={2}>
                  感谢以下活跃与资深玩家，你们是服务器的灵魂：
                </Text>
                <List.Root colorPalette="gray" spacing="2">
                  <List.Item>kunkun_</List.Item>
                  <List.Item>htbmog</List.Item>
                  <List.Item>XI_RUN</List.Item>
                  <List.Item>1123</List.Item>
                  <List.Item>Steven_abc</List.Item>
                  <List.Item>333</List.Item>
                  <List.Item>log_out</List.Item>
                  <List.Item>yueyangzhetao</List.Item>
                  <List.Item>JosephStalin1900</List.Item>
                  <List.Item>Torchlight</List.Item>
                  <List.Item>yanan_JNTM</List.Item>
                  <List.Item>_Lin</List.Item>
                </List.Root>
              </Box>

              <Box>
                <Heading size="lg" colorPalette="purple" mb={3}>
                  鸣谢赞助单位
                </Heading>
                <Text fontSize="md" mb={2}>
                  感谢 <strong>晶灵机房</strong> 给予服务器项目的重要支持
                </Text>
                <Text fontSize="md">
                  特别感谢{" "}
                  <Link
                    href="https://lab.crystelf.top/@crystelf"
                    isExternal
                    color="blue.200"
                  >
                    @crystelf
                  </Link>{" "}
                  提供赞助与技术协助
                </Text>
              </Box>

              <Box>
                <Heading size="lg" colorPalette="cyan" mb={4}>
                  历代服务器
                </Heading>
                <Text fontSize="md" mb={3}>
                  雾雨服务器群共运行过以下世界：
                </Text>
                <List.Root colorPalette="gray" spacing="2">
                  <List.Item>
                    <strong>1.21 Fabric 生电服</strong>：最受欢迎，老玩家最多
                  </List.Item>
                  <List.Item>
                    <strong>1.21 插件群组生电服</strong>：玩法丰富，一度爆满
                  </List.Item>
                  <List.Item>
                    <strong>1.20.6 Fabric 生造服</strong>
                    ：混合玩法，定位模糊但独特
                  </List.Item>
                  <List.Item>
                    <strong>1.21.3 地毯生电服</strong>：生电特性完整但较冷门
                  </List.Item>
                  <List.Item>
                    <strong>1.20.1 Forge 海上机械师整合包</strong>
                    ：当前活跃服务器，内容丰富
                  </List.Item>
                  <List.Item>
                    <strong>1.21新周目生电服</strong>
                    ：当前活跃服务器，玩家较多
                  </List.Item>
                </List.Root>
              </Box>

              <Box>
                <Heading size="lg" colorPalette="pink" mb={3}>
                  当前服务器配置
                </Heading>
                <List.Root colorPalette="gray" spacing="2">
                  <List.Item>
                    <strong>主服务器：</strong>
                    <Code colorPalette="cyan">
                      4C8T Intel 12代 | 高频 DDR4 | 三星 SSD
                    </Code>
                  </List.Item>
                  <List.Item>
                    <strong>代理服务器：</strong>
                    <Code colorPalette="green">5-20M BGP 优质网络</Code>
                  </List.Item>
                </List.Root>
              </Box>
            </VStack>
          </Box>
        </Center>
      </FadeInWrapper>

      <Footer />
    </Box>
  );
}
