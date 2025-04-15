'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, Button, Input, InputGroup, InputRightElement, IconButton, Flex, Link, HStack, Badge, SimpleGrid, InputLeftElement } from '@chakra-ui/react'
import { FaSearch, FaTools, FaHammer, FaPaintRoller, FaWrench, FaHome, FaBuilding } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import NextLink from 'next/link'
import { Icon } from '@chakra-ui/react'

export default function Home() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <>
      <Navbar />
      <Box
        h="100vh"
        bg="white"
        position="relative"
        overflow="hidden"
        fontFamily="'Helvetica Neue', sans-serif"
      >
        {/* Main Search Section */}
        <Container 
          maxW="container.md" 
          h="100%" 
          display="flex" 
          alignItems="flex-start" 
          justifyContent="center"
          pt={{ base: "15vh", md: "15vh" }}
          px={{ base: 0, md: 6 }}
        >
          <VStack spacing={0} align="center" w="full">
            <Box 
              position="relative" 
              width="100vw" 
              height={{ base: "180px", md: "200px" }} 
              mb={0}
              mx={{ base: "-16px", md: "0" }}
            >
              <Image
                src="/carriage.jpeg"
                alt="Vintage Carriage"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
            <Heading
              fontSize={{ base: "4xl", md: "7xl" }}
              fontWeight="900"
              letterSpacing="-0.02em"
              textTransform="lowercase"
              color="black"
              mb={{ base: 4, md: 8 }}
              mt={{ base: 0, md: 0 }}
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              lineHeight="0.7"
              sx={{
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale"
              }}
            >
              general exchange
            </Heading>
            <form onSubmit={handleSearch} style={{ width: '100%', maxWidth: '600px' }}>
              <Box px={{ base: 4, md: 0 }}>
                <HStack spacing={{ base: 2, md: 3 }}>
                  <InputGroup size={{ base: "md", md: "lg" }}>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FaSearch} color="gray.400" />
                    </InputLeftElement>
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search services & contractors..."
                      borderRadius="full"
                      borderColor="gray.200"
                      _hover={{ borderColor: 'gray.300' }}
                      _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                      fontSize={{ base: "xs", md: "lg" }}
                      py={{ base: 4, md: 6 }}
                      px={{ base: 4, md: 6 }}
                      color="gray.800"
                      _placeholder={{ 
                        color: 'gray.400', 
                        fontSize: { base: "xs", md: "lg" },
                        textOverflow: "ellipsis"
                      }}
                    />
                    <InputRightElement h="full" pr={{ base: 1, md: 4 }}>
                      <Button
                        type="submit"
                        aria-label="Search"
                        bg="blue.500"
                        color="white"
                        _hover={{ bg: 'blue.600' }}
                        borderRadius="full"
                        size={{ base: "sm", md: "lg" }}
                        p={{ base: 2, md: 3 }}
                        minW={{ base: "32px", md: "auto" }}
                      >
                        <Box as={FaSearch} fontSize={{ base: "14px", md: "24px" }} />
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Link 
                    as={NextLink} 
                    href="/shop" 
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Button
                      bg="black"
                      color="white"
                      size={{ base: "sm", md: "lg" }}
                      p={{ base: 2, md: 3 }}
                      borderRadius="full"
                      fontWeight="500"
                      _hover={{
                        bg: 'gray.800',
                      }}
                      _active={{
                        bg: 'gray.700',
                      }}
                      transition="all 0.2s"
                      height="auto"
                      minW={{ base: "32px", md: "auto" }}
                    >
                      Shop
                    </Button>
                  </Link>
                </HStack>
              </Box>
            </form>

            {/* 90s Style Directory Links */}
            <SimpleGrid
              columns={{ base: 2, md: 4 }}
              spacing={4}
              mt={8}
              w="full"
              maxW="800px"
              px={{ base: 4, md: 0 }}
            >
              <Button
                leftIcon={<Icon as={FaHome} />}
                colorScheme="blue"
                variant="outline"
                borderColor="gray.200"
                color="gray.700"
                _hover={{ bg: "blue.50", borderColor: "blue.300" }}
                size="md"
                fontWeight="500"
              >
                Home Services
              </Button>
              <Button
                leftIcon={<Icon as={FaBuilding} />}
                colorScheme="blue"
                variant="outline"
                borderColor="gray.200"
                color="gray.700"
                _hover={{ bg: "blue.50", borderColor: "blue.300" }}
                size="md"
                fontWeight="500"
              >
                Commercial
              </Button>
              <Button
                leftIcon={<Icon as={FaTools} />}
                colorScheme="blue"
                variant="outline"
                borderColor="gray.200"
                color="gray.700"
                _hover={{ bg: "blue.50", borderColor: "blue.300" }}
                size="md"
                fontWeight="500"
              >
                Repairs
              </Button>
              <Button
                leftIcon={<Icon as={FaPaintRoller} />}
                colorScheme="blue"
                variant="outline"
                borderColor="gray.200"
                color="gray.700"
                _hover={{ bg: "blue.50", borderColor: "blue.300" }}
                size="md"
                fontWeight="500"
              >
                Renovations
              </Button>
            </SimpleGrid>

            {/* Browse Categories */}
            <Text
              fontSize="sm"
              color="gray.500"
              mt={4}
              textAlign="center"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Box as="span" fontWeight="medium">Browse by:</Box>
              <Box as="span" color="blue.500">Location</Box>
              <Box as="span" color="gray.300">|</Box>
              <Box as="span" color="blue.500">Specialty</Box>
              <Box as="span" color="gray.300">|</Box>
              <Box as="span" color="blue.500">Rating</Box>
              <Box as="span" color="gray.300">|</Box>
              <Box as="span" color="blue.500">Price Range</Box>
            </Text>
          </VStack>
        </Container>

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
      </Box>
    </>
  )
}
