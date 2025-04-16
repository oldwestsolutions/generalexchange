'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Button, Image, Icon, Flex, useColorModeValue } from '@chakra-ui/react'
import { FaPaintRoller, FaBrush, FaSprayCan, FaHome, FaBuilding } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import NextLink from 'next/link'

export default function Painting() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const services = [
    {
      title: 'Interior Painting',
      description: 'Professional interior painting for a fresh new look',
      icon: FaPaintRoller,
      image: 'https://images.unsplash.com/photo-1578301978678-97a1073e0b1a?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Exterior Painting',
      description: 'Enhance your home\'s curb appeal with expert exterior painting',
      icon: FaBrush,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Commercial Painting',
      description: 'Professional painting services for businesses and offices',
      icon: FaBuilding,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      title: 'Specialty Finishes',
      description: 'Custom finishes and decorative painting techniques',
      icon: FaSprayCan,
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
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="900"
              letterSpacing="-0.02em"
              mb={4}
            >
              Painting Services
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Transform your space with professional painting services. From interior to exterior, we deliver quality results with attention to detail.
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
                    Find Painters
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
              Ready for a Fresh Look?
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Get free quotes from professional painters in your area.
            </Text>
            <Button
              as={NextLink}
              href="/search"
              colorScheme="blue"
              size="lg"
              px={8}
            >
              Find a Painter
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
} 