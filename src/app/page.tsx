'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, Button, Input, InputGroup, InputRightElement, IconButton, Flex, Link, HStack } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import NextLink from 'next/link'

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
          px={{ base: 4, md: 6 }}
        >
          <VStack spacing={0} align="center">
            <Box position="relative" width={{ base: "260px", md: "400px" }} height={{ base: "130px", md: "200px" }} mb={0}>
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
              mb={{ base: 6, md: 8 }}
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              lineHeight="0.7"
              mt={0}
              sx={{
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale"
              }}
            >
              general exchange
            </Heading>
            <form onSubmit={handleSearch} style={{ width: '100%', maxWidth: '600px' }}>
              <HStack spacing={3}>
                <InputGroup size={{ base: "md", md: "lg" }}>
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for contractors, services, or locations..."
                    borderRadius="full"
                    borderColor="gray.200"
                    _hover={{ borderColor: 'gray.300' }}
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                    fontSize={{ base: "md", md: "lg" }}
                    py={{ base: 5, md: 6 }}
                    px={{ base: 4, md: 6 }}
                    color="gray.800"
                    _placeholder={{ color: 'gray.400' }}
                  />
                  <InputRightElement h="full" pr={{ base: 2, md: 4 }}>
                    <Button
                      type="submit"
                      aria-label="Search"
                      bg="blue.500"
                      color="white"
                      _hover={{ bg: 'blue.600' }}
                      borderRadius="full"
                      size="lg"
                      p={3}
                    >
                      <Box as={FaSearch} fontSize="24px" />
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
                    size="lg"
                    p={3}
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
                  >
                    Shop
                  </Button>
                </Link>
              </HStack>
            </form>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
