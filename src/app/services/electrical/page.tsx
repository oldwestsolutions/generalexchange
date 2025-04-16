'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Button, Image, Icon, Flex, useColorModeValue } from '@chakra-ui/react'
import { FaBolt, FaLightbulb, FaPlug, FaTools, FaHome } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import NextLink from 'next/link'

export default function Electrical() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const services = [
    {
      title: 'Electrical Installation',
      description: 'Professional installation of electrical systems and components',
      icon: FaBolt,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Lighting Solutions',
      description: 'Modern lighting design and installation for your home',
      icon: FaLightbulb,
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Outlet & Switch Installation',
      description: 'Safe and efficient electrical outlet and switch installation',
      icon: FaPlug,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Electrical Repairs',
      description: 'Expert troubleshooting and repair of electrical issues',
      icon: FaTools,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&h=400&q=80'
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
              Electrical Services
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Professional electrical services for your home. From installations to repairs, we ensure safety and efficiency in every project.
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
                    Find Electricians
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
              Need Electrical Work?
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Get free quotes from licensed electricians in your area.
            </Text>
            <Button
              as={NextLink}
              href="/search"
              colorScheme="blue"
              size="lg"
              px={8}
            >
              Find an Electrician
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
} 