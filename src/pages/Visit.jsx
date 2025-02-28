import React from "react";
import { Box, Container, Heading, Text, VStack, HStack, Icon, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Visit = () => {
  return (
    <Box bg="blue.900" color="white">
      {/* Hero Section */}
      <Box bg="blue.800" py={16} textAlign="center">
        <Container maxW="container.lg">
          <VStack spacing={6}>
            <Heading size="2xl">Visit Us</Heading>
            <Text fontSize="lg" maxW="600px">
              Stop by our shop for expert bike repairs, custom builds, and friendly service.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Location Section */}
      <Container maxW="container.lg" py={20}>
        <HStack spacing={10} align="center" wrap="wrap" justify="center">
          <VStack align="start" spacing={4}>
            <Heading size="xl">Our Location</Heading>
            <HStack>
              <Icon as={FaMapMarkerAlt} boxSize={6} />
              <Text fontSize="lg">242 Falling Spring Road, Chambersburg, PA</Text>
            </HStack>
            <Text fontSize="md">
            Conveniently located off Interstate 81 (Exit 16), right off Route 30 on Falling Spring Road.
            Quick Release Bicycle Shop is easy to find and accessible
            for all your cycling needs. Visit us today and let’s get your bike rolling!
            </Text>
          </VStack>

        </HStack>
      </Container>

      {/* Business Hours */}
      <Container maxW="container.lg" py={20} textAlign="center">
        <Heading mb={6}>Business Hours</Heading>
        <Table variant="simple" size="lg" colorScheme="teal">
          <Thead>
            <Tr>
              <Th color="white">Day</Th>
              <Th color="white">Opening Hours</Th>
            </Tr>
          </Thead>
          <Tbody>
            {[
              { day: "Monday", hours: "Closed" },
              { day: "Tuesday", hours: "Closed" },
              { day: "Wednesday", hours: "10:00am - 5:00pm" },
              { day: "Thursday", hours: "10:00am - 5:00pm" },
              { day: "Friday", hours: "10:00am - 5:00pm" },
              { day: "Saturday", hours: "8:00am - 1:00pm" },
              { day: "Sunday", hours: "Closed" },
            ].map((item) => (
              <Tr key={item.day}>
                <Td>{item.day}</Td>
                <Td>{item.hours}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>

      {/* Google Maps Embed */}
      <Container maxW="container.lg" py={10} textAlign="center">
        <Heading size="lg" mb={6}>Find Us on the Map</Heading>
        <Box
          as="iframe"
          width="100%"
          height="400px"
          border="0"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=242+Falling+Spring+Road,Chambersburg,PA"
        />
      </Container>


    </Box>
  );
};

export default Visit;
