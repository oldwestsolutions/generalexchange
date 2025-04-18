'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, Button, Input, InputGroup, InputRightElement, IconButton, Flex, Link, HStack, Badge, SimpleGrid, InputLeftElement, useColorModeValue, ButtonGroup, Skeleton } from '@chakra-ui/react'
import { FaSearch, FaTools, FaHammer, FaPaintRoller, FaWrench, FaHome, FaBuilding, FaChevronLeft, FaChevronRight, FaShieldAlt, FaExclamationTriangle, FaFire, FaStar, FaMedal, FaCrown, FaCoins, FaHandshake, FaNetworkWired, FaUsers, FaChartLine, FaNewspaper, FaBolt, FaTree, FaTemperatureHigh } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import NextLink from 'next/link'
import { Icon } from '@chakra-ui/react'

export default function Home() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const cardBgColor = "white";
  const iconColor = "blue.500";
  const iconBgColor = "blue.50";
  const textColor = "gray.600";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const quickLinks = [
    {
      title: 'Find Contractors',
      description: 'Search for local contractors in your area',
      icon: FaSearch,
      href: '/search'
    },
    {
      title: 'Electrical Services',
      description: 'Professional electrical installation and repairs',
      icon: FaBolt,
      href: '/services/electrical'
    },
    {
      title: 'Painting Services',
      description: 'Interior and exterior painting experts',
      icon: FaPaintRoller,
      href: '/services/painting'
    },
    {
      title: 'Landscaping',
      description: 'Garden design and maintenance services',
      icon: FaTree,
      href: '/services/landscaping'
    },
    {
      title: 'Plumbing',
      description: 'Expert plumbing services and repairs',
      icon: FaWrench,
      href: '/services/plumbing'
    },
    {
      title: 'HVAC',
      description: 'Heating and cooling system services',
      icon: FaTemperatureHigh,
      href: '/services/hvac'
    }
  ]

  return (
    <>
      <Navbar />
      {/* eBay-style Hero Section */}
      <Box bg="white" py={4} borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} align="stretch" gap={10}>
            {/* Left: Carousel */}
            <Box flex="1" minW={{ base: '100%', md: '380px' }} maxW={{ base: '100%', md: '420px' }} display="flex" alignItems="center" justifyContent="center">
              <HeroCarousel />
            </Box>
            {/* Right: Description, Search, Featured Products */}
            <VStack flex="1" align="stretch" spacing={6} justify="center" minW={0}>
              <Box>
                <Text fontSize={{ base: 'xl', md: '2xl' }} color="gray.800" fontWeight="bold" mb={2}>
                  Find the right contractor for your next project
                </Text>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  Post your project, get free quotes, and hire with confidence. All payments are protected by escrow.
                </Text>
              </Box>
              {/* Search Bar */}
              <Box w="full">
                <form onSubmit={handleSearch} style={{ width: '100%' }}>
                  <InputGroup size={{ base: "md", md: "lg" }}>
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for contractors, services, or products..."
                      borderRadius="full"
                      bg={cardBgColor}
                      _focus={{
                        borderColor: "blue.400",
                        boxShadow: "0 0 0 1px blue.400"
                      }}
                      _hover={{ borderColor: 'gray.400' }}
                      fontSize={{ base: "md", md: "lg" }}
                      py={{ base: 4, md: 6 }}
                      px={{ base: 6, md: 8 }}
                      color="gray.800"
                      _placeholder={{ color: 'gray.400' }}
                    />
                    <InputRightElement h="full" pr={0}>
                      <Button
                        type="submit"
                        aria-label="Search"
                        colorScheme="blue"
                        borderRadius="full"
                        size={{ base: "md", md: "lg" }}
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
              {/* Homeowner News */}
              <Box 
                w="full" 
                maxW="100%" 
                mx="auto" 
                mb={0} 
                position="relative" 
                bg="white" 
                borderRadius="2xl" 
                boxShadow="lg" 
                border="1.5px solid #e2e8f0" 
                p={{ base: 4, md: 6 }} 
                textAlign="center" 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center"
                transition="all 0.3s"
                _hover={{ boxShadow: 'xl' }}
              >
                <Heading 
                  as="h2" 
                  fontSize={{ base: 'xl', md: '2xl' }} 
                  color="gray.800" 
                  mb={8}
                  textAlign="center"
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50px',
                    height: '3px',
                    bg: 'blue.400',
                    borderRadius: 'full'
                  }}
                >
                  Homeowner News
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" maxW="container.md" mx="auto">
                  {/* Market Trends */}
                  <Box 
                    as={NextLink} 
                    href="/news/market-trends" 
                    p={4} 
                    borderRadius="xl" 
                    bg="red.50" 
                    boxShadow="sm" 
                    _hover={{ 
                      transform: 'translateY(-4px)', 
                      boxShadow: 'xl',
                      borderColor: 'blue.200'
                    }}
                    transition="all 0.3s"
                    border="1px solid"
                    borderColor="gray.100"
                    position="relative"
                    overflow="hidden"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                  >
                    <Box 
                      position="absolute" 
                      top={0} 
                      right={0} 
                      w="100px" 
                      h="100px" 
                      bg="white" 
                      borderRadius="full" 
                      transform="translate(50%, -50%)"
                      opacity={0.2}
                    />
                    <Icon as={FaChartLine} color="blue.500" boxSize={6} mb={3} />
                    <Heading as="h3" fontSize="lg" color="red.700" mb={3}>
                      Market Trends
                    </Heading>
                    <VStack align="center" spacing={2.5} w="full">
                      <Text fontSize="sm" color="blue.600" fontWeight="semibold" lineHeight="tall">Home Values Up 5.2%</Text>
                      <Text fontSize="sm" color={textColor} lineHeight="tall">Local market shows steady growth</Text>
                      <Text fontSize="sm" color={textColor} lineHeight="tall">Best time to invest in improvements</Text>
                    </VStack>
                  </Box>

                  {/* Renovation Tips */}
                  <Box 
                    as={NextLink} 
                    href="/news/renovation-tips" 
                    p={4} 
                    borderRadius="xl" 
                    bg="yellow.50" 
                    boxShadow="sm" 
                    _hover={{ 
                      transform: 'translateY(-4px)', 
                      boxShadow: 'xl',
                      borderColor: 'blue.200'
                    }}
                    transition="all 0.3s"
                    border="1px solid"
                    borderColor="gray.100"
                    position="relative"
                    overflow="hidden"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                  >
                    <Box 
                      position="absolute" 
                      top={0} 
                      right={0} 
                      w="100px" 
                      h="100px" 
                      bg="white" 
                      borderRadius="full" 
                      transform="translate(50%, -50%)"
                      opacity={0.2}
                    />
                    <Icon as={FaTools} color="blue.500" boxSize={6} mb={3} />
                    <Heading as="h3" fontSize="lg" color="yellow.700" mb={3}>
                      Renovation Tips
                    </Heading>
                    <VStack align="center" spacing={2.5} w="full">
                      <Text fontSize="sm" color="blue.600" fontWeight="semibold" lineHeight="tall">ROI Guide 2024</Text>
                      <Text fontSize="sm" color={textColor} lineHeight="tall">Top projects for value increase</Text>
                      <Text fontSize="sm" color={textColor} lineHeight="tall">Expert advice for homeowners</Text>
                    </VStack>
                  </Box>

                  {/* Investment News */}
                  <Box 
                    as={NextLink} 
                    href="/news/investment" 
                    p={4} 
                    borderRadius="xl" 
                    bg="blue.50" 
                    boxShadow="sm" 
                    _hover={{ 
                      transform: 'translateY(-4px)', 
                      boxShadow: 'xl',
                      borderColor: 'blue.200'
                    }}
                    transition="all 0.3s"
                    border="1px solid"
                    borderColor="gray.100"
                    position="relative"
                    overflow="hidden"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                  >
                    <Box 
                      position="absolute" 
                      top={0} 
                      right={0} 
                      w="100px" 
                      h="100px" 
                      bg="white" 
                      borderRadius="full" 
                      transform="translate(50%, -50%)"
                      opacity={0.2}
                    />
                    <Icon as={FaCoins} color="blue.500" boxSize={6} mb={3} />
                    <Heading as="h3" fontSize="lg" color="blue.700" mb={3}>
                      Investment News
                    </Heading>
                    <VStack align="center" spacing={2.5} w="full">
                      <Text fontSize="sm" color="blue.600" fontWeight="semibold" lineHeight="tall">Smart Home ROI</Text>
                      <Text fontSize="sm" color={textColor} lineHeight="tall">Tech upgrades that pay off</Text>
                      <Text fontSize="sm" color={textColor} lineHeight="tall">Future-proof your home</Text>
                    </VStack>
                  </Box>
                </SimpleGrid>

                <Button 
                  as={NextLink} 
                  href="/news" 
                  colorScheme="blue" 
                  size="sm" 
                  borderRadius="full" 
                  fontWeight="bold" 
                  px={6} 
                  py={3} 
                  fontSize="md"
                  mt={8}
                  leftIcon={<Icon as={FaNewspaper} />}
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  transition="all 0.2s"
                >
                  Read More News
                </Button>
              </Box>
            </VStack>
          </Flex>
          {/* Category Chips (below hero) */}
          <Flex wrap="wrap" justify="center" gap={3} mb={2} mt={8}>
            {[
              { name: 'Home Improvement', href: '/services/home-improvement' },
              { name: 'Remodeling', href: '/services/remodeling' },
              { name: 'Plumbing', href: '/services/plumbing' },
              { name: 'Painting', href: '/services/painting' },
              { name: 'Electrical', href: '/services/electrical' },
              { name: 'Landscaping', href: '/services/landscaping' },
              { name: 'Cleaning', href: '/services/cleaning' },
              { name: 'More...', href: '/services' }
            ].map((cat) => (
              <Button
                key={cat.name}
                as={NextLink}
                href={cat.href}
                variant="outline"
                colorScheme="gray"
                borderRadius="full"
                size="sm"
                fontWeight="500"
                px={5}
                _hover={{ bg: 'gray.100', borderColor: 'orange.400', color: 'orange.500' }}
              >
                {cat.name}
              </Button>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* Dynamic Sections as Carousels */}
      <Container maxW="container.xl" py={12} bg="white">
        <Box py={8} bg="white" borderRadius="2xl" mb={10} boxShadow="sm">
          <SectionCarousel title="Featured" products={featuredProducts} cardBgColor={cardBgColor} />
        </Box>

        {/* New Banner Section */}
        <Box w="full" bg="white" py={6} mb={10}>
          <Container maxW="container.xl">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {/* Left Column */}
              <Box
                w="full"
                h="220px"
                bg="gray.100"
                borderRadius="xl"
                position="relative"
                overflow="hidden"
                boxShadow="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                transition="all 0.3s"
                cursor="pointer"
              >
                <Flex
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="purple.600"
                  px={8}
                  py={8}
                  alignItems="center"
                  justifyContent="space-between"
                  backgroundImage="linear-gradient(135deg, purple.600, purple.700)"
                >
                  <Box color="white" maxW="65%">
                    <Heading size="lg" mb={4} display="flex" alignItems="center" gap={3}>
                      <Icon as={FaTools} boxSize={6} />
                      Quality Services
                    </Heading>
                    <Text fontSize="md" mb={4} lineHeight="tall">
                      Find top-rated professionals for your next home project
                    </Text>
                    <Button
                      size="md"
                      colorScheme="whiteAlpha"
                      _hover={{ bg: 'whiteAlpha.300' }}
                      leftIcon={<Icon as={FaHammer} />}
                    >
                      Find Pros
                    </Button>
                  </Box>
                  <Icon as={FaHome} color="white" boxSize={12} opacity={0.9} />
                </Flex>
              </Box>

              {/* Right Column */}
              <Box
                w="full"
                h="220px"
                bg="gray.100"
                borderRadius="xl"
                position="relative"
                overflow="hidden"
                boxShadow="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                transition="all 0.3s"
                cursor="pointer"
              >
                <Flex
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="pink.600"
                  px={8}
                  py={8}
                  alignItems="center"
                  justifyContent="space-between"
                  backgroundImage="linear-gradient(135deg, pink.600, pink.700)"
                >
                  <Box color="white" maxW="65%">
                    <Heading size="lg" mb={4} display="flex" alignItems="center" gap={3}>
                      <Icon as={FaWrench} boxSize={6} />
                      Home Projects
                    </Heading>
                    <Text fontSize="md" mb={4} lineHeight="tall">
                      Expert solutions for all your home improvement needs
                    </Text>
                    <Button
                      size="md"
                      colorScheme="whiteAlpha"
                      _hover={{ bg: 'whiteAlpha.300' }}
                      leftIcon={<Icon as={FaTools} />}
                    >
                      Get Started
                    </Button>
                  </Box>
                  <Icon as={FaBuilding} color="white" boxSize={12} opacity={0.9} />
                </Flex>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>

        <Box py={8} bg="white" borderRadius="2xl" mb={10} boxShadow="sm">
          <SectionCarousel title="Recommended for You" products={recommendedProducts} cardBgColor={cardBgColor} />
        </Box>

        {/* Updated Trusted Network Banner */}
        <Box w="full" bg="white" py={6} mb={10}>
          <Container maxW="container.xl">
            <Box
              w="full"
              h="220px"
              bg="gray.100"
              borderRadius="xl"
              position="relative"
              overflow="hidden"
              boxShadow="lg"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
              transition="all 0.3s"
              cursor="pointer"
            >
              <Flex
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="blue.600"
                px={12}
                py={10}
                alignItems="center"
                justifyContent="space-between"
                backgroundImage="linear-gradient(135deg, blue.600, blue.700)"
              >
                <Box color="white" maxW="55%">
                  <Heading size="lg" mb={5} display="flex" alignItems="center" gap={3}>
                    <Icon as={FaShieldAlt} boxSize={7} />
                    Trusted Contractor Network
                  </Heading>
                  <Text fontSize="lg" mb={6} lineHeight="tall">
                    Join our network of verified professionals. Get more leads, grow your business, and build your reputation.
                  </Text>
                  <Button
                    size="lg"
                    colorScheme="whiteAlpha"
                    _hover={{ bg: 'whiteAlpha.300' }}
                    leftIcon={<Icon as={FaHandshake} />}
                  >
                    Join Our Network
                  </Button>
                </Box>
                <Flex direction="column" gap={6} alignItems="center" mr={4}>
                  <Icon as={FaNetworkWired} color="white" boxSize={14} opacity={0.9} />
                  <Icon as={FaUsers} color="white" boxSize={14} opacity={0.9} />
                </Flex>
              </Flex>
            </Box>
          </Container>
        </Box>

        <Box py={8} bg="white" borderRadius="2xl" mb={10} boxShadow="sm">
          <SectionCarousel title="Top Liked" products={topLikedProducts} cardBgColor={cardBgColor} />
        </Box>
        <Box w="full" bg="white" py={6}>
          <Container maxW="container.xl">
            <Box
              w="full"
              h="200px"
              bg="gray.100"
              borderRadius="xl"
              position="relative"
              overflow="hidden"
              boxShadow="md"
              _hover={{ boxShadow: 'lg' }}
              transition="all 0.3s"
              cursor="pointer"
            >
              <Flex
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="green.600"
                p={8}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box color="white" maxW="60%">
                  <Heading size="lg" mb={4}>
                    Home Improvement Made Easy
                  </Heading>
                  <Text fontSize="xl" mb={6}>
                    Get instant quotes from top-rated contractors in your area
                  </Text>
                  <Button
                    size="lg"
                    colorScheme="white"
                    variant="outline"
                    _hover={{ bg: 'whiteAlpha.200' }}
                  >
                    Get Started
                  </Button>
                </Box>
                <Icon as={FaHome} color="white" boxSize={24} opacity={0.9} />
              </Flex>
            </Box>
          </Container>
        </Box>
        <Box py={8} bg="white" borderRadius="2xl" mb={10} boxShadow="sm">
          <SectionCarousel title="Best Sellers" products={bestSellers} cardBgColor={cardBgColor} />
        </Box>

        {/* Two Column Section */}
        <Box w="full" bg="white" py={6} mb={10}>
          <Container maxW="container.xl">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {/* Left Column */}
              <Box
                w="full"
                h="220px"
                bg="gray.100"
                borderRadius="xl"
                position="relative"
                overflow="hidden"
                boxShadow="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                transition="all 0.3s"
                cursor="pointer"
              >
                <Flex
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="teal.600"
                  px={8}
                  py={8}
                  alignItems="center"
                  justifyContent="space-between"
                  backgroundImage="linear-gradient(135deg, teal.600, teal.700)"
                >
                  <Box color="white" maxW="65%">
                    <Heading size="lg" mb={4} display="flex" alignItems="center" gap={3}>
                      <Icon as={FaTools} boxSize={6} />
                      Professional Services
                    </Heading>
                    <Text fontSize="md" mb={4} lineHeight="tall">
                      Expert contractors for every home improvement project
                    </Text>
                    <Button
                      size="md"
                      colorScheme="whiteAlpha"
                      _hover={{ bg: 'whiteAlpha.300' }}
                      leftIcon={<Icon as={FaHammer} />}
                    >
                      Find Contractors
                    </Button>
                  </Box>
                  <Icon as={FaBuilding} color="white" boxSize={12} opacity={0.9} />
                </Flex>
              </Box>

              {/* Right Column */}
              <Box
                w="full"
                h="220px"
                bg="gray.100"
                borderRadius="xl"
                position="relative"
                overflow="hidden"
                boxShadow="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                transition="all 0.3s"
                cursor="pointer"
              >
                <Flex
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="orange.600"
                  px={8}
                  py={8}
                  alignItems="center"
                  justifyContent="space-between"
                  backgroundImage="linear-gradient(135deg, orange.600, orange.700)"
                >
                  <Box color="white" maxW="65%">
                    <Heading size="lg" mb={4} display="flex" alignItems="center" gap={3}>
                      <Icon as={FaHome} boxSize={6} />
                      Home Services
                    </Heading>
                    <Text fontSize="md" mb={4} lineHeight="tall">
                      Quality maintenance and repair services for your home
                    </Text>
                    <Button
                      size="md"
                      colorScheme="whiteAlpha"
                      _hover={{ bg: 'whiteAlpha.300' }}
                      leftIcon={<Icon as={FaWrench} />}
                    >
                      Book Service
                    </Button>
                  </Box>
                  <Icon as={FaPaintRoller} color="white" boxSize={12} opacity={0.9} />
                </Flex>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>

        <Box py={8} bg="white" borderRadius="2xl" mb={10} boxShadow="sm">
          <SectionCarousel title="High Rated" products={highRatedProducts} cardBgColor={cardBgColor} />
        </Box>
        {/* News Section */}
        <Box py={8} bg="white" borderRadius="2xl" mb={10} boxShadow="sm">
          <Heading size="lg" mb={8} textAlign="center" color="gray.800">Homeowner & Real Estate News</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} px={4}>
            {/* News Column */}
            <Box>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                <Box
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  boxShadow="sm"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                    transition: 'all 0.2s'
                  }}
                  transition="all 0.2s"
                  as={NextLink}
                  href="/news/market-trends"
                  cursor="pointer"
                  borderLeft="4px solid"
                  borderColor="blue.400"
                >
                  <Flex direction="column" gap={3}>
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="full"
                      bg="blue.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaChartLine} boxSize={4} color="blue.500" />
                    </Box>
                    <Box>
                      <Heading size="sm" mb={1} color="blue.700">Market Trends</Heading>
                      <Text color="blue.600" fontSize="sm" fontWeight="semibold">Home Values Up 5.2%</Text>
                      <Text color="gray.600" fontSize="sm">Local market shows steady growth</Text>
                    </Box>
                  </Flex>
                </Box>

                <Box
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  boxShadow="sm"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                    transition: 'all 0.2s'
                  }}
                  transition="all 0.2s"
                  as={NextLink}
                  href="/news/renovation-tips"
                  cursor="pointer"
                  borderLeft="4px solid"
                  borderColor="green.400"
                >
                  <Flex direction="column" gap={3}>
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="full"
                      bg="green.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaTools} boxSize={4} color="green.500" />
                    </Box>
                    <Box>
                      <Heading size="sm" mb={1} color="green.700">Renovation Guide</Heading>
                      <Text color="green.600" fontSize="sm" fontWeight="semibold">ROI Guide 2024</Text>
                      <Text color="gray.600" fontSize="sm">Top projects for value increase</Text>
                    </Box>
                  </Flex>
                </Box>

                <Box
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  boxShadow="sm"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                    transition: 'all 0.2s'
                  }}
                  transition="all 0.2s"
                  as={NextLink}
                  href="/news/smart-home"
                  cursor="pointer"
                  borderLeft="4px solid"
                  borderColor="purple.400"
                >
                  <Flex direction="column" gap={3}>
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="full"
                      bg="purple.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaBolt} boxSize={4} color="purple.500" />
                    </Box>
                    <Box>
                      <Heading size="sm" mb={1} color="purple.700">Smart Home Trends</Heading>
                      <Text color="purple.600" fontSize="sm" fontWeight="semibold">Tech Integration Guide</Text>
                      <Text color="gray.600" fontSize="sm">Latest smart home innovations</Text>
                    </Box>
                  </Flex>
                </Box>

                <Box
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  boxShadow="sm"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                    transition: 'all 0.2s'
                  }}
                  transition="all 0.2s"
                  as={NextLink}
                  href="/news/sustainability"
                  cursor="pointer"
                  borderLeft="4px solid"
                  borderColor="teal.400"
                >
                  <Flex direction="column" gap={3}>
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="full"
                      bg="teal.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaTree} boxSize={4} color="teal.500" />
                    </Box>
                    <Box>
                      <Heading size="sm" mb={1} color="teal.700">Eco-Friendly Homes</Heading>
                      <Text color="teal.600" fontSize="sm" fontWeight="semibold">Sustainable Living</Text>
                      <Text color="gray.600" fontSize="sm">Green home improvements</Text>
                    </Box>
                  </Flex>
                </Box>

                <Box
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  boxShadow="sm"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                    transition: 'all 0.2s'
                  }}
                  transition="all 0.2s"
                  as={NextLink}
                  href="/news/financing"
                  cursor="pointer"
                  borderLeft="4px solid"
                  borderColor="yellow.400"
                >
                  <Flex direction="column" gap={3}>
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="full"
                      bg="yellow.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaCoins} boxSize={4} color="yellow.500" />
                    </Box>
                    <Box>
                      <Heading size="sm" mb={1} color="yellow.700">Home Financing</Heading>
                      <Text color="yellow.600" fontSize="sm" fontWeight="semibold">Renovation Loans</Text>
                      <Text color="gray.600" fontSize="sm">Smart financing options</Text>
                    </Box>
                  </Flex>
                </Box>

                <Box
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  boxShadow="sm"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                    transition: 'all 0.2s'
                  }}
                  transition="all 0.2s"
                  as={NextLink}
                  href="/news/safety"
                  cursor="pointer"
                  borderLeft="4px solid"
                  borderColor="red.400"
                >
                  <Flex direction="column" gap={3}>
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="full"
                      bg="red.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FaShieldAlt} boxSize={4} color="red.500" />
                    </Box>
                    <Box>
                      <Heading size="sm" mb={1} color="red.700">Home Safety</Heading>
                      <Text color="red.600" fontSize="sm" fontWeight="semibold">Security Updates</Text>
                      <Text color="gray.600" fontSize="sm">Latest safety features</Text>
                    </Box>
                  </Flex>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Newsletter Column */}
            <Box
              bg="white"
              p={6}
              borderRadius="xl"
              boxShadow="sm"
              border="1px solid"
              borderColor="gray.200"
              _hover={{ boxShadow: 'md' }}
              transition="all 0.2s"
            >
              <VStack spacing={6} align="center" w="full">
                <Box w="full" textAlign="center">
                  <Heading size="md" mb={4} color="gray.800" display="flex" alignItems="center" gap={2} justifyContent="center">
                    <Icon as={FaNewspaper} color="blue.500" boxSize={5} />
                    Stay Updated
                  </Heading>
                  <Text color="gray.700" fontSize="sm" fontWeight="medium" mb={4}>Get exclusive access to:</Text>
                  <SimpleGrid columns={2} spacing={4}>
                    <Box p={3} bg="blue.50" borderRadius="lg" _hover={{ transform: 'translateY(-2px)', transition: 'all 0.2s' }} transition="all 0.2s">
                      <VStack align="center" spacing={2}>
                        <Box bg="blue.100" p={2} borderRadius="md">
                          <Icon as={FaChartLine} color="blue.600" boxSize={4} />
                        </Box>
                        <Box textAlign="center">
                          <Text fontSize="sm" fontWeight="bold" color="blue.700">Market Analysis & Trends</Text>
                          <Text fontSize="xs" color="blue.600">Weekly market updates and forecasts</Text>
                        </Box>
                      </VStack>
                    </Box>

                    <Box p={3} bg="green.50" borderRadius="lg" _hover={{ transform: 'translateY(-2px)', transition: 'all 0.2s' }} transition="all 0.2s">
                      <VStack align="center" spacing={2}>
                        <Box bg="green.100" p={2} borderRadius="md">
                          <Icon as={FaTools} color="green.600" boxSize={4} />
                        </Box>
                        <Box textAlign="center">
                          <Text fontSize="sm" fontWeight="bold" color="green.700">Home Improvement Tips</Text>
                          <Text fontSize="xs" color="green.600">Expert advice and DIY guides</Text>
                        </Box>
                      </VStack>
                    </Box>

                    <Box p={3} bg="purple.50" borderRadius="lg" _hover={{ transform: 'translateY(-2px)', transition: 'all 0.2s' }} transition="all 0.2s">
                      <VStack align="center" spacing={2}>
                        <Box bg="purple.100" p={2} borderRadius="md">
                          <Icon as={FaHome} color="purple.600" boxSize={4} />
                        </Box>
                        <Box textAlign="center">
                          <Text fontSize="sm" fontWeight="bold" color="purple.700">Property Value Insights</Text>
                          <Text fontSize="xs" color="purple.600">Real-time property valuations</Text>
                        </Box>
                      </VStack>
                    </Box>

                    <Box p={3} bg="orange.50" borderRadius="lg" _hover={{ transform: 'translateY(-2px)', transition: 'all 0.2s' }} transition="all 0.2s">
                      <VStack align="center" spacing={2}>
                        <Box bg="orange.100" p={2} borderRadius="md">
                          <Icon as={FaHandshake} color="orange.600" boxSize={4} />
                        </Box>
                        <Box textAlign="center">
                          <Text fontSize="sm" fontWeight="bold" color="orange.700">Exclusive Contractor Deals</Text>
                          <Text fontSize="xs" color="orange.600">Special rates from trusted pros</Text>
                        </Box>
                      </VStack>
                    </Box>
                  </SimpleGrid>
                </Box>

                <Box w="full" bg="gray.50" p={4} borderRadius="lg" border="1px solid" borderColor="gray.200">
                  <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={3} textAlign="center">
                    Join 5,000+ homeowners getting weekly updates
                  </Text>
                  <InputGroup size="md">
                    <Input
                      placeholder="Enter your email"
                      bg="white"
                      borderRadius="full"
                      _focus={{
                        borderColor: "blue.400",
                        boxShadow: "0 0 0 1px blue.400"
                      }}
                    />
                    <InputRightElement width="auto" pr={1}>
                      <Button
                        size="sm"
                        colorScheme="blue"
                        borderRadius="full"
                        px={4}
                        leftIcon={<Icon as={FaNewspaper} />}
                      >
                        Subscribe
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>

                <VStack spacing={2} w="full" pt={2}>
                  <Text fontSize="xs" color="gray.500" textAlign="center">
                    ✓ Free weekly newsletter ✓ No spam ✓ Cancel anytime
                  </Text>
                  <Text fontSize="xs" color="gray.500" textAlign="center">
                    By subscribing, you agree to our Terms & Privacy Policy
                  </Text>
                </VStack>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </>
  )
}

