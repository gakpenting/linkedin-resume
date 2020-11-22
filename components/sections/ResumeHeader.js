import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  VStack,
  Text,
  Center,
  Badge,
  HStack,
  TagLeftIcon,
  Tag,
  TagLabel
} from "@chakra-ui/react";
import {PhoneIcon} from "@chakra-ui/icons"
export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
    
      px={8}
      {...rest}
    >
      <VStack >
        
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            Febriano Akbar Ramadhani
          </Heading>
          <Heading
            as="h4"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}
          >
            <Text align="center" mb={5}>Software Engineer</Text>
            
            <HStack spacing={5}>
            <Tag size={"md"}  variant="subtle" colorScheme="cyan">
      <TagLeftIcon boxSize="12px" as={PhoneIcon} />
      <TagLabel>Cyan</TagLabel>
    </Tag>
    <Tag size={"md"}  variant="subtle" colorScheme="cyan">
      <TagLeftIcon boxSize="12px" as={PhoneIcon} />
      <TagLabel>Cyan</TagLabel>
    </Tag>
    <Tag size={"md"}  variant="subtle" colorScheme="cyan">
      <TagLeftIcon boxSize="12px" as={PhoneIcon} />
      <TagLabel>Cyan</TagLabel>
    </Tag>
    <Tag size={"md"}  variant="subtle" colorScheme="cyan">
      <TagLeftIcon boxSize="12px" as={PhoneIcon} />
      <TagLabel>Cyan</TagLabel>
    </Tag>  
            </HStack>
          
          </Heading>

          
       
      </VStack>
      
    </Flex>
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
