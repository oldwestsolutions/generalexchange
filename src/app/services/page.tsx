'use client'

import React from 'react'
import { Box, Container, Heading, Text, SimpleGrid, VStack, Button, Icon, Flex } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

const services = [
  {
    icon: '🏠',
    name: 'Roofing',
    description: 'Professional roofing services including installation, repair, and maintenance for residential and commercial properties.',
    features: ['Roof Installation', 'Leak Repair', 'Shingle Replacement', 'Roof Inspection']
  },
  {
    icon: '🔨',
    name: 'Remodeling',
    description: 'Complete home remodeling services to transform your space with modern designs and quality craftsmanship.',
    features: ['Kitchen Remodel', 'Bathroom Renovation', 'Room Additions', 'Basement Finishing']
  },
  {
    icon: '🚰',
    name: 'Plumbing',
    description: 'Expert plumbing services for all your residential and commercial plumbing needs.',
    features: ['Pipe Repair', 'Fixture Installation', 'Water Heaters', 'Drain Cleaning']
  },
  {
    icon: '⚡',
    name: 'Electrical',
    description: 'Licensed electrical services for safe and efficient electrical system installation and maintenance.',
    features: ['Wiring Installation', 'Panel Upgrades', 'Lighting Installation', 'Safety Inspections']
  },
  {
    icon: '❄️',
    name: 'HVAC',
    description: 'Comprehensive heating, ventilation, and air conditioning services for optimal indoor comfort.',
    features: ['AC Installation', 'Heating Repair', 'System Maintenance', 'Air Quality Solutions']
  },
  {
    icon: '🎨',
    name: 'Painting',
    description: 'Professional painting services for interior and exterior surfaces with attention to detail.',
    features: ['Interior Painting', 'Exterior Painting', 'Cabinet Refinishing', 'Color Consultation']
  },
  {
    icon: '🪑',
    name: 'Flooring',
    description: 'Expert flooring installation and repair services for all types of flooring materials.',
    features: ['Hardwood Installation', 'Tile Work', 'Carpet Installation', 'Floor Refinishing']
  },
  {
    icon: '🌳',
    name: 'Landscaping',
    description: 'Professional landscaping services to enhance your outdoor living space and curb appeal.',
    features: ['Lawn Care', 'Garden Design', 'Hardscape Installation', 'Tree Service']
  }
]

export default function Services() {
  return (
    <>
      <Navbar />
      <Box
        minH="100vh"
        bg="white"
        pt={20}
        fontFamily="'Helvetica Neue', sans-serif"
      >
        <Container maxW="container.xl" py={12}>
          <VStack spacing={8} align="stretch">
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="900"
              letterSpacing="-0.02em"
              textAlign="center"
              color="black"
              mb={12}
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              lineHeight="1.2"
            >
              Our Services
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {services.map((service, index) => (
                <Box
                  key={index}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="lg"
                  overflow="hidden"
                  p={8}
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: 'xl'
                  }}
                >
                  <VStack align="start" spacing={6}>
                    <Text fontSize="5xl" lineHeight="1">
                      {service.icon}
                    </Text>
                    <Heading
                      size="lg"
                      color="gray.800"
                      fontWeight="bold"
                    >
                      {service.name}
                    </Heading>
                    <Text
                      color="gray.600"
                      fontSize="md"
                      lineHeight="tall"
                    >
                      {service.description}
                    </Text>
                    <Box w="full">
                      <Text
                        color="gray.700"
                        fontSize="sm"
                        fontWeight="semibold"
                        mb={3}
                      >
                        Services Include:
                      </Text>
                      {service.features.map((feature, idx) => (
                        <Flex
                          key={idx}
                          align="center"
                          color="gray.600"
                          fontSize="sm"
                          mb={2}
                        >
                          <Box
                            w={1}
                            h={1}
                            bg="blue.500"
                            borderRadius="full"
                            mr={2}
                          />
                          {feature}
                        </Flex>
                      ))}
                    </Box>
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                      rightIcon={<Icon as={FaArrowRight} />}
                      alignSelf="start"
                      mt={2}
                    >
                      Find Contractors
                    </Button>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 