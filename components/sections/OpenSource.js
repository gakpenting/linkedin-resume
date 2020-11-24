import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Center,
  Link,
} from "@chakra-ui/react";
function Feature({ title, desc,link, ...rest }) {
  return (
    <Box
      p={3}
      shadow="md"
      borderWidth="1px"
      borderColor="green.500"
      flex="1"
      borderRadius="md"
      {...rest}
      as={Link}
      href={link}
      target="_blank"
      cursor="pointer"
    >
      <Heading fontSize="xl">{title}</Heading>
      <Text >{desc}</Text>
    </Box>
  )
}
export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  openSource,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
    
      py={8}
      {...rest}
    >
      <Stack  >
        
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign="left"
          >
          Open Source
          </Heading>
          <Heading
            as="h2"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}
          >
            {subtitle}
          </Heading>
{openSource.map(data=>   <Feature
        title={data.title}
        desc={data.description}
        link={data.url}
      />)}
       
        
      </Stack>
      
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
  title: "",
  subtitle:
    "",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
};
