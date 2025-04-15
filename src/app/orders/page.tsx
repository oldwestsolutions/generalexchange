'use client'

import { Box, Container, Heading, Text, VStack, HStack, Button, Image, Icon, Flex, useColorModeValue, Badge } from '@chakra-ui/react'
import { FaBox, FaCheckCircle, FaTruck, FaArrowLeft } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

// Mock order data
const orders = [
  {
    id: "ORD-2023-001",
    date: "2023-06-15",
    status: "Delivered",
    items: [
      {
        id: 1,
        name: "Luxury Rainfall Shower System",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1629774631753-88f827bf6447",
        quantity: 1
      }
    ],
    total: 329.99,
    trackingNumber: "TRK123456789"
  },
  {
    id: "ORD-2023-002",
    date: "2023-05-20",
    status: "Delivered",
    items: [
      {
        id: 2,
        name: "Smart Thermostat",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1558002038-1055e3fdf0ad",
        quantity: 2
      }
    ],
    total: 439.98,
    trackingNumber: "TRK987654321"
  }
]

export default function Orders() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "green"
      case "Shipped":
        return "blue"
      case "Processing":
        return "yellow"
      default:
        return "gray"
    }
  }

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            {/* Header */}
            <Flex justify="space-between" align="center">
              <Heading size="lg">Order History</Heading>
              <Button
                leftIcon={<Icon as={FaArrowLeft} />}
                variant="ghost"
                colorScheme="blue"
              >
                Back to Shop
              </Button>
            </Flex>

            {/* Orders List */}
            <VStack spacing={6} align="stretch">
              {orders.map((order) => (
                <Box
                  key={order.id}
                  bg={bgColor}
                  borderRadius="lg"
                  boxShadow="sm"
                  border="1px"
                  borderColor={borderColor}
                  overflow="hidden"
                >
                  {/* Order Header */}
                  <Flex
                    p={6}
                    justify="space-between"
                    align="center"
                    borderBottom="1px"
                    borderColor={borderColor}
                  >
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="bold">Order #{order.id}</Text>
                      <Text color="gray.600" fontSize="sm">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </Text>
                    </VStack>
                    <Badge
                      colorScheme={getStatusColor(order.status)}
                      fontSize="sm"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {order.status}
                    </Badge>
                  </Flex>

                  {/* Order Items */}
                  <Box p={6}>
                    {order.items.map((item) => (
                      <Flex key={item.id} mb={4} align="center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          boxSize="80px"
                          objectFit="cover"
                          borderRadius="md"
                        />
                        <Box ml={4} flex={1}>
                          <Text fontWeight="bold">{item.name}</Text>
                          <Text color="gray.600">
                            ${item.price.toFixed(2)} × {item.quantity}
                          </Text>
                        </Box>
                      </Flex>
                    ))}
                  </Box>

                  {/* Order Footer */}
                  <Flex
                    p={6}
                    justify="space-between"
                    align="center"
                    bg="gray.50"
                  >
                    <HStack spacing={4}>
                      <Button
                        leftIcon={<Icon as={FaBox} />}
                        variant="ghost"
                        size="sm"
                      >
                        View Details
                      </Button>
                      <Button
                        leftIcon={<Icon as={FaTruck} />}
                        variant="ghost"
                        size="sm"
                      >
                        Track Order
                      </Button>
                    </HStack>
                    <Text fontWeight="bold">
                      Total: ${order.total.toFixed(2)}
                    </Text>
                  </Flex>
                </Box>
              ))}
            </VStack>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 