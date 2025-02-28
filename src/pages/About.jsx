import React from "react";
import { Box, Container, Heading, Text, VStack, HStack, Image, Divider, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box bg="blue.900" color="white">
      {/* Hero Section */}
      <Box bg="blue.800" py={16} textAlign="center">
        <Container maxW="container.lg">
          <VStack spacing={6}>
            <Heading size="2xl">About Us</Heading>
            <Text fontSize="lg" maxW="600px">
              Serving cyclists for over a decade with expert repairs, professional advice, and a passion for bikes.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* About Story Section */}
      <Container maxW="container.lg" py={20}>
        <HStack spacing={10} align="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/quick-release-bike-shop/shop-interior"
            alt="Bike shop interior"
            borderRadius="lg"
            boxSize="400px"
          />
          <VStack align="start" spacing={4}>
            <Heading size="xl">About US</Heading>
            <Text fontSize="md">
            Quick Release Bicycle Shop is Chambersburg, Pennsylvania's premier dealer for Giant, Rocky Mountain, and Niner bicycles. No matter your skill level, QRB is committed to meeting all your cycling needs with exceptional products and service.
            </Text>
          </VStack>
        </HStack>
      </Container>

      <Divider />

      {/* Why Choose Us Section */}
      <Container  maxW="container.lg" py={20} textAlign="center">
        <Heading mb={6}>Why Choose Us?</Heading>
        <HStack spacing={10} wrap="wrap" justify="center">
          {[
            { title: "Experienced Mechanics", img: "bike-repair-team", desc: "Skilled professionals with years of experience." },
            { title: "High-Quality Service", img: "customer-service", desc: "Top-tier maintenance and repair services." },
            { title: "Passionate About Cycling", img: "bike-community", desc: "We ride, we fix, we love bicycles!" },
          ].map((item) => (
            <VStack key={item.title} spacing={4} maxW="300px" textAlign="center">
              <Image
                src={`http://stock.calucid.com/fetch/calucid/quick-release-bike-shop/${item.img}`}
                alt={item.title}
                boxSize="250px"
                borderRadius="lg"
              />
              <Heading size="md">{item.title}</Heading>
              <Text>{item.desc}</Text>
            </VStack>
          ))}
        </HStack>
      </Container>

      <Divider />

      {/* Meet the Team Section */}


      <Divider />

      {/* Call to Action */}
      <Container maxW="container.lg" py={20} textAlign="center">
        <Heading mb={4}>Want to Learn More?</Heading>
        <Text mb={6}>Visit our shop or give us a call. We’re always happy to talk bikes!</Text>
        <Button colorScheme="teal" size="lg" as={Link} to="/contact">
          Contact Us
        </Button>
      </Container>


    </Box>
  );
};

export default About;
