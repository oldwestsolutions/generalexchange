'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Button, Image, Icon, Flex, useColorModeValue } from '@chakra-ui/react'
import { FaHome, FaBuilding, FaHammer, FaTools, FaPaintRoller, FaWrench } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import NextLink from 'next/link'

export default function Remodeling() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const services = [
    {
      title: 'Whole House Remodel',
      description: 'Complete home transformation with expert design and construction',
      icon: FaHome,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Room Additions',
      description: 'Expand your living space with seamless room additions',
      icon: FaBuilding,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Basement Finishing',
      description: 'Transform your basement into a beautiful living space',
      icon: FaHammer,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Exterior Remodeling',
      description: 'Enhance your home\'s curb appeal with exterior renovations',
      icon: FaTools,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&h=400&q=80'
    }
  ]

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="gray.50">
        <Container maxW="container.xl" py={8}>
          {/* Hero Section */}
          <Box textAlign="center" mb={12}>
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="900"
              letterSpacing="-0.02em"
              mb={4}
            >
              Remodeling Services
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Transform your home with our comprehensive remodeling services. From whole house remodels to room additions, we bring your vision to life.
            </Text>
          </Box>

          {/* Services Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8} mb={12}>
            {services.map((service, index) => (
              <Box
                key={index}
                bg={bgColor}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="md"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'xl',
                  transition: 'all 0.2s'
                }}
                transition="all 0.2s"
              >
                <Box position="relative" h="200px">
                  <Image
                    src={service.image}
                    alt={service.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>
                <Box p={6}>
                  <Flex align="center" mb={4}>
                    <Icon as={service.icon} boxSize={6} color="blue.500" mr={3} />
                    <Heading size="md">{service.title}</Heading>
                  </Flex>
                  <Text color="gray.600" mb={6}>
                    {service.description}
                  </Text>
                  <Button
                    as={NextLink}
                    href={`/search?type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    colorScheme="blue"
                    size="md"
                    w="full"
                  >
                    Find Contractors
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          {/* CTA Section */}
          <Box
            bg="blue.50"
            borderRadius="xl"
            p={8}
            textAlign="center"
            mb={12}
          >
            <Heading size="lg" mb={4}>
              Ready to Transform Your Home?
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Get free quotes from top-rated remodeling contractors in your area.
            </Text>
            <Button
              as={NextLink}
              href="/search"
              colorScheme="blue"
              size="lg"
              px={8}
            >
              Find a Contractor
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
} 