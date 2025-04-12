'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, Button, Input, InputGroup, InputRightElement, IconButton, SimpleGrid, Flex } from '@chakra-ui/react'
import { FaSearch, FaMapMarkerAlt, FaStar, FaRegStar, FaRegClock } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        minH="100vh"
        bg="white"
        position="relative"
        overflow="hidden"
        fontFamily="'Helvetica Neue', sans-serif"
      >
        {/* Main Search Section */}
        <Container maxW="container.md" py={32}>
          <VStack spacing={8} align="center">
            <Heading
              fontSize={{ base: "5xl", md: "7xl" }}
              fontWeight="900"
              letterSpacing="-0.02em"
              textTransform="lowercase"
              color="black"
              mb={12}
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              lineHeight="1"
              sx={{
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale"
              }}
            >
              general exchange
            </Heading>
            <InputGroup size="lg" maxW="600px">
              <Input
                placeholder="Search for contractors, services, or locations..."
                borderRadius="full"
                borderColor="gray.200"
                _hover={{ borderColor: 'gray.300' }}
                _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                fontSize="lg"
                py={6}
                px={6}
                color="gray.800"
                _placeholder={{ color: 'gray.400' }}
              />
              <InputRightElement h="full" pr={4}>
                <IconButton
                  aria-label="Search"
                  icon={<FaSearch />}
                  colorScheme="blue"
                  borderRadius="full"
                  size="lg"
                />
              </InputRightElement>
            </InputGroup>
          </VStack>
        </Container>

        {/* Popular Services Section */}
        <Box bg="gray.50" py={20}>
          <Container maxW="container.xl">
            <Heading 
              size="lg" 
              mb={8} 
              textAlign="center"
              color="gray.700"
              fontWeight="medium"
            >
              Popular Services
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
              {[
                { name: 'Roofing', icon: '🏠' },
                { name: 'Remodeling', icon: '🔨' },
                { name: 'Plumbing', icon: '🚰' },
                { name: 'Electrical', icon: '⚡' },
                { name: 'HVAC', icon: '❄️' },
                { name: 'Painting', icon: '🎨' },
                { name: 'Flooring', icon: '🪑' },
                { name: 'Landscaping', icon: '🌳' }
              ].map((service, index) => (
                <Box
                  key={index}
                  p={6}
                  bg="white"
                  borderRadius="lg"
                  boxShadow="sm"
                  textAlign="center"
                  cursor="pointer"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md'
                  }}
                  transition="all 0.2s"
                >
                  <Text fontSize="4xl" mb={2}>{service.icon}</Text>
                  <Text fontSize="lg" color="gray.700">{service.name}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Featured Contractors Section */}
        <Box py={20}>
          <Container maxW="container.xl">
            <Heading 
              size="lg" 
              mb={8} 
              color="gray.700"
              fontWeight="medium"
            >
              Featured Contractors
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {[1, 2, 3].map((_, index) => (
                <Box
                  key={index}
                  bg="white"
                  borderRadius="lg"
                  boxShadow="sm"
                  overflow="hidden"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md'
                  }}
                  transition="all 0.2s"
                >
                  <Box h="200px" bg="gray.100" />
                  <Box p={6}>
                    <Flex justify="space-between" align="center" mb={4}>
                      <Heading size="md">ABC Construction</Heading>
                      <Flex align="center">
                        <FaStar color="#ECC94B" />
                        <Text ml={2}>4.8</Text>
                      </Flex>
                    </Flex>
                    <Flex align="center" color="gray.500" mb={4}>
                      <FaMapMarkerAlt />
                      <Text ml={2}>San Francisco, CA</Text>
                    </Flex>
                    <Flex align="center" color="gray.500">
                      <FaRegClock />
                      <Text ml={2}>Available Now</Text>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box 
          py={20}
          bg="blue.50"
        >
          <Container maxW="container.md" textAlign="center">
            <Heading 
              size="lg" 
              mb={6}
              color="gray.700"
              fontWeight="medium"
            >
              Ready to Start Your Project?
            </Heading>
            <Text 
              fontSize="lg" 
              color="gray.600"
              mb={8}
            >
              Join thousands of satisfied customers who have completed their projects with confidence.
            </Text>
            <Button
              size="lg"
              colorScheme="blue"
              px={8}
              py={6}
              fontSize="lg"
            >
              Browse All Contractors
            </Button>
          </Container>
        </Box>
      </Box>
    </>
  )
}
