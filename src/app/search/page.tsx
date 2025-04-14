'use client'

import React, { Suspense } from 'react'
import { Box, Container, Text, VStack, HStack, Flex, Image, Link, Icon, Divider, Button, Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react'
import { FaSearch, FaStar, FaMapMarkerAlt, FaPhone, FaGlobe, FaRegClock } from 'react-icons/fa'
import { useSearchParams } from 'next/navigation'
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

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  return (
    <Box
      minH="100vh"
      bg="white"
      pt={20}
      fontFamily="'Helvetica Neue', sans-serif"
    >
      <Container maxW="container.lg">
        {/* Search Bar */}
        <Box mb={8}>
          <form style={{ width: '100%' }}>
            <InputGroup size="lg">
              <Input
                defaultValue={query}
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
                  type="submit"
                  aria-label="Search"
                  icon={<FaSearch />}
                  colorScheme="blue"
                  borderRadius="full"
                  size="lg"
                />
              </InputRightElement>
            </InputGroup>
          </form>
        </Box>

        {/* Search Stats */}
        <Text color="gray.600" fontSize="sm" mb={6}>
          About {searchResults.length} results for "{query}"
        </Text>

        {/* Search Results */}
        <VStack spacing={8} align="stretch">
          {searchResults.map((result) => (
            <Box key={result.id} py={6}>
              <Flex gap={6}>
                {/* Business Image */}
                <Image
                  src={result.image}
                  alt={result.name}
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="md"
                  fallbackSrc="https://via.placeholder.com/100x100?text=No+Image"
                />

                {/* Business Info */}
                <Box flex={1}>
                  <Link href={`/contractor/${result.id}`} color="blue.600" fontSize="xl" fontWeight="medium">
                    {result.name}
                  </Link>
                  
                  <Flex align="center" mt={2} gap={4}>
                    <HStack spacing={1}>
                      <Icon as={FaStar} color="yellow.400" />
                      <Text>{result.rating}</Text>
                      <Text color="gray.500">({result.reviewCount} reviews)</Text>
                    </HStack>
                    <HStack spacing={1} color="gray.500">
                      <Icon as={FaMapMarkerAlt} />
                      <Text>{result.location}</Text>
                    </HStack>
                    <HStack spacing={1} color="gray.500">
                      <Icon as={FaRegClock} />
                      <Text>{result.availability}</Text>
                    </HStack>
                  </Flex>

                  <Text mt={2} color="gray.600">
                    {result.description}
                  </Text>

                  <Flex mt={4} gap={4}>
                    {result.services.map((service, index) => (
                      <Button
                        key={index}
                        size="sm"
                        variant="outline"
                        colorScheme="blue"
                      >
                        {service}
                      </Button>
                    ))}
                  </Flex>

                  <Flex mt={4} gap={4} color="gray.500">
                    <HStack spacing={1}>
                      <Icon as={FaPhone} />
                      <Text>{result.phone}</Text>
                    </HStack>
                    <HStack spacing={1}>
                      <Icon as={FaGlobe} />
                      <Link href={`https://${result.website}`} target="_blank">
                        {result.website}
                      </Link>
                    </HStack>
                  </Flex>
                </Box>
              </Flex>
              <Divider mt={6} />
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}

export default function SearchResults() {
  return (
    <>
      <Navbar />
      <Suspense fallback={
        <Box minH="100vh" bg="white" pt={20}>
          <Container maxW="container.lg">
            <Text>Loading search results...</Text>
          </Container>
        </Box>
      }>
        <SearchContent />
      </Suspense>
    </>
  )
} 