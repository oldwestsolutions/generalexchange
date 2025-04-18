'use client'
export const dynamic = 'force-dynamic'

import React from 'react'
import { Box, Container, Text, VStack, HStack, Flex, Image, Link, Icon, Divider, Button, Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react'
import { FaSearch, FaStar, FaMapMarkerAlt, FaPhone, FaGlobe, FaRegClock, FaRegComment } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

// Mock data for search results
const searchResults = [
  {
    id: 1,
    name: "ABC Roofing & Construction",
    image: "https://via.placeholder.com/100x100?text=ABC",
    rating: 4.8,
    reviewCount: 128,
    description: "Professional roofing and construction services with over 15 years of experience. Specializing in residential and commercial projects.",
    location: "San Francisco, CA",
    phone: "(555) 123-4567",
    website: "www.abcroofing.com",
    availability: "Available Now",
    services: ["Roofing", "Construction", "Remodeling"]
  },
  {
    id: 2,
    name: "Golden State Builders",
    image: "https://via.placeholder.com/100x100?text=GSB",
    rating: 4.9,
    reviewCount: 256,
    description: "Full-service construction company offering design-build solutions for residential and commercial properties.",
    location: "Los Angeles, CA",
    phone: "(555) 987-6543",
    website: "www.goldenstatebuilders.com",
    availability: "Available Next Week",
    services: ["Construction", "Design", "Remodeling"]
  },
  {
    id: 3,
    name: "Bay Area Contractors",
    image: "https://via.placeholder.com/100x100?text=BAC",
    rating: 4.7,
    reviewCount: 89,
    description: "Local contractor specializing in home renovations and commercial space improvements.",
    location: "Oakland, CA",
    phone: "(555) 456-7890",
    website: "www.bayareacontractors.com",
    availability: "Available Now",
    services: ["Renovation", "Commercial", "Residential"]
  }
]

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <Box
        minH="100vh"
        bg="white"
        pt={{ base: 16, md: 20 }}
        fontFamily="'Helvetica Neue', sans-serif"
      >
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          {/* Search Bar */}
          <Box mb={{ base: 6, md: 8 }}>
            <form style={{ width: '100%' }}>
              <InputGroup size={{ base: "md", md: "lg" }}>
                <Input
                  placeholder="Search for contractors, services, or locations..."
                  borderRadius="full"
                  borderColor="gray.200"
                  _hover={{ borderColor: 'gray.300' }}
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                  fontSize={{ base: "sm", md: "lg" }}
                  py={{ base: 4, md: 6 }}
                  px={{ base: 4, md: 6 }}
                  color="gray.800"
                  _placeholder={{ color: 'gray.400' }}
                />
                <InputRightElement h="full" pr={{ base: 2, md: 4 }}>
                  <Button
                    type="submit"
                    aria-label="Search"
                    colorScheme="blue"
                    borderRadius="full"
                    size={{ base: "sm", md: "lg" }}
                    px={0}
                    h="full"
                    fontWeight="bold"
                    fontSize={{ base: "md", md: "lg" }}
                    borderLeftRadius={0}
                  >
                    <Icon as={FaSearch} fontSize={{ base: "18px", md: "24px" }} color="white" />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </form>
          </Box>

          {/* Search Stats */}
          <Text color="gray.600" fontSize={{ base: "xs", md: "sm" }} mb={{ base: 4, md: 6 }}>
            About {searchResults.length} results
          </Text>

          {/* Search Results */}
          <VStack spacing={{ base: 6, md: 8 }} align="stretch">
            {searchResults.map((result) => (
              <Box key={result.id} py={{ base: 4, md: 6 }} px={{ base: 3, md: 6 }} bg="white" boxShadow="md" borderRadius="xl" _hover={{ boxShadow: 'xl', transform: 'translateY(-2px)', transition: 'all 0.2s' }} transition="all 0.2s">
                <Flex gap={{ base: 4, md: 6 }} direction={{ base: "column", md: "row" }} align="center">
                  {/* Business Image */}
                  <Image
                    src={result.image}
                    alt={result.name}
                    boxSize={{ base: "80px", md: "100px" }}
                    objectFit="cover"
                    borderRadius="md"
                    fallbackSrc="https://via.placeholder.com/100x100?text=No+Image"
                  />

                  {/* Business Info */}
                  <Box flex={1} w="full">
                    <Link href="#" color="blue.600" fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
                      {result.name}
                    </Link>
                    <Flex align="center" mt={2} gap={{ base: 2, md: 4 }} direction={{ base: "column", md: "row" }}>
                      <HStack spacing={1}>
                        <Icon as={FaStar} color="yellow.400" />
                        <Text fontSize={{ base: "sm", md: "md" }}>{result.rating}</Text>
                        <Text color="gray.500" fontSize={{ base: "xs", md: "sm" }}>({result.reviewCount} reviews)</Text>
                      </HStack>
                      <HStack spacing={1} color="gray.500">
                        <Icon as={FaMapMarkerAlt} />
                        <Text fontSize={{ base: "xs", md: "sm" }}>{result.location}</Text>
                      </HStack>
                      <HStack spacing={1} color="gray.500">
                        <Icon as={FaRegClock} />
                        <Text fontSize={{ base: "xs", md: "sm" }}>{result.availability}</Text>
                      </HStack>
                    </Flex>
                    <Text mt={2} color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                      {result.description}
                    </Text>
                    <Flex mt={4} gap={2} wrap="wrap">
                      {result.services.map((service, index) => (
                        <Button
                          key={index}
                          size={{ base: "xs", md: "sm" }}
                          variant="outline"
                          colorScheme="blue"
                          borderRadius="full"
                          fontWeight="500"
                          px={4}
                          py={1}
                        >
                          {service}
                        </Button>
                      ))}
                    </Flex>
                    <Flex
                      mt={4}
                      gap={{ base: 2, md: 4 }}
                      color="gray.500"
                      direction="row"
                      wrap="wrap"
                      justify="flex-start"
                      align="center"
                      alignSelf="flex-start"
                    >
                      <Button
                        leftIcon={<Icon as={FaPhone} />}
                        colorScheme="blue"
                        size="sm"
                        borderRadius="full"
                        fontWeight="bold"
                        px={4}
                        py={1}
                        fontSize={{ base: "xs", md: "sm" }}
                        variant="solid"
                        mr={2}
                        isDisabled
                      >
                        Call
                      </Button>
                      <Button
                        leftIcon={<Icon as={FaRegComment} />}
                        colorScheme="blue"
                        size="sm"
                        borderRadius="full"
                        fontWeight="bold"
                        px={4}
                        py={1}
                        fontSize={{ base: "xs", md: "sm" }}
                        variant="outline"
                        mr={2}
                        isDisabled
                      >
                        Message
                      </Button>
                      <HStack spacing={1}>
                        <Icon as={FaGlobe} />
                        <Link href="#" fontSize={{ base: "xs", md: "sm" }}>
                          {result.website}
                        </Link>
                      </HStack>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            ))}
          </VStack>
        </Container>
      </Box>
    </>
  )
}