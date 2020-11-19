import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box as="button" {...props}>
      <Text fontSize="lg" fontWeight="bold" color={["white", "white", "primary.700", "primary.700"]}>
    Hai
      </Text>
    </Box>
  );
}
