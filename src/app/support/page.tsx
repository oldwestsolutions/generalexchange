'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Link } from '@chakra-ui/react'
import { FaQuestionCircle, FaEnvelope, FaPhone } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

export default function Support() {
  return (
    <>
      <Navbar />
      <Box
        minH="100vh"
        bg="white"
        pt={20}
        fontFamily="'Helvetica Neue', sans-serif"
      >
        <Container maxW="container.md" py={12}>
          <VStack spacing={12} align="stretch">
            <VStack spacing={4} align="stretch">
              <Heading
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="900"
                letterSpacing="-0.02em"
                color="black"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                lineHeight="1.2"
              >
                Support Center
              </Heading>
              <Text fontSize="lg" color="gray.700">
                We're here to help you with any questions or concerns you may have.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box
                p={8}
                bg="gray.50"
                borderRadius="xl"
                _hover={{ transform: 'translateY(-4px)', transition: 'all 0.2s' }}
              >
                <VStack spacing={4} align="start">
                  <Icon as={FaQuestionCircle} boxSize={8} color="blue.500" />
                  <Heading size="md" color="gray.800">
                    FAQs
                  </Heading>
                  <Text color="gray.600">
                    Find answers to commonly asked questions about our services, platform, and policies.
                  </Text>
                </VStack>
              </Box>

              <Box
                p={8}
                bg="gray.50"
                borderRadius="xl"
                _hover={{ transform: 'translateY(-4px)', transition: 'all 0.2s' }}
              >
                <VStack spacing={4} align="start">
                  <Icon as={FaEnvelope} boxSize={8} color="blue.500" />
                  <Heading size="md" color="gray.800">
                    Email Support
                  </Heading>
                  <Text color="gray.600">
                    Our support team typically responds within 24 hours during business days.
                  </Text>
                </VStack>
              </Box>
            </SimpleGrid>

            <Box pt={8}>
              <Text fontSize="lg" color="gray.700" textAlign="center">
                Need immediate assistance? Our support team is available Monday through Friday, 9 AM to 6 PM EST.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 