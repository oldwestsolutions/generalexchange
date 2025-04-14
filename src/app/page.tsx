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
          </VStack>
        </Container>
      </Box>
    </>
  )
}
