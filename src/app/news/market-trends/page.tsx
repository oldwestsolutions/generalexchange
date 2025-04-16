'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, Image, Flex, Icon, useColorModeValue, Button } from '@chakra-ui/react'
import { FaChartLine, FaHome, FaBuilding, FaDollarSign } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import NextLink from 'next/link'

export default function MarketTrends() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const trends = [
    {
      title: 'Home Values on the Rise',
      description: 'Local market shows steady 5.2% growth in home values, making it an ideal time for home improvements and renovations.',
      icon: FaHome,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Investment Opportunities',
      description: 'Strategic home improvements can yield significant returns in the current market. Focus on kitchen and bathroom upgrades for maximum ROI.',
      icon: FaDollarSign,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Commercial Real Estate',
      description: 'Commercial property values are following residential trends, creating opportunities for business owners to enhance their spaces.',
      icon: FaBuilding,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&h=400&q=80'
    }
  ]

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="gray.50">
        <Container maxW="container.xl" py={8}>
          {/* Hero Section */}
          <Box textAlign="center" mb={12}>
            <Flex align="center" justify="center" mb={4}>
              <Icon as={FaChartLine} boxSize={8} color="blue.500" mr={3} />
              <Heading
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="900"
                letterSpacing="-0.02em"
              >
                Market Trends
              </Heading>
            </Flex>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Stay informed about the latest developments in the real estate and home improvement markets.
            </Text>
          </Box>

          {/* Trends Grid */}
          <VStack spacing={8} mb={12}>
            {trends.map((trend, index) => (
              <Box
                key={index}
                bg={bgColor}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="md"
                w="full"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'xl',
                  transition: 'all 0.2s'
                }}
                transition="all 0.2s"
              >
                <Flex direction={{ base: 'column', md: 'row' }}>
                  <Box w={{ base: '100%', md: '40%' }} h="300px" position="relative">
                    <Image
                      src={trend.image}
                      alt={trend.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>
                  <Box p={8} w={{ base: '100%', md: '60%' }}>
                    <Flex align="center" mb={4}>
                      <Icon as={trend.icon} boxSize={6} color="blue.500" mr={3} />
                      <Heading size="lg">{trend.title}</Heading>
                    </Flex>
                    <Text color="gray.600" fontSize="lg" mb={6}>
                      {trend.description}
                    </Text>
                    <Button
                      as={NextLink}
                      href="/search"
                      colorScheme="blue"
                      size="md"
                    >
                      Find Contractors
                    </Button>
                  </Box>
                </Flex>
              </Box>
            ))}
          </VStack>

          {/* CTA Section */}
          <Box
            bg="blue.50"
            borderRadius="xl"
            p={8}
            textAlign="center"
            mb={12}
          >
            <Heading size="lg" mb={4}>
              Ready to Invest in Your Property?
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Get free quotes from top-rated contractors in your area.
            </Text>
            <Button
              as={NextLink}
              href="/search"
              colorScheme="blue"
              size="lg"
              px={8}
            >
              Find Contractors
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
} 