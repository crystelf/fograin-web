import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";

export default function PlayerGrid({ players }) {
  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={4}>
      {players.map((player) => (
        <Box key={player.uuid} textAlign={"center"}>
          <Image
            src={`https://crafatar.com/avatars/${player.uuid}?overlay`}
            w={16}
            mx={"auto"}
          />
          <Text>{player.name}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
