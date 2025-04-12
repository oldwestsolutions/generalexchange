'use client'

import React from 'react'
import { Box, Container, SimpleGrid, VStack, Heading, Text, Input, Button, Link } from '@chakra-ui/react'
import { FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box bg="gray.50" py={12}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* Contact */}
          <VStack align="start" spacing={4}>
            <Heading size="sm">Contact</Heading>
            <Text>Email: info@generalexchange.com</Text>
            <Text>Phone: (555) 123-4567</Text>
            <Text>Address: 123 Main St, San Francisco, CA</Text>
          </VStack>

          {/* Company */}
          <VStack align="start" spacing={4}>
            <Heading size="sm">Company</Heading>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/blog">Blog</Link>
          </VStack>

          {/* Newsletter */}
          <VStack align="start" spacing={4}>
            <Heading size="sm">Newsletter</Heading>
            <Text>Subscribe to our newsletter for updates</Text>
            <Box as="form" w="full">
              <Input
                placeholder="Enter your email"
                mb={2}
                bg="white"
              />
              <Button
                leftIcon={<FaEnvelope />}
                colorScheme="blue"
                w="full"
              >
                Subscribe
              </Button>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
} 