'use client'

import React from 'react'
import { Box, Flex, Text, Button, keyframes } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

const fade = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`

export default function Navbar() {
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
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg="rgba(255, 255, 255, 0.9)"
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor="rgba(0, 0, 0, 0.1)"
      fontFamily="'Helvetica Neue', sans-serif"
      letterSpacing="0.5px"
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={6}
        py={4}
        justify="space-between"
        align="center"
      >
        <Text
          fontSize="xl"
          fontWeight="300"
          color="black"
          letterSpacing="2px"
          textTransform="uppercase"
          animation={`${fade} 3s ease-in-out infinite`}
        >
          General Exchange
        </Text>

        <Flex gap={4} align="center">
          {!active ? (
            <Button
              onClick={connect}
              size="md"
              variant="outline"
              borderColor="black"
              color="black"
              fontWeight="300"
              letterSpacing="1px"
              borderRadius="0"
              _hover={{
                bg: "black",
                color: "white",
                transform: 'translateY(-1px)',
              }}
              _active={{
                transform: 'translateY(0)',
              }}
              transition="all 0.2s ease"
            >
              Connect Wallet
            </Button>
          ) : (
            <Flex gap={4} align="center">
              <Text
                color="black"
                bg="transparent"
                px={4}
                py={2}
                border="1px"
                borderColor="black"
                fontWeight="300"
                letterSpacing="1px"
                fontSize="sm"
              >
                {account?.slice(0, 6)}...{account?.slice(-4)}
              </Text>
              <Button
                onClick={disconnect}
                size="md"
                variant="outline"
                borderColor="black"
                color="black"
                fontWeight="300"
                letterSpacing="1px"
                borderRadius="0"
                _hover={{
                  bg: "black",
                  color: "white",
                  transform: 'translateY(-1px)',
                }}
                _active={{
                  transform: 'translateY(0)',
                }}
                transition="all 0.2s ease"
              >
                Disconnect
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  )
} 