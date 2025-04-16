'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, Image, Flex, Icon, useColorModeValue, Button } from '@chakra-ui/react'
import { FaTools, FaPaintRoller, FaHammer, FaHome } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import NextLink from 'next/link'

export default function RenovationTips() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const tips = [
    {
      title: 'ROI Guide 2024',
      description: 'Discover which home improvements offer the best return on investment this year. Kitchen and bathroom remodels continue to lead the way.',
      icon: FaTools,
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Value-Increasing Projects',
      description: 'Learn about the top projects that can significantly increase your home\'s value. From curb appeal to smart home upgrades.',
      icon: FaHammer,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Expert Homeowner Advice',
      description: 'Professional tips for planning and executing successful home renovations. Budgeting, timeline management, and contractor selection.',
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
              <Icon as={FaTools} boxSize={8} color="blue.500" mr={3} />
              <Heading
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="900"
                letterSpacing="-0.02em"
              >
                Renovation Tips
              </Heading>
            </Flex>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Expert advice and insights for successful home renovations and improvements.
            </Text>
          </Box>

          {/* Tips Grid */}
          <VStack spacing={8} mb={12}>
            {tips.map((tip, index) => (
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
                      src={tip.image}
                      alt={tip.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>
                  <Box p={8} w={{ base: '100%', md: '60%' }}>
                    <Flex align="center" mb={4}>
                      <Icon as={tip.icon} boxSize={6} color="blue.500" mr={3} />
                      <Heading size="lg">{tip.title}</Heading>
                    </Flex>
                    <Text color="gray.600" fontSize="lg" mb={6}>
                      {tip.description}
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
              Ready to Start Your Renovation?
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Connect with experienced contractors who can bring your vision to life.
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