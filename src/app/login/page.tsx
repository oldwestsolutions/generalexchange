'use client'

import React from 'react'
import { Box, Container, VStack, Heading, Text, Button } from '@chakra-ui/react'
import { FaWallet } from 'react-icons/fa'

export default function Login() {
  return (
    <Box
      minH="100vh"
      bg="tan.50"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontFamily="'Helvetica Neue', sans-serif"
      letterSpacing="0.5px"
    >
      <Container maxW="container.sm">
        <VStack
          spacing={8}
          p={12}
          border="1px"
          borderColor="tan.300"
          bg="tan.50"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        >
          <Box color="tan.700" mb={4}>
            <FaWallet size="3rem" />
          </Box>
          
          <Heading
            size="xl"
            color="tan.800"
            fontWeight="300"
            letterSpacing="2px"
            textTransform="uppercase"
            transition="opacity 3s ease-in-out"
            _hover={{ opacity: 0.8 }}
          >
            Connect Your Wallet
          </Heading>

          <Text
            color="tan.700"
            fontWeight="300"
            letterSpacing="0.5px"
            textAlign="center"
            maxW="400px"
          >
            Connect your wallet to access the General Exchange platform and manage your pension assets.
          </Text>

          <Button
            size="lg"
            variant="outline"
            borderColor="tan.700"
            color="tan.800"
            fontWeight="300"
            letterSpacing="1px"
            borderRadius="0"
            w="full"
            _hover={{
              bg: "tan.700",
              color: "tan.50",
              transform: 'translateY(-2px)',
            }}
            _active={{
              transform: 'translateY(0)',
            }}
            transition="all 0.2s ease"
          >
            Connect Wallet
          </Button>

          <Text
            color="tan.600"
            fontSize="sm"
            fontWeight="300"
            letterSpacing="0.5px"
            textAlign="center"
            mt={4}
          >
            By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
} 