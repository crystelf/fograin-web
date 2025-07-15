import { Box, Text, Image } from "@chakra-ui/react";

/**
 * 小人卡片
 * @param uuid
 * @param name
 * @returns {JSX.Element}
 * @constructor
 */
export function AdminCard({ uuid, name }) {
  return (
    <Box textAlign={"center"} mb={4}>
      <Image
        src={`https://crafatar.com/renders/body/${uuid}?overlay`}
        alt={name}
        w={24}
        mx={"auto"}
      />
      <Text>{name}</Text>
    </Box>
  );
}

/**
 * 玩家卡片
 * @param uuid
 * @param name
 * @returns {JSX.Element}
 * @constructor
 */
export function PlayerCard({ uuid, name }) {
  return (
    <Box textAlign={"center"} mb={4}>
      <Image
        src={`https://crafthead.net/armor/body/${uuid}`}
        alt={name}
        w={20}
        mx={"auto"}
      />
      <Text>{name}</Text>
    </Box>
  );
}

/**
 * 玩家卡片
 * @param uuid
 * @param name
 * @returns {JSX.Element}
 * @constructor
 */
export function ActivePlayer({ uuid, name }) {
  return (
    <Box textAlign={"center"} mb={4}>
      <Image
        src={`https://crafatar.com/avatars/${uuid}`}
        alt={name}
        w={10}
        mx={"auto"}
      />
      <Text>{name}</Text>
    </Box>
  );
}