// Helper components and mock data
const SectionHeading = (props: any) => (
  <Heading size="xl" mb={8} color="gray.800" letterSpacing="-1px" {...props} />
)

function SectionCarousel({ title, products, cardBgColor }: { title: string, products: any[], cardBgColor: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const iconColor = "blue.500";
  const iconBgColor = "blue.50";
  const textColor = "gray.600";

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : products.length - 4));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < products.length - 4 ? prevIndex + 1 : 0));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <Box position="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="lg" color="gray.800">{title}</Heading>
        <ButtonGroup spacing={2}>
          <IconButton
            aria-label="Previous"
            icon={<FaChevronLeft />}
            onClick={handlePrev}
            variant="ghost"
            colorScheme="blue"
            size="sm"
            isDisabled={currentIndex === 0}
          />
          <IconButton
            aria-label="Next"
            icon={<FaChevronRight />}
            onClick={handleNext}
            variant="ghost"
            colorScheme="blue"
            size="sm"
            isDisabled={currentIndex >= products.length - 4}
          />
        </ButtonGroup>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
        {visibleProducts.map((product, index) => (
          <Box
            key={index}
            as={NextLink}
            href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
            bg="white"
            p={6}
            borderRadius="xl"
            boxShadow="md"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: 'xl',
              transition: 'all 0.2s'
            }}
            transition="all 0.2s"
            border="1px solid"
            borderColor="gray.100"
            position="relative"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Box 
              position="absolute" 
              top={0} 
              right={0} 
              w="100px" 
              h="100px" 
              bg="white" 
              borderRadius="full" 
              transform="translate(50%, -50%)"
              opacity={0.2}
            />
            <Box position="relative" w="200px" h="200px" mb={4}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                sizes="(max-width: 768px) 200px, 200px"
              />
            </Box>
            <VStack align="center" spacing={2.5} w="full">
              <Text fontSize="sm" color={textColor} lineHeight="tall">{product.category}</Text>
              <Heading as="h3" fontSize="lg" color="gray.800" mb={3}>
                {product.name}
              </Heading>
              <Text fontSize="xl" fontWeight="bold" color="blue.600">
                ${product.price.toFixed(2)}
              </Text>
              <Button
                colorScheme="blue"
                size="sm"
                w="full"
                mt={2}
                _hover={{ bg: 'blue.600' }}
              >
                View Details
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

// Fix linter errors by typing NewsGrid and its parameters
interface NewsItem {
  title: string;
  summary: string;
}

const NewsGrid = ({ news }: { news: NewsItem[] }) => (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={4}>
    {news.map((item: NewsItem, idx: number) => (
      <Box key={idx} bg="gray.50" boxShadow="sm" borderRadius="lg" p={5} _hover={{ boxShadow: 'md', transform: 'translateY(-2px)', transition: 'all 0.2s' }} transition="all 0.2s">
        <Text fontWeight="bold" mb={2} fontSize="lg">{item.title}</Text>
        <Text color="gray.600" fontSize="md">{item.summary}</Text>
        <Button mt={3} size="sm" colorScheme="blue" variant="link">Read More</Button>
      </Box>
    ))}
  </SimpleGrid>
)

const featuredProducts = [
  { 
    name: 'Smart Thermostat', 
    category: 'Electronics', 
    price: 199.99, 
    image: 'https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'Rainfall Shower', 
    category: 'Home Improvement', 
    price: 299.99, 
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'LED Ceiling Fan', 
    category: 'Lighting', 
    price: 149.99, 
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'Cordless Drill', 
    category: 'Tools', 
    price: 89.99, 
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&h=600&q=80'
  },
]
const recommendedProducts = [
  { 
    name: 'Smart Lock', 
    category: 'Electronics', 
    price: 129.99, 
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'Paint Kit', 
    category: 'Paint', 
    price: 39.99, 
    image: 'https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'Garden Hose', 
    category: 'Garden', 
    price: 24.99, 
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'Flooring Tiles', 
    category: 'Flooring', 
    price: 59.99, 
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=600&h=600&q=80'
  },
]
const topLikedProducts = [
  { 
    name: 'Tool Set', 
    category: 'Tools', 
    price: 79.99, 
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'LED Bulbs', 
    category: 'Lighting', 
    price: 19.99, 
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'Smart Plug', 
    category: 'Electronics', 
    price: 29.99, 
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'Shower Head', 
    category: 'Home Improvement', 
    price: 49.99, 
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&h=600&q=80'
  },
]
const newsItems = [
  { title: 'New Partnership with Top Brands', summary: 'We are excited to announce new partnerships with leading home improvement brands.' },
  { title: 'Spring Sale is Live!', summary: 'Enjoy discounts on select products and services this spring.' },
  { title: 'How to Choose the Right Contractor', summary: 'Tips and tricks for finding the best professional for your next project.' },
]
const bestSellers = [
  { 
    name: 'Cordless Drill', 
    category: 'Tools', 
    price: 89.99, 
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'Smart Thermostat', 
    category: 'Electronics', 
    price: 199.99, 
    image: 'https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'LED Ceiling Fan', 
    category: 'Lighting', 
    price: 149.99, 
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'Paint Kit', 
    category: 'Paint', 
    price: 39.99, 
    image: 'https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&fit=crop&w=600&h=600&q=80'
  },
]
const highRatedProducts = [
  { 
    name: 'Rainfall Shower', 
    category: 'Home Improvement', 
    price: 299.99, 
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'Smart Lock', 
    category: 'Electronics', 
    price: 129.99, 
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'Tool Set', 
    category: 'Tools', 
    price: 79.99, 
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&h=600&q=80'
  },
  { 
    name: 'Garden Hose', 
    category: 'Garden', 
    price: 24.99, 
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&h=600&q=80'
  },
]

// Add a simple HeroCarousel component
const heroSlides = [
  {
    headline: 'Find Trusted Contractors',
    description: 'Connect with licensed, vetted professionals for any home project. Get started in minutes!',
    cta: 'Find a Contractor',
    ctaLink: '/search?type=contractor',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Kitchen Remodeling',
    description: 'Transform your kitchen with expert design and craftsmanship. Get free quotes today.',
    cta: 'Find Kitchen Pros',
    ctaLink: '/search?type=kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Bathroom Renovation',
    description: 'Create your dream bathroom with top-rated renovation specialists.',
    cta: 'Find Bathroom Pros',
    ctaLink: '/search?type=bathroom',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Home Office Setup',
    description: 'Design and build the perfect home office for productivity and comfort.',
    cta: 'Find Office Designers',
    ctaLink: '/search?type=office',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Outdoor Living',
    description: 'Create beautiful outdoor spaces with expert landscaping and design.',
    cta: 'Find Landscapers',
    ctaLink: '/search?type=landscaping',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Smart Home Upgrades',
    description: 'Modernize your home with the latest smart technology and automation.',
    cta: 'Find Smart Home Pros',
    ctaLink: '/search?type=smart-home',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Energy Efficiency',
    description: 'Save money and reduce your carbon footprint with energy-efficient upgrades.',
    cta: 'Find Energy Experts',
    ctaLink: '/search?type=energy',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Interior Design',
    description: 'Transform your space with professional interior design services.',
    cta: 'Find Designers',
    ctaLink: '/search?type=interior-design',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
  }
]

function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [progress, setProgress] = useState(0)
  const SLIDE_DURATION = 5000
  const FADE_DURATION = 800

  React.useEffect(() => {
    setFade(false)
    setProgress(0)
    const fadeTimeout = setTimeout(() => setFade(true), 80)
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % heroSlides.length)
        setFade(true)
      }, FADE_DURATION)
    }, SLIDE_DURATION)

    let frame: number
    let start: number | null = null
    function animateProgress(ts: number) {
      if (!start) start = ts
      const elapsed = ts - start
      setProgress(Math.min(elapsed / SLIDE_DURATION, 1))
      if (elapsed < SLIDE_DURATION) {
        frame = requestAnimationFrame(animateProgress)
      }
    }
    frame = requestAnimationFrame(animateProgress)
    return () => { clearInterval(timer); clearTimeout(fadeTimeout); cancelAnimationFrame(frame) }
  }, [index])

  const slide = heroSlides[index]

  const goTo = (i: number) => {
    setFade(false)
    setTimeout(() => {
      setIndex((i + heroSlides.length) % heroSlides.length)
      setFade(true)
    }, 80)
  }

  return (
    <Box 
      w="360px" 
      h="440px" 
      maxW="100%" 
      mx="auto" 
      mb={0} 
      position="relative" 
      bg="gray.50" 
      borderRadius="2xl" 
      boxShadow="lg" 
      border="1.5px solid #e2e8f0" 
      p={{ base: 4, md: 6 }} 
      textAlign="center" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="space-between"
      transition="all 0.3s"
    >
      {/* Left Arrow */}
      <IconButton
        aria-label="Previous"
        icon={<FaChevronLeft />}
        size="sm"
        variant="ghost"
        colorScheme="gray"
        position="absolute"
        top="60%"
        left={2}
        transform="translateY(-50%)"
        zIndex={2}
        onClick={() => goTo(index - 1)}
        opacity={0.7}
        _hover={{ opacity: 1, bg: 'gray.200' }}
        borderRadius="full"
      />
      {/* Right Arrow */}
      <IconButton
        aria-label="Next"
        icon={<FaChevronRight />}
        size="sm"
        variant="ghost"
        colorScheme="gray"
        position="absolute"
        top="60%"
        right={2}
        transform="translateY(-50%)"
        zIndex={2}
        onClick={() => goTo(index + 1)}
        opacity={0.7}
        _hover={{ opacity: 1, bg: 'gray.200' }}
        borderRadius="full"
      />

      {/* Image Container */}
      <Box 
        w="full" 
        h="200px" 
        position="relative" 
        mb={4}
        overflow="hidden"
        borderRadius="xl"
      >
        <Image
          src={slide.image}
          alt={slide.headline}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          style={{
            objectFit: 'cover',
            transition: 'opacity 0.8s',
            opacity: fade ? 1 : 0
          }}
        />
      </Box>

      {/* Content Container */}
      <Box 
        flex={1} 
        display="flex" 
        flexDirection="column" 
        justifyContent="space-between"
        w="full"
        style={{ transition: 'opacity 0.8s', opacity: fade ? 1 : 0 }}
      >
        <Box>
          <Text 
            fontSize={{ base: 'xl', md: '2xl' }} 
            fontWeight="extrabold" 
            color="gray.800" 
            mb={2}
            noOfLines={2}
          >
            {slide.headline}
          </Text>
          <Text 
            fontSize={{ base: 'sm', md: 'md' }} 
            color="gray.600" 
            mb={4}
            noOfLines={2}
          >
            {slide.description}
          </Text>
        </Box>

        <Button 
          as={NextLink} 
          href={slide.ctaLink} 
          colorScheme="orange" 
          size="sm" 
          borderRadius="full" 
          fontWeight="bold" 
          px={5} 
          py={2} 
          fontSize="md"
          mb={2}
        >
          {slide.cta}
        </Button>
      </Box>

      {/* Progress Bar */}
      <Box 
        w="80%" 
        h="2.5px" 
        bg="gray.200" 
        borderRadius="full" 
        mt={2} 
        mb={1} 
        mx="auto" 
        position="relative" 
        overflow="hidden"
      >
        <Box 
          h="full" 
          bg="orange.400" 
          borderRadius="full" 
          transition="width 0.2s" 
          style={{ width: `${progress * 100}%` }} 
        />
      </Box>

      {/* Minimal Dots */}
      <Flex 
        position="absolute" 
        bottom={2} 
        left="50%" 
        transform="translateX(-50%)" 
        gap={1.5}
      >
        {heroSlides.map((_, i) => (
          <Box 
            key={i} 
            w={1.5} 
            h={1.5} 
            borderRadius="full" 
            bg={i === index ? 'orange.400' : 'gray.200'} 
            opacity={i === index ? 1 : 0.7} 
          />
        ))}
      </Flex>
    </Box>
  )
}
