'use client'

import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Flex, Image, Button, useColorModeValue, Grid, GridItem, AspectRatio, Divider, Stack, Badge, InputGroup, InputLeftElement, Input, InputRightElement } from '@chakra-ui/react'
import { FaShieldAlt, FaHandshake, FaTools, FaHome, FaUserTie, FaCheckCircle, FaLock, FaHardHat, FaBuilding, FaCertificate, FaMedal, FaHammer, FaPaintRoller, FaWrench, FaSearch } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

const heritageStats = [
  {
    number: "10K+",
    label: "Projects Completed",
    icon: FaHardHat
  },
  {
    number: "95%",
    label: "Customer Satisfaction",
    icon: FaMedal
  },
  {
    number: "500+",
    label: "Verified Contractors",
    icon: FaCertificate
  },
  {
    number: "$50M+",
    label: "In Escrow Protection",
    icon: FaShieldAlt
  }
]

const features = [
  {
    icon: FaShieldAlt,
    title: "Secure Escrow Service",
    description: "Your payments are held securely until the work is completed to your satisfaction",
    color: "blue.500"
  },
  {
    icon: FaHandshake,
    title: "Verified Contractors",
    description: "All contractors are vetted, licensed, and reviewed by our community",
    color: "green.500"
  },
  {
    icon: FaTools,
    title: "Quality Work Guaranteed",
    description: "We ensure high-quality work through our satisfaction guarantee",
    color: "orange.500"
  },
  {
    icon: FaLock,
    title: "Payment Protection",
    description: "Your money is safe with our escrow system until the job is done right",
    color: "purple.500"
  }
]

const howItWorks = [
  {
    step: "1",
    title: "Post Your Project",
    description: "Describe your home improvement or repair needs",
    icon: FaHome
  },
  {
    step: "2",
    title: "Get Matched",
    description: "Receive quotes from qualified local contractors",
    icon: FaUserTie
  },
  {
    step: "3",
    title: "Choose Your Contractor",
    description: "Review profiles, ratings, and past work",
    icon: FaCheckCircle
  },
  {
    step: "4",
    title: "Secure Payment",
    description: "Funds are held in escrow until work is completed",
    icon: FaLock
  },
  {
    step: "5",
    title: "Work Begins",
    description: "Contractor starts work with your approval",
    icon: FaTools
  },
  {
    step: "6",
    title: "Release Payment",
    description: "Pay only when you're satisfied with the work",
    icon: FaShieldAlt
  }
]

