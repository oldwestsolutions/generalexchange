'use client'

import React from 'react'
import { Box, Container, Flex, HStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Footer() {
  return (
    <Box bg="gray.50" py={6}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <HStack spacing={8}>
            <Link as={NextLink} href="/company" color="gray.600" _hover={{ color: 'blue.500' }}>
              Company
            </Link>
            <Link as={NextLink} href="/services" color="gray.600" _hover={{ color: 'blue.500' }}>
              Services
            </Link>
          </HStack>
          <Link as={NextLink} href="/support" color="gray.600" _hover={{ color: 'blue.500' }}>
            Support
          </Link>
        </Flex>
      </Container>
    </Box>
  )
} 