"use client";
import { Box, Heading, Text, VStack, List, Code } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInWrapper from "@/components/FadeInWrapper";

export default function DocsPage() {
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
        <Box flex="1" px={{ base: 6, md: 12 }} pt={32} pb={16}>
          <VStack align="center" spacing={10} color="white">
            <Box>
              <Heading size="xl" mb={4}>
                加入雾雨生电服务器
              </Heading>
              <List.Root spacing={3} fontSize="md">
                <List.Item>
                  启动 <strong>Minecraft 原版客户端</strong> 或推荐的{" "}
                  <strong>Xplus 整合包</strong>
                </List.Item>
                <List.Item>
                  使用支持的版本：
                  <Code colorPalette="blue">1.21 / 1.21.1</Code>
                </List.Item>
                <List.Item>
                  添加服务器地址：
                  <br />
                  主线：
                  <Code colorPalette="green">mc.crystelf.top</Code>
                  <br />
                  备线：
                  <Code colorPalette="purple">server.crystelf.top:25588</Code>
                </List.Item>
              </List.Root>
            </Box>

            <Box>
              <Heading size="lg" mb={4}>
                常用指令
              </Heading>
              <List.Root spacing={3} fontSize="md">
                <List.Item>
                  <Code colorPalette="cyan">/register 密码 密码</Code>：注册账户
                </List.Item>
                <List.Item>
                  <Code colorPalette="cyan">/login 密码</Code>：登录账户
                </List.Item>
                <List.Item>
                  <Code colorPalette="cyan">/sethome</Code>：设置你的家
                </List.Item>
                <List.Item>
                  <Code colorPalette="cyan">/home</Code>：返回你设置的家
                </List.Item>
                <List.Item>
                  <Code colorPalette="cyan">/tpa 玩家名</Code>
                  ：请求传送到其他玩家
                </List.Item>
                <List.Item>
                  <Code colorPalette="cyan">/res</Code>：领地相关操作
                </List.Item>
                <List.Item>
                  <Code colorPalette="cyan">/back</Code>
                  ：返回上一个位置（如死亡点）
                </List.Item>
                <List.Item>
                  <Code colorPalette="cyan">/bot</Code>：假人相关操作
                </List.Item>
              </List.Root>
            </Box>

            <Box>
              <Heading size="lg" mb={4}>
                其他说明
              </Heading>
              <Text fontSize="md" mb={2}>
                本服属于生存友好类型，欢迎创造与合作，不建议恶意行为。
              </Text>
              <Text fontSize="md">
                如有疑问或需要帮助，请加入QQ群联系管理员：<Code>518680610</Code>
              </Text>
            </Box>
          </VStack>
        </Box>
      </FadeInWrapper>
      <Footer />
    </Box>
  );
}