export default function Company() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const accentColor = useColorModeValue('blue.900', 'blue.200')

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="gray.50">
        {/* Hero Section with Background Image */}
        <Box
          position="relative"
          h={{ base: "70vh", md: "80vh" }}
          minH={{ base: "600px", md: "700px" }}
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="2xl"
        >
          {/* Background Image with Blur */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundImage="url('/construction-bg.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            filter="blur(4px)"
            transform="scale(1.1)"
          />
          
          {/* Gradient Overlay */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient="linear(to-b, rgba(0,0,0,0.1), rgba(0,0,0,0.5))"
          />

          {/* Decorative Elements */}
          <Box
            position="absolute"
            top="10%"
            left="5%"
            transform="rotate(-15deg)"
          >
            <Icon as={FaTools} color="white" opacity={0.2} boxSize={12} />
          </Box>
          <Box
            position="absolute"
            top="20%"
            right="5%"
            transform="rotate(15deg)"
          >
            <Icon as={FaHammer} color="white" opacity={0.2} boxSize={12} />
          </Box>
          <Box
            position="absolute"
            bottom="10%"
            left="10%"
            transform="rotate(15deg)"
          >
            <Icon as={FaPaintRoller} color="white" opacity={0.2} boxSize={12} />
          </Box>
          <Box
            position="absolute"
            bottom="20%"
            right="10%"
            transform="rotate(-15deg)"
          >
            <Icon as={FaWrench} color="white" opacity={0.2} boxSize={12} />
          </Box>

          {/* Content */}
          <Box
            position="relative"
            h="full"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            px={8}
            py={0}
          >
            {/* Directory-style Search Box */}
            <Box
              w="full"
              maxW="600px"
              mb={8}
              position="relative"
            >
              <InputGroup size="lg">
                <InputLeftElement pointerEvents="none">
                  <Icon as={FaSearch} color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Search for contractors in your area..."
                  bg="white"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="blue.200"
                  _focus={{
                    borderColor: "blue.400",
                    boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.2)"
                  }}
                  _hover={{
                    borderColor: "blue.300"
                  }}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    colorScheme="blue"
                    borderRadius="full"
                  >
                    Find
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Text
                fontSize="sm"
                color="white"
                mt={2}
                textAlign="center"
                opacity={0.8}
              >
                Browse by: Location | Specialty | Rating | Price Range
              </Text>
            </Box>

            <Badge
              colorScheme="blue"
              fontSize={{ base: "sm", md: "md" }}
              px={4}
              py={1}
              borderRadius="full"
              mb={0}
              letterSpacing="wider"
              fontWeight="bold"
              textTransform="uppercase"
              bg="rgba(255,255,255,0.1)"
              backdropFilter="blur(8px)"
              border="1px solid rgba(255,255,255,0.2)"
            >
              TRUSTED BY THOUSANDS OF HOMEOWNERS
            </Badge>

            <Heading
              as="h1"
              size={{ base: "3xl", md: "4xl" }}
              color="white"
              mb={0}
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              maxW="800px"
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              mt={2}
            >
              Building Trust in Every Project
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="white"
              maxW="800px"
              mb={0}
              textShadow="1px 1px 2px rgba(0,0,0,0.3)"
              mt={4}
              lineHeight="tall"
              letterSpacing="wide"
              fontWeight="medium"
              opacity={0.95}
            >
              Since 2010, we've been the trusted bridge between homeowners and skilled contractors. Our secure escrow platform ensures your peace of mind, every step of the way. We understand that home improvement projects are significant investments, which is why we've built a system that prioritizes transparency, security, and quality workmanship. From initial consultation to final payment, we're here to make your renovation journey smooth and worry-free.
            </Text>

            {/* Quick Links */}
            <SimpleGrid
              columns={{ base: 2, md: 4 }}
              spacing={4}
              mt={8}
              w="full"
              maxW="800px"
            >
              <Button
                leftIcon={<Icon as={FaHome} />}
                colorScheme="blue"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: "white", color: "blue.500" }}
              >
                Home Services
              </Button>
              <Button
                leftIcon={<Icon as={FaBuilding} />}
                colorScheme="blue"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: "white", color: "blue.500" }}
              >
                Commercial
              </Button>
              <Button
                leftIcon={<Icon as={FaTools} />}
                colorScheme="blue"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: "white", color: "blue.500" }}
              >
                Repairs
              </Button>
              <Button
                leftIcon={<Icon as={FaPaintRoller} />}
                colorScheme="blue"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: "white", color: "blue.500" }}
              >
                Renovations
              </Button>
            </SimpleGrid>
          </Box>
        </Box>

        <Container maxW="container.xl" py={16}>
          {/* Features Section */}
          <Box bg={bgColor} p={8} borderRadius="lg" boxShadow="lg" border="1px" borderColor={borderColor} mb={16}>
            <Heading size="lg" mb={8} textAlign="center" color={accentColor}>Why Choose Us</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {features.map((feature, index) => (
                <VStack key={index} spacing={4} align="start" p={6} bg="gray.50" borderRadius="md">
                  <Icon as={feature.icon} boxSize={8} color={feature.color} />
                  <Text fontWeight="bold" fontSize="lg">{feature.title}</Text>
                  <Text color="gray.600">{feature.description}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>

          {/* How It Works Section */}
          <Box mb={16}>
            <Heading size="lg" mb={8} textAlign="center" color={accentColor}>Our Process</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {howItWorks.map((step, index) => (
                <Box
                  key={index}
                  bg={bgColor}
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                  border="1px"
                  borderColor={borderColor}
                  position="relative"
                >
                  <Flex align="center" mb={4}>
                    <Box
                      bg={accentColor}
                      color="white"
                      borderRadius="full"
                      w={10}
                      h={10}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mr={4}
                      fontSize="lg"
                      fontWeight="bold"
                    >
                      {step.step}
                    </Box>
                    <Icon as={step.icon} boxSize={6} color={accentColor} mr={2} />
                    <Text fontWeight="bold" fontSize="lg">{step.title}</Text>
                  </Flex>
                  <Text color="gray.600">{step.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Final CTA Section */}
          <Box
            bg={accentColor}
            color="white"
            p={12}
            borderRadius="lg"
            textAlign="center"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgImage="url('/pattern.png')"
              opacity={0.1}
            />
            <VStack spacing={6} position="relative">
              <Heading size="lg">Ready to Transform Your Home?</Heading>
              <Text fontSize="xl" maxW="2xl" mx="auto">
                Join our community of satisfied homeowners and trusted contractors
              </Text>
              <Button
                size="lg"
                colorScheme="whiteAlpha"
                px={8}
                py={6}
                fontSize="lg"
                borderRadius="full"
                _hover={{ bg: "white", color: accentColor }}
              >
                Get Started Today
              </Button>
            </VStack>
          </Box>
        </Container>
      </Box>
    </>
  )
} 