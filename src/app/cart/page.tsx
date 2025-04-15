'use client'

import { Box, Container, Heading, Text, VStack, HStack, Button, Image, Icon, Flex, Divider, useColorModeValue } from '@chakra-ui/react'
import { FaTrash, FaArrowLeft } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: "Luxury Rainfall Shower System",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1629774631753-88f827bf6447",
    quantity: 1
  },
  {
    id: 2,
    name: "Smart Thermostat",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1558002038-1055e3fdf0ad",
    quantity: 1
  }
]

export default function Cart() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 0 // Free shipping
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + shipping + tax

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            {/* Header */}
            <Flex justify="space-between" align="center">
              <Heading size="lg">Shopping Cart</Heading>
              <Button
                leftIcon={<Icon as={FaArrowLeft} />}
                variant="ghost"
                colorScheme="blue"
              >
                Continue Shopping
              </Button>
            </Flex>

            {/* Cart Items */}
            <Box bg={bgColor} borderRadius="lg" boxShadow="sm" border="1px" borderColor={borderColor}>
              {cartItems.map((item) => (
                <Box key={item.id}>
                  <Flex p={6} align="center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      boxSize="100px"
                      objectFit="cover"
                      borderRadius="md"
                    />
                    <Box flex={1} ml={6}>
                      <Text fontWeight="bold" fontSize="lg">{item.name}</Text>
                      <Text color="gray.600">${item.price.toFixed(2)}</Text>
                    </Box>
                    <HStack spacing={4}>
                      <Button size="sm">-</Button>
                      <Text>{item.quantity}</Text>
                      <Button size="sm">+</Button>
                      <Icon as={FaTrash} color="red.500" cursor="pointer" />
                    </HStack>
                  </Flex>
                  <Divider />
                </Box>
              ))}
            </Box>

            {/* Order Summary */}
            <Box bg={bgColor} p={6} borderRadius="lg" boxShadow="sm" border="1px" borderColor={borderColor}>
              <Heading size="md" mb={4}>Order Summary</Heading>
              <VStack spacing={3} align="stretch">
                <Flex justify="space-between">
                  <Text>Subtotal</Text>
                  <Text>${subtotal.toFixed(2)}</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text>Shipping</Text>
                  <Text>Free</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text>Tax</Text>
                  <Text>${tax.toFixed(2)}</Text>
                </Flex>
                <Divider />
                <Flex justify="space-between" fontWeight="bold">
                  <Text>Total</Text>
                  <Text>${total.toFixed(2)}</Text>
                </Flex>
                <Button
                  size="lg"
                  colorScheme="blue"
                  mt={4}
                >
                  Proceed to Checkout
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 