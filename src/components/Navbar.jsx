import { Flex, Box, Spacer, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaDiscord } from "react-icons/fa";

export default function Navbar() {
  return (
    <Flex
      p={4}
      bg={"rbga(0,0,0,0.6)"}
      color={"white"}
      position={"fixed"}
      w={"100%"}
      zIndex={"100%"}
    >
      <Box fontWeight={"bold"}>雾雨MC</Box>
      <Spacer />
      <Flex gap={4}>
        <Link href={"/"}>主页</Link>
        <Link href={"/docs"}>文档</Link>
        <Link href={"/about"}>关于</Link>
      </Flex>
      <Spacer />
      <Flex gap={2}>
        <IconButton
          icon={<FaGithub />}
          onClick={window.open("https//github.com/crystelf/fograin-web")}
          isRound
          size={"sm"}
        />
        <IconButton
          icon={<FaDiscord />}
          onClick={window.open("https//lab.crystelf.top")}
          isRound
          size={"sm"}
        />
      </Flex>
    </Flex>
  );
}
