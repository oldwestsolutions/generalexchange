'use client'

import { metadata } from './metadata'
export { metadata }

import React from 'react'
import { Box, Container, Heading, Text, VStack, Button, Input, InputGroup, InputRightElement, IconButton, Flex } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

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
        <Container maxW="container.md" h="100%" display="flex" alignItems="center" justifyContent="center">
          <VStack spacing={8} align="center">
            <Heading
              fontSize={{ base: "5xl", md: "7xl" }}
              fontWeight="900"
              letterSpacing="-0.02em"
              textTransform="lowercase"
              color="black"
              mb={12}
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              lineHeight="1"
              sx={{
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale"
              }}
            >
              general exchange
            </Heading>
            <form onSubmit={handleSearch} style={{ width: '100%', maxWidth: '600px' }}>
              <InputGroup size="lg">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for contractors, services, or locations..."
                  borderRadius="full"
                  borderColor="gray.200"
                  _hover={{ borderColor: 'gray.300' }}
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                  fontSize="lg"
                  py={6}
                  px={6}
                  color="gray.800"
                  _placeholder={{ color: 'gray.400' }}
                />
                <InputRightElement h="full" pr={4}>
                  <IconButton
                    type="submit"
                    aria-label="Search"
                    icon={<FaSearch />}
                    colorScheme="blue"
                    borderRadius="full"
                    size="lg"
                  />
                </InputRightElement>
              </InputGroup>
            </form>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
