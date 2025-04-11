'use client'

import React from 'react'
import { Box, Container, VStack, Heading, Text, Button, Input, FormControl, FormLabel, keyframes } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { FaWallet } from 'react-icons/fa'

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

const fade = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`

export default function Login() {
  const { active, account, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

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
            animation={`${fade} 3s ease-in-out infinite`}
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

          {!active ? (
            <Button
              onClick={connect}
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
          ) : (
            <VStack spacing={4} w="full">
              <Text
                color="tan.800"
                bg="transparent"
                px={4}
                py={2}
                border="1px"
                borderColor="tan.700"
                fontWeight="300"
                letterSpacing="1px"
                fontSize="sm"
                w="full"
                textAlign="center"
              >
                Connected with: {account?.slice(0, 6)}...{account?.slice(-4)}
              </Text>
              <Button
                onClick={disconnect}
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
                Disconnect
              </Button>
            </VStack>
          )}

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