'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, Button, SimpleGrid, keyframes } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { FaMusic, FaCode, FaLink, FaWallet, FaShieldAlt, FaHistory, FaChartLine, FaServer, FaNetworkWired } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

const fade = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`

export default function Home() {
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
    <>
      <Navbar />
      <Box
        minH="100vh"
        bg="tan.50"
        position="relative"
        overflow="hidden"
        fontFamily="'Helvetica Neue', sans-serif"
        letterSpacing="0.5px"
      >
        <Container maxW="container.xl" py={20}>
          <VStack spacing={20} align="stretch">
            {/* Hero Section */}
            <Box 
              textAlign="center" 
              py={20}
              position="relative"
            >
              <Heading
                as="h1"
                size="2xl"
                color="tan.800"
                fontWeight="300"
                letterSpacing="4px"
                textTransform="uppercase"
                animation={`${fade} 3s ease-in-out infinite`}
                mb={4}
              >
                General Exchange
              </Heading>
              <Text 
                fontSize="lg" 
                color="tan.700"
                fontWeight="300"
                letterSpacing="1px"
                maxW="600px"
                mx="auto"
              >
                Decentralized Pension Distribution Platform
              </Text>
            </Box>

            {/* Network Hosting Section */}
            <Box 
              id="network" 
              py={20}
            >
              <Heading 
                size="xl" 
                mb={10} 
                textAlign="center"
                color="tan.800"
                fontWeight="300"
                letterSpacing="2px"
                textTransform="uppercase"
              >
                Network Infrastructure
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Box 
                  p={8}
                  border="1px"
                  borderColor="tan.300"
                  position="relative"
                  _hover={{
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s ease"
                >
                  <Box color="tan.700" mb={4}><FaServer size="1.5rem" /></Box>
                  <Heading 
                    size="md" 
                    mb={4} 
                    color="tan.800"
                    fontWeight="300"
                    letterSpacing="1px"
                    textTransform="uppercase"
                  >
                    Decentralized Nodes
                  </Heading>
                  <Text 
                    color="tan.700"
                    fontWeight="300"
                    letterSpacing="0.5px"
                    lineHeight="1.6"
                  >
                    Our network is powered by a global network of nodes ensuring maximum uptime and reliability.
                  </Text>
                </Box>
                <Box 
                  p={8}
                  border="1px"
                  borderColor="tan.300"
                  position="relative"
                  _hover={{
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s ease"
                >
                  <Box color="tan.700" mb={4}><FaNetworkWired size="1.5rem" /></Box>
                  <Heading 
                    size="md" 
                    mb={4} 
                    color="tan.800"
                    fontWeight="300"
                    letterSpacing="1px"
                    textTransform="uppercase"
                  >
                    Global Distribution
                  </Heading>
                  <Text 
                    color="tan.700"
                    fontWeight="300"
                    letterSpacing="0.5px"
                    lineHeight="1.6"
                  >
                    Data centers strategically located worldwide for optimal performance and redundancy.
                  </Text>
                </Box>
                <Box 
                  p={8}
                  border="1px"
                  borderColor="tan.300"
                  position="relative"
                  _hover={{
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s ease"
                >
                  <Box color="tan.700" mb={4}><FaShieldAlt size="1.5rem" /></Box>
                  <Heading 
                    size="md" 
                    mb={4} 
                    color="tan.800"
                    fontWeight="300"
                    letterSpacing="1px"
                    textTransform="uppercase"
                  >
                    Security First
                  </Heading>
                  <Text 
                    color="tan.700"
                    fontWeight="300"
                    letterSpacing="0.5px"
                    lineHeight="1.6"
                  >
                    Enterprise-grade security measures protecting all network operations and user data.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Features Grid */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {[
                {
                  title: "Music Contributions",
                  description: "Earn pension rewards by contributing to the music ecosystem through content creation and distribution.",
                  icon: <FaMusic size="1.5rem" />
                },
                {
                  title: "Software Development",
                  description: "Receive pension benefits for contributing to open-source software and decentralized applications.",
                  icon: <FaCode size="1.5rem" />
                },
                {
                  title: "Network Staking",
                  description: "Participate in network validation and earn pension rewards through staking mechanisms.",
                  icon: <FaLink size="1.5rem" />
                }
              ].map((feature, index) => (
                <Box
                  key={index}
                  p={8}
                  border="1px"
                  borderColor="tan.300"
                  position="relative"
                  _hover={{
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s ease"
                >
                  <Box color="tan.700" mb={4}>{feature.icon}</Box>
                  <Heading 
                    size="md" 
                    mb={4} 
                    color="tan.800"
                    fontWeight="300"
                    letterSpacing="1px"
                    textTransform="uppercase"
                  >
                    {feature.title}
                  </Heading>
                  <Text 
                    color="tan.700"
                    fontWeight="300"
                    letterSpacing="0.5px"
                    lineHeight="1.6"
                  >
                    {feature.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            {/* Pension System Section */}
            <Box 
              id="pension" 
              py={20}
            >
              <Heading 
                size="xl" 
                mb={10} 
                textAlign="center"
                color="tan.800"
                fontWeight="300"
                letterSpacing="2px"
                textTransform="uppercase"
              >
                Pension System
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Box 
                  p={8}
                  border="1px"
                  borderColor="tan.300"
                  position="relative"
                  _hover={{
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s ease"
                >
                  <Box color="tan.700" mb={4}><FaWallet size="1.5rem" /></Box>
                  <Heading 
                    size="md" 
                    mb={4} 
                    color="tan.800"
                    fontWeight="300"
                    letterSpacing="1px"
                    textTransform="uppercase"
                  >
                    Smart Contract Based
                  </Heading>
                  <Text 
                    mb={4} 
                    color="tan.700"
                    fontWeight="300"
                    letterSpacing="0.5px"
                    lineHeight="1.6"
                  >
                    Our pension system is built on smart contracts, ensuring transparency and automatic distribution of benefits.
                  </Text>
                  <Box as="ul" mt={2} pl={4}>
                    {[
                      "Automated contribution tracking",
                      "Transparent distribution rules",
                      "Immutable pension records",
                      "Real-time benefit calculations"
                    ].map((item, index) => (
                      <Text 
                        key={index} 
                        as="li" 
                        color="tan.700"
                        fontWeight="300"
                        letterSpacing="0.5px"
                        lineHeight="1.6"
                        position="relative"
                        pl={4}
                        _before={{
                          content: '"•"',
                          position: 'absolute',
                          left: 0,
                          color: 'tan.800',
                        }}
                      >
                        {item}
                      </Text>
                    ))}
                  </Box>
                </Box>
                <Box 
                  p={8}
                  border="1px"
                  borderColor="tan.300"
                  position="relative"
                  _hover={{
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s ease"
                >
                  <Box color="tan.700" mb={4}><FaChartLine size="1.5rem" /></Box>
                  <Heading 
                    size="md" 
                    mb={4} 
                    color="tan.800"
                    fontWeight="300"
                    letterSpacing="1px"
                    textTransform="uppercase"
                  >
                    Contribution Rewards
                  </Heading>
                  <Text 
                    mb={4} 
                    color="tan.700"
                    fontWeight="300"
                    letterSpacing="0.5px"
                    lineHeight="1.6"
                  >
                    Earn pension benefits through various contribution methods:
                  </Text>
                  <Box as="ul" mt={2} pl={4}>
                    {[
                      "Content creation and distribution",
                      "Software development contributions",
                      "Network validation and staking",
                      "Community governance participation"
                    ].map((item, index) => (
                      <Text 
                        key={index} 
                        as="li" 
                        color="tan.700"
                        fontWeight="300"
                        letterSpacing="0.5px"
                        lineHeight="1.6"
                        position="relative"
                        pl={4}
                        _before={{
                          content: '"•"',
                          position: 'absolute',
                          left: 0,
                          color: 'tan.800',
                        }}
                      >
                        {item}
                      </Text>
                    ))}
                  </Box>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Custodial Wallet Section */}
            <Box 
              id="custodial" 
              py={20}
            >
              <Heading 
                size="xl" 
                mb={10} 
                textAlign="center"
                color="tan.800"
                fontWeight="300"
                letterSpacing="2px"
                textTransform="uppercase"
              >
                Custodial Wallet
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Box 
                  p={8}
                  border="1px"
                  borderColor="tan.300"
                  position="relative"
                  _hover={{
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s ease"
                >
                  <Box color="tan.700" mb={4}><FaShieldAlt size="1.5rem" /></Box>
                  <Heading 
                    size="md" 
                    mb={4} 
                    color="tan.800"
                    fontWeight="300"
                    letterSpacing="1px"
                    textTransform="uppercase"
                  >
                    Secure Asset Management
                  </Heading>
                  <Text 
                    mb={4} 
                    color="tan.700"
                    fontWeight="300"
                    letterSpacing="0.5px"
                    lineHeight="1.6"
                  >
                    Our custodial wallet provides secure management of your pension assets with advanced security features:
                  </Text>
                  <Box as="ul" mt={2} pl={4}>
                    {[
                      "Multi-signature security",
                      "Cold storage integration",
                      "Insurance coverage",
                      "Regular security audits"
                    ].map((item, index) => (
                      <Text 
                        key={index} 
                        as="li" 
                        color="tan.700"
                        fontWeight="300"
                        letterSpacing="0.5px"
                        lineHeight="1.6"
                        position="relative"
                        pl={4}
                        _before={{
                          content: '"•"',
                          position: 'absolute',
                          left: 0,
                          color: 'tan.800',
                        }}
                      >
                        {item}
                      </Text>
                    ))}
                  </Box>
                </Box>
                <Box 
                  p={8}
                  border="1px"
                  borderColor="tan.300"
                  position="relative"
                  _hover={{
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s ease"
                >
                  <Box color="tan.700" mb={4}><FaHistory size="1.5rem" /></Box>
                  <Heading 
                    size="md" 
                    mb={4} 
                    color="tan.800"
                    fontWeight="300"
                    letterSpacing="1px"
                    textTransform="uppercase"
                  >
                    Easy Access & Control
                  </Heading>
                  <Text 
                    mb={4} 
                    color="tan.700"
                    fontWeight="300"
                    letterSpacing="0.5px"
                    lineHeight="1.6"
                  >
                    Manage your pension assets with ease:
                  </Text>
                  <Box as="ul" mt={2} pl={4}>
                    {[
                      "Simple user interface",
                      "Real-time balance tracking",
                      "Flexible withdrawal options",
                      "Comprehensive transaction history"
                    ].map((item, index) => (
                      <Text 
                        key={index} 
                        as="li" 
                        color="tan.700"
                        fontWeight="300"
                        letterSpacing="0.5px"
                        lineHeight="1.6"
                        position="relative"
                        pl={4}
                        _before={{
                          content: '"•"',
                          position: 'absolute',
                          left: 0,
                          color: 'tan.800',
                        }}
                      >
                        {item}
                      </Text>
                    ))}
                  </Box>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Wallet Connection Section */}
            <Box 
              textAlign="center" 
              py={20}
            >
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
                <VStack spacing={4}>
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
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
