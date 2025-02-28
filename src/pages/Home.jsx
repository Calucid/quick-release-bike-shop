import React from "react";
import { Box, Button, Container, Heading, Image, Stack, Text, VStack, HStack, Icon, Divider } from "@chakra-ui/react";
import { FaBicycle, FaPhone, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box bg="blue.900" color="white">
      {/* Hero Section */}
      <Box bg="blue.800" py={16} textAlign="center">
        <Container maxW="container.lg">
          <VStack spacing={6}>
            <Heading size="2xl">Quick Release Bicycle Shop</Heading>
            <Text fontSize="lg" maxW="600px">
              Your trusted local bike shop for repairs, maintenance, and expert advice. Ride with confidence.
            </Text>
            <Button colorScheme="teal" size="lg" as={Link} to="/contact">
              Get in Touch
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* About Us Section */}
      <Container maxW="container.lg" py={20}>
        <HStack display={["none", "none", "flex"]} spacing={10} align="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/quick-release-bike-shop/bike-shop-exterior"
            alt="Bike shop exterior"
            borderRadius="lg"
            boxSize="400px"
          />
          <VStack align="start" spacing={4}>
            <Heading size="xl">About Us</Heading>
            <Text fontSize="md">
            Quick Release Bicycle Shop is Chambersburg’s premier dealer for Giant, Rocky Mountain, and Niner bicycles, serving riders of all ages and skill levels. We offer a wide range of Giant bikes for leisure, mountain, cyclocross, and road cycling, along with Niner Bicycles, Saris bike racks, Giant and Louis Garneau apparel, Louis Garneau cycling shoes, and top-tier nutrition from Honey Stinger and Gu Gels. Our expert team also specializes in professional bicycle maintenance and repairs, ensuring your bike stays in top condition. At QRB, we’re dedicated to providing quality products and exceptional service for all your cycling needs.
            </Text>
            <Button colorScheme="teal" as={Link} to="/about">
              Learn More
            </Button>
          </VStack>
        </HStack>
      </Container>

      <Divider />

      {/* Services Section */}
      <Container maxW="container.lg" py={20}>
        <Heading textAlign="center" mb={10}>Our Services</Heading>
        <HStack spacing={10} wrap="wrap" justify="center">
          {[
            { title: "Bike Repairs", img: "bike-repair", desc: "Expert repair services for all bike types." },
            { title: "Tune-Ups", img: "bike-tuneup", desc: "Keep your bike in top shape with our tune-ups." },
            { title: "Custom Builds", img: "custom-bike", desc: "Build your dream bike with our specialists." },
          ].map((service) => (
            <VStack key={service.title} spacing={4} maxW="300px" textAlign="center">
              <Image
                src={`http://stock.calucid.com/fetch/calucid/quick-release-bike-shop/${service.img}`}
                alt={service.title}
                boxSize="250px"
                borderRadius="lg"
              />
              <Heading size="md">{service.title}</Heading>
              <Text>{service.desc}</Text>
            </VStack>
          ))}
        </HStack>
      </Container>

      <Divider />

      {/* Testimonials Section */}
      <Container maxW="container.lg" py={20}>
        <Heading textAlign="center" mb={10}>What Our Customers Say</Heading>
        <HStack spacing={10} wrap="wrap" justify="center">
          {[
            { name: "John D.", review: "Fantastic service! My bike rides like new.", img: "customer1" },
            { name: "Sarah W.", review: "The best bike shop in town!", img: "customer2" },
            { name: "Alex R.", review: "Friendly staff and top-notch repairs.", img: "customer3" },
          ].map((testimonial) => (
            <VStack key={testimonial.name} spacing={4} maxW="300px" textAlign="center">
              <Image
                src={`http://stock.calucid.com/fetch/calucid/quick-release-bike-shop/${testimonial.img}`}
                alt={testimonial.name}
                boxSize="100px"
                borderRadius="full"
              />
              <Heading size="sm">{testimonial.name}</Heading>
              <Text fontStyle="italic">"{testimonial.review}"</Text>
              <HStack>
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} as={FaStar} color="yellow.400" />
                ))}
              </HStack>
            </VStack>
          ))}
        </HStack>
      </Container>

      <Divider />

      {/* Contact Section */}
      <Container maxW="container.lg" py={20} textAlign="center">
        <Heading mb={4}>Get in Touch</Heading>
        <Text mb={6}>Have questions? Need repairs? We're here to help!</Text>
        <HStack justify="center" spacing={10}>
          <VStack>
            <Icon as={FaPhone} boxSize={8} />
            <Text>Call Us</Text>
            <Text fontWeight="bold">717-414-7198</Text>
          </VStack>
          <VStack>
            <Icon as={FaMapMarkerAlt} boxSize={8} />
            <Text>Visit Us</Text>
            <Text fontWeight="bold">242 Falling Spring Road
              <br></br>
              Chambersburg, PA 17202</Text>
          </VStack>
        </HStack>
        <Button colorScheme="teal" size="lg" as={Link} to="/visit" mt={6}>
          Visit Us
        </Button>
      </Container>

      {/* Footer */}

    </Box>
  );
};

export default Home;
