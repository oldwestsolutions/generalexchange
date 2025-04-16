'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Button, Image, Icon, Flex, useColorModeValue } from '@chakra-ui/react'
import { FaTools, FaHammer, FaPaintRoller, FaWrench, FaHome, FaBuilding } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import NextLink from 'next/link'

export default function HomeImprovement() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const services = [
    {
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen with modern designs and high-quality materials',
      icon: FaTools,
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Bathroom Renovation',
      description: 'Create a luxurious bathroom space with expert craftsmanship',
      icon: FaWrench,
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Interior Painting',
      description: 'Professional painting services for a fresh new look',
      icon: FaPaintRoller,
      image: 'https://images.unsplash.com/photo-1578301978678-97a1073e0b1a?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Flooring Installation',
      description: 'Quality flooring solutions for every room in your home',
      icon: FaHome,
      image: 'https://images.unsplash.com/photo-1583845112209-8d23d197733c?auto=format&fit=crop&w=600&h=400&q=80'
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
              Home Improvement Services
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Transform your home with our expert home improvement services. From kitchen remodeling to bathroom renovations, we've got you covered.
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
                    fill
                    style={{ objectFit: 'cover' }}
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
              Ready to Start Your Project?
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
              Find a Contractor
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
} 