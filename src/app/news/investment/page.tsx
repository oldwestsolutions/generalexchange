'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, Image, Flex, Icon, useColorModeValue, Button } from '@chakra-ui/react'
import { FaCoins, FaLightbulb, FaChartLine, FaHome } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import NextLink from 'next/link'

export default function InvestmentNews() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const investments = [
    {
      title: 'Smart Home ROI',
      description: 'Smart home technology investments are showing impressive returns. Learn which upgrades offer the best value and energy savings.',
      icon: FaLightbulb,
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Tech Upgrades',
      description: 'Discover how modern technology upgrades can increase your property value and attract potential buyers.',
      icon: FaChartLine,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Future-Proofing',
      description: 'Strategies for making your home more valuable and sustainable for the future. Energy efficiency and smart home integration.',
      icon: FaHome,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=400&q=80'
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
              <Icon as={FaCoins} boxSize={8} color="blue.500" mr={3} />
              <Heading
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="900"
                letterSpacing="-0.02em"
              >
                Investment News
              </Heading>
            </Flex>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Stay ahead with the latest insights on home improvement investments and smart property upgrades.
            </Text>
          </Box>

          {/* Investments Grid */}
          <VStack spacing={8} mb={12}>
            {investments.map((investment, index) => (
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
                      src={investment.image}
                      alt={investment.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>
                  <Box p={8} w={{ base: '100%', md: '60%' }}>
                    <Flex align="center" mb={4}>
                      <Icon as={investment.icon} boxSize={6} color="blue.500" mr={3} />
                      <Heading size="lg">{investment.title}</Heading>
                    </Flex>
                    <Text color="gray.600" fontSize="lg" mb={6}>
                      {investment.description}
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
              Ready to Invest in Your Home?
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Connect with experts who can help you make smart investment decisions for your property.
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