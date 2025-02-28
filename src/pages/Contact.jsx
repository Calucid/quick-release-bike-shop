import React, { useState } from "react";
import { 
  Box, Container, Heading, Text, VStack, HStack, Icon, Input, Textarea, Button, 
  FormControl, FormLabel, Link as ChakraLink 
} from "@chakra-ui/react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box bg="blue.900" color="white">
      {/* Hero Section */}
      <Box bg="blue.800" py={16} textAlign="center">
        <Container maxW="container.lg">
          <VStack spacing={6}>
            <Heading size="2xl">Contact Us</Heading>
            <Text fontSize="lg" maxW="600px">
              Got questions? Need a repair? Reach out to us—we’re happy to help!
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Contact Details Section */}
      <Container maxW="container.lg" py={20} textAlign="center">
        <HStack spacing={10} wrap="wrap" justify="center">
          <VStack>
            <Icon as={FaPhone} boxSize={8} />
            <Text>Call Us</Text>
            <Text fontWeight="bold">717-414-7198</Text>
          </VStack>
          <VStack>
            <Icon as={FaEnvelope} boxSize={8} />
            <Text>Email Us</Text>
            <Text fontWeight="bold">josh@qrbicycles.com</Text>
          </VStack>
          <VStack>
            <Icon as={FaMapMarkerAlt} boxSize={8} />
            <Text>Visit Us</Text>
            <Text fontWeight="bold">242 Falling Spring Road<br></br> Chambersburg, PA </Text>
          </VStack>
        </HStack>
      </Container>

      {/* Contact Form */}
      <Container maxW="container.md" py={10} bg="blue.800" borderRadius="lg" boxShadow="lg">
        <Heading size="lg" textAlign="center" mb={6}>Send Us a Message</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your name" 
                bg="white" 
                color="black"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Your Email</FormLabel>
              <Input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email" 
                bg="white" 
                color="black"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Your Message</FormLabel>
              <Textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Type your message here..." 
                bg="white" 
                color="black"
              />
            </FormControl>
            <Button colorScheme="teal" size="lg" type="submit">Send Message</Button>
          </VStack>
        </form>
      </Container>

      {/* Social Media Links */}
      <Container maxW="container.lg" py={20} textAlign="center">
        <Heading size="lg" mb={6}>Follow Us</Heading>
        <HStack spacing={10} justify="center">
          <ChakraLink href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={8} _hover={{ color: "blue.400" }} />
          </ChakraLink>
          <ChakraLink href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} boxSize={8} _hover={{ color: "pink.400" }} />
          </ChakraLink>
          <ChakraLink href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} boxSize={8} _hover={{ color: "cyan.400" }} />
          </ChakraLink>
        </HStack>
      </Container>

    </Box>
  );
};

export default Contact;
