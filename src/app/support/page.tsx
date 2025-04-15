'use client'

import { Box, Container, Heading, Text, VStack, HStack, Button, Icon, useColorModeValue, FormControl, FormLabel, Input, Textarea, Select, SimpleGrid } from '@chakra-ui/react'
import { FaHeadset, FaPhone, FaEnvelope, FaClock, FaBuilding, FaUserTie } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

const supportOptions = [
  {
    icon: FaPhone,
    title: "Phone Support",
    description: "Speak with a support representative",
    contact: "+1 (800) 123-4567",
    hours: "24/7"
  },
  {
    icon: FaEnvelope,
    title: "Email Support",
    description: "Send us an email",
    contact: "support@generalexchange.com",
    hours: "24/7"
  },
  {
    icon: FaBuilding,
    title: "Office Hours",
    description: "Visit our office",
    contact: "123 Main St, Suite 100",
    hours: "Mon-Fri: 9AM-5PM"
  }
]

export default function Support() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            {/* Header */}
            <Box textAlign="center">
              <Heading size="lg">Contact Support</Heading>
              <Text color="gray.600" mt={2}>
                We're here to help you with any questions or concerns
              </Text>
            </Box>

            {/* Support Options */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {supportOptions.map((option, index) => (
                <Box
                  key={index}
                  bg={bgColor}
                  p={6}
                  borderRadius="lg"
                  boxShadow="sm"
                  border="1px"
                  borderColor={borderColor}
                  textAlign="center"
                >
                  <VStack spacing={4}>
                    <Icon as={option.icon} boxSize={8} color="blue.500" />
                    <Heading size="md">{option.title}</Heading>
                    <Text color="gray.600">{option.description}</Text>
                    <Text fontWeight="bold">{option.contact}</Text>
                    <HStack spacing={2}>
                      <Icon as={FaClock} color="gray.500" />
                      <Text color="gray.500">{option.hours}</Text>
                    </HStack>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>

            {/* Contact Form */}
            <Box
              bg={bgColor}
              p={6}
              borderRadius="lg"
              boxShadow="sm"
              border="1px"
              borderColor={borderColor}
            >
              <VStack spacing={6} align="stretch">
                <HStack spacing={4}>
                  <Icon as={FaHeadset} boxSize={6} color="blue.500" />
                  <Heading size="md">Send us a Message</Heading>
                </HStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder="Enter your name" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <Input type="email" placeholder="Enter your email" />
                  </FormControl>
                </SimpleGrid>

                <FormControl>
                  <FormLabel>Subject</FormLabel>
                  <Select placeholder="Select a subject">
                    <option value="account">Account Issues</option>
                    <option value="payment">Payment Questions</option>
                    <option value="contractor">Contractor Support</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder="Describe your issue or question"
                    rows={6}
                  />
                </FormControl>

                <Button colorScheme="blue" size="lg">
                  Send Message
                </Button>
              </VStack>
            </Box>

            {/* FAQ Link */}
            <Box textAlign="center">
              <Text color="gray.600">
                Check out our <Button variant="link" colorScheme="blue" onClick={() => window.location.href = '/help'}>Help Center</Button> for answers to common questions
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 