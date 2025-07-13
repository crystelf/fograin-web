import { Box, Text, Flex, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg={"gray.800"} color={"white"} p={4}>
      <Flex justify={"space-between"} wrap={"wrap"}>
        <Text>由晶灵云数据中心提供数据储存服务</Text>
        <Text>由晶灵机房提供运算服务</Text>
        <Text>由雾雨开发中心维护</Text>
      </Flex>
    </Box>
  );
}
