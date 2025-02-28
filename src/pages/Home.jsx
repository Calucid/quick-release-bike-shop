import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/quick-release-bike-shop/bike-shop-exterior')"
        bgSize="cover"
        bgPosition="center"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={6} textAlign="center" bg="rgba(0, 0, 0, 0.6)" p={8} borderRadius="md">
          <Heading color="white" size="2xl">
            Quick Release Bike Shop
          </Heading>
          <Text color="white" fontSize="xl">
            Your one-stop shop for premium bikes, accessories, and repairs.
          </Text>
          <Button as={Link} to="/shop" colorScheme="yellow" size="lg">
            Shop Now
          </Button>
        </VStack>
      </Box>

      {/* About Section */}
      <Container maxW="container.xl" py={16}>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/quick-release-bike-shop/bike-repair"
            alt="Bike Repair"
            borderRadius="md"
            boxSize="400px"
            objectFit="cover"
            mr={{ md: 8 }}
          />
          <VStack align="start" spacing={4}>
            <Heading size="xl">About Us</Heading>
            <Text fontSize="lg">
              At Quick Release Bike Shop, we provide top-quality bikes, expert repairs, and a wide
              range of accessories to keep you riding smoothly. Whether you're a casual rider or a
              professional cyclist, we have everything you need.
            </Text>
            <Button as={Link} to="/about" colorScheme="yellow">
              Learn More
            </Button>
          </VStack>
        </Flex>
      </Container>

      {/* Featured Products */}
      <Box bg="gray.100" py={16}>
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={8}>
            Featured Products
          </Heading>
          <Flex wrap="wrap" justify="center" gap={8}>
            <VStack bg="white" p={4} borderRadius="md" boxShadow="md">
              <Image
                src="http://stock.calucid.com/fetch/calucid/quick-release-bike-shop/mountain-bike"
                alt="Mountain Bike"
                boxSize="250px"
                objectFit="cover"
              />
              <Text fontSize="lg" fontWeight="bold">
                Mountain Bike
              </Text>
              <Button as={Link} to="/shop" colorScheme="yellow">
                Shop Now
              </Button>
            </VStack>
            <VStack bg="white" p={4} borderRadius="md" boxShadow="md">
              <Image
                src="http://stock.calucid.com/fetch/calucid/quick-release-bike-shop/road-bike"
                alt="Road Bike"
                boxSize="250px"
                objectFit="cover"
              />
              <Text fontSize="lg" fontWeight="bold">
                Road Bike
              </Text>
              <Button as={Link} to="/shop" colorScheme="yellow">
                Shop Now
              </Button>
            </VStack>
            <VStack bg="white" p={4} borderRadius="md" boxShadow="md">
              <Image
                src="http://stock.calucid.com/fetch/calucid/quick-release-bike-shop/bike-helmet"
                alt="Bike Helmet"
                boxSize="250px"
                objectFit="cover"
              />
              <Text fontSize="lg" fontWeight="bold">
                Bike Helmet
              </Text>
              <Button as={Link} to="/shop" colorScheme="yellow">
                Shop Now
              </Button>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxW="container.xl" py={16}>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <VStack align="start" spacing={4} flex="1">
            <Heading size="xl">Get in Touch</Heading>
            <Text fontSize="lg">
              Have questions? Need a repair? Visit our shop or contact us today!
            </Text>
            <Button as={Link} to="/contact" colorScheme="yellow">
              Contact Us
            </Button>
          </VStack>
          <Image
            src="http://stock.calucid.com/fetch/calucid/quick-release-bike-shop/bike-shop-interior"
            alt="Bike Shop Interior"
            borderRadius="md"
            boxSize="400px"
            objectFit="cover"
            ml={{ md: 8 }}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;