import { Box, Text, Image } from "@chakra-ui/react";
export default function AdminCard({ uuid, name }) {
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
