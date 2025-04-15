'use client'

import React, { useState } from 'react'
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Image, 
  VStack, 
  HStack, 
  Button, 
  Flex, 
  Icon,
  Badge,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Grid,
  GridItem,
  Divider,
  Tag,
  TagLabel,
  Stack,
  useToast
} from '@chakra-ui/react'
import { FaSearch, FaShoppingCart, FaStar, FaFilter, FaChevronDown, FaTruck, FaShieldAlt, FaExchangeAlt } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

// Categories with stock images
const categories = [
  {
    id: 1,
    name: "Lighting",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    count: 24
  },
  {
    id: 2,
    name: "Furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    count: 36
  },
  {
    id: 3,
    name: "Bathroom",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    count: 18
  },
  {
    id: 4,
    name: "Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    count: 42
  }
]

// Products with stock images
const products = [
  {
    id: 1,
    name: "Modern Pendant Light",
    price: 129.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.8,
    reviewCount: 128,
    category: "Lighting",
    description: "Contemporary pendant light with adjustable height and dimmable LED technology",
    features: ["Dimmable LED", "Adjustable height", "Modern design", "Easy installation"],
    shipping: "Free shipping",
    returnPolicy: "30-day returns",
    inStock: true,
    discount: 35
  },
  {
    id: 2,
    name: "Mid-Century Sofa",
    price: 899.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.9,
    reviewCount: 256,
    category: "Furniture",
    description: "Classic mid-century modern sofa with premium fabric and solid wood frame",
    features: ["Premium fabric", "Solid wood frame", "Comfortable cushions", "Assembly required"],
    shipping: "Free shipping",
    returnPolicy: "30-day returns",
    inStock: true,
    discount: 30
  },
  {
    id: 3,
    name: "Luxury Rainfall Shower System",
    price: 249.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1629774631753-88f827bf6447?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.7,
    reviewCount: 89,
    category: "Bathroom",
    description: "Luxury rainfall shower system with multiple spray patterns and temperature control",
    features: ["Multiple spray patterns", "Temperature control", "Water-saving", "Easy installation"],
    shipping: "Free shipping",
    returnPolicy: "30-day returns",
    inStock: true,
    discount: 28
  },
  {
    id: 4,
    name: "Smart Refrigerator",
    price: 1999.99,
    originalPrice: 2499.99,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.9,
    reviewCount: 156,
    category: "Kitchen",
    description: "Smart refrigerator with touch screen, Wi-Fi connectivity, and energy-efficient design",
    features: ["Wi-Fi connectivity", "Touch screen", "Energy efficient", "Spacious interior"],
    shipping: "Free shipping",
    returnPolicy: "30-day returns",
    inStock: true,
    discount: 20
  }
]

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const toast = useToast()

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (product: any) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="gray.50">
        <Container maxW="container.xl" py={8}>
          {/* Hero Section */}
          <Box mb={12} textAlign="center">
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="900"
              letterSpacing="-0.02em"
              mb={4}
            >
              Home Improvement Shop
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Discover premium home improvement products and accessories for your space
            </Text>
          </Box>

          {/* Search and Filter Section */}
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={4}
            mb={8}
            align="center"
            bg="white"
            p={4}
            borderRadius="lg"
            boxShadow="sm"
          >
            <InputGroup maxW={{ base: "full", md: "400px" }}>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} color="gray.400" />
              </InputLeftElement>
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="gray.50"
                borderRadius="full"
              />
            </InputGroup>
            <HStack spacing={4}>
              <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                bg="gray.50"
                borderRadius="full"
                maxW="200px"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </Select>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                bg="gray.50"
                borderRadius="full"
                maxW="200px"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </Select>
            </HStack>
          </Flex>

          {/* Categories Grid */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} mb={12}>
            {categories.map(category => (
              <Box
                key={category.id}
                position="relative"
                borderRadius="lg"
                overflow="hidden"
                cursor="pointer"
                onClick={() => setSelectedCategory(category.name)}
                _hover={{
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s'
                }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  h="200px"
                  w="full"
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={4}
                  bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                >
                  <Text color="white" fontWeight="bold" fontSize="lg">
                    {category.name}
                  </Text>
                  <Text color="whiteAlpha.800" fontSize="sm">
                    {category.count} products
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          {/* Products Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {filteredProducts.map(product => (
              <Box
                key={product.id}
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
                <Box position="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    h="300px"
                    w="full"
                    objectFit="cover"
                  />
                  {product.discount && (
                    <Badge
                      position="absolute"
                      top={4}
                      right={4}
                      colorScheme="red"
                      fontSize="sm"
                      px={2}
                      py={1}
                    >
                      {product.discount}% OFF
                    </Badge>
                  )}
                </Box>
                <Box p={6}>
                  <VStack align="start" spacing={4}>
                    <Badge colorScheme="blue" variant="subtle">
                      {product.category}
                    </Badge>
                    <Heading size="md">{product.name}</Heading>
                    <Text color="gray.600" noOfLines={2}>
                      {product.description}
                    </Text>
                    <Stack direction="row" spacing={2}>
                      {product.features.map((feature, index) => (
                        <Tag key={index} size="sm" colorScheme="gray">
                          <TagLabel>{feature}</TagLabel>
                        </Tag>
                      ))}
                    </Stack>
                    <HStack>
                      <Icon as={FaStar} color="yellow.400" />
                      <Text>{product.rating}</Text>
                      <Text color="gray.500">({product.reviewCount} reviews)</Text>
                    </HStack>
                    <HStack>
                      <Text fontSize="xl" fontWeight="bold" color="blue.600">
                        ${product.price.toFixed(2)}
                      </Text>
                      <Text fontSize="sm" color="gray.500" textDecoration="line-through">
                        ${product.originalPrice.toFixed(2)}
                      </Text>
                    </HStack>
                    <HStack spacing={4} color="gray.500" fontSize="sm">
                      <HStack>
                        <Icon as={FaTruck} />
                        <Text>{product.shipping}</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaShieldAlt} />
                        <Text>{product.returnPolicy}</Text>
                      </HStack>
                    </HStack>
                    <Button
                      leftIcon={<FaShoppingCart />}
                      colorScheme="blue"
                      size="lg"
                      w="full"
                      onClick={() => handleAddToCart(product)}
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