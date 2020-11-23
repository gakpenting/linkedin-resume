import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Link,
  Heading,
  Stack,
  Text,
  Flex,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
function Feature({ name, date, desc, ...rest }) {
  return (
    <Box
      p={3}
      shadow="md"
      borderWidth="1px"
      borderColor="green.500"
      borderRadius="md"
      mb={3}
      {...rest}
      style={{ pageBreakAfter: "auto", pageBreakInside: "avoid" }}
      position="relative"
    >
      <Heading fontSize="xl">{title}</Heading>
      <Text>{desc}</Text>
      <Text fontSize={"sm"}>12/11/2020</Text>
    </Box>
  );
}
export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  experience,
  ...rest
}) {
  return (
    <Box wrap="no-wrap" px={8} {...rest}>
      {/* <Stack> */}
      <Heading mb={2} as="h1" size="xl" fontWeight="bold" color="primary.800">
        Experience
      </Heading>
      <Feature
        link="http://localhost:3000"
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />

      {/* </Stack> */}
    </Box>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

Hero.defaultProps = {
  title: "Welcome To My World",
  subtitle:
    "In this website you can see all my work i've done in the past 3 years and more",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
};
