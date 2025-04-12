'use client'

import React from 'react'
import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, HStack, Button, Flex, Icon } from '@chakra-ui/react'
import { FaShoppingCart, FaStar } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

// Mock data for shop items
const shopItems = [
  {
    id: 1,
    name: "Modern Wall Sconce",
    price: 89.99,
    image: "https://via.placeholder.com/300x300?text=Wall+Sconce",
    rating: 4.8,
    category: "Lighting"
  },
  {
    id: 2,
    name: "Industrial Pendant Light",
    price: 129.99,
    image: "https://via.placeholder.com/300x300?text=Pendant+Light",
    rating: 4.9,
    category: "Lighting"
  },
  {
    id: 3,
    name: "Farmhouse Kitchen Faucet",
    price: 199.99,
    image: "https://via.placeholder.com/300x300?text=Kitchen+Faucet",
    rating: 4.7,
    category: "Plumbing"
  },
  {
    id: 4,
    name: "Marble Bathroom Vanity",
    price: 899.99,
    image: "https://via.placeholder.com/300x300?text=Bathroom+Vanity",
    rating: 4.9,
    category: "Bathroom"
  },
  {
    id: 5,
    name: "Smart Thermostat",
    price: 249.99,
    image: "https://via.placeholder.com/300x300?text=Thermostat",
    rating: 4.8,
    category: "Smart Home"
  },
  {
    id: 6,
    name: "Hardwood Flooring",
    price: 4.99,
    image: "https://via.placeholder.com/300x300?text=Hardwood+Flooring",
    rating: 4.7,
    category: "Flooring"
  }
]

export default function Shop() {
  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="white" pt={20}>
        <Container maxW="container.xl">
          <Heading size="xl" mb={8}>Shop Home Improvement</Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {shopItems.map((item) => (
              <Box
                key={item.id}
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="sm"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'md'
                }}
                transition="all 0.2s"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  w="100%"
                  h="300px"
                  objectFit="cover"
                />
                <Box p={6}>
                  <VStack align="start" spacing={4}>
                    <Text fontSize="sm" color="gray.500">{item.category}</Text>
                    <Heading size="md">{item.name}</Heading>
                    <HStack>
                      <Icon as={FaStar} color="yellow.400" />
                      <Text>{item.rating}</Text>
                    </HStack>
                    <Text fontSize="xl" fontWeight="bold">${item.price}</Text>
                    <Button
                      leftIcon={<FaShoppingCart />}
                      colorScheme="blue"
                      w="full"
                    >
                      Add to Cart
                    </Button>
                  </VStack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
} 