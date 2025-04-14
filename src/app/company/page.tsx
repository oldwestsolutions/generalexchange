'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'

export default function Company() {
  return (
    <>
      <Navbar />
      <Box
        minH="100vh"
        bg="white"
        pt={20}
        fontFamily="'Helvetica Neue', sans-serif"
      >
        <Container maxW="container.md" py={12}>
          <VStack spacing={8} align="stretch">
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="900"
              letterSpacing="-0.02em"
              color="black"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              lineHeight="1.2"
            >
              About General Exchange
            </Heading>
            
            <Text fontSize="lg" color="gray.700" lineHeight="tall">
              General Exchange is a modern platform connecting homeowners with trusted contractors and service providers. Our mission is to simplify the process of finding and managing home improvement projects while ensuring quality and reliability.
            </Text>

            <Text fontSize="lg" color="gray.700" lineHeight="tall">
              Founded with a vision to transform the home services industry, we leverage technology to create seamless experiences for both homeowners and contractors. Our platform provides a secure environment for transactions, ensuring peace of mind for all parties involved.
            </Text>

            <Text fontSize="lg" color="gray.700" lineHeight="tall">
              We believe in transparency, quality, and trust. Every contractor on our platform undergoes thorough verification, and we maintain high standards to ensure the best possible service for our users.
            </Text>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 