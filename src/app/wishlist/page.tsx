'use client'

import { Box, Container, Heading, Text, VStack, HStack, Button, Image, Icon, Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { FaHeart, FaShoppingCart, FaArrowLeft } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

// Mock wishlist data
const wishlistItems = [
  {
    id: 1,
    name: "Luxury Rainfall Shower System",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1629774631753-88f827bf6447",
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: 2,
    name: "Smart Thermostat",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1558002038-1055e3fdf0ad",
    rating: 4.6,
    reviewCount: 89
  },
  {
    id: 3,
    name: "Modern Ceiling Fan",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1583845112209-5eb7fd8096d4",
    rating: 4.7,
    reviewCount: 56
  }
]

export default function Wishlist() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            {/* Header */}
            <Flex justify="space-between" align="center">
              <Heading size="lg">My Wishlist</Heading>
              <Button
                leftIcon={<Icon as={FaArrowLeft} />}
                variant="ghost"
                colorScheme="blue"
              >
                Continue Shopping
              </Button>
            </Flex>

            {/* Wishlist Items */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {wishlistItems.map((item) => (
                <Box
                  key={item.id}
                  bg={bgColor}
                  borderRadius="lg"
                  boxShadow="sm"
                  border="1px"
                  borderColor={borderColor}
                  overflow="hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    h="200px"
                    w="full"
                    objectFit="cover"
                  />
                  <Box p={6}>
                    <Text fontWeight="bold" fontSize="lg" mb={2}>
                      {item.name}
                    </Text>
                    <HStack spacing={2} mb={2}>
                      <Text color="blue.500" fontWeight="bold">
                        ${item.price.toFixed(2)}
                      </Text>
                      <Text color="gray.500" textDecoration="line-through">
                        ${item.originalPrice.toFixed(2)}
                      </Text>
                    </HStack>
                    <HStack spacing={1} mb={4}>
                      <Icon as={FaHeart} color="red.500" />
                      <Text fontSize="sm" color="gray.600">
                        {item.rating} ({item.reviewCount} reviews)
                      </Text>
                    </HStack>
                    <Button
                      leftIcon={<Icon as={FaShoppingCart} />}
                      colorScheme="blue"
                      size="sm"
                      w="full"
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 