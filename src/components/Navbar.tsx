'use client'

import { Box, Button, Container, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode, useColorModeValue, useDisclosure, useBreakpointValue } from '@chakra-ui/react'
import { FaMoon, FaSun, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import NextLink from 'next/link'
import Link from 'next/link'

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      setLastScrollY(scrollY)
    }

    window.addEventListener('scroll', updateScrollDirection)
    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [lastScrollY, scrollDirection])

  return scrollDirection
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollDirection = useScrollDirection()
  const isMobile = useBreakpointValue({ base: true, md: false })
  const router = useRouter()
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('black', 'white')

  const handleConnect = async () => {
    try {
      await connect()
    } catch (error) {
      console.error('Failed to connect:', error)
    }
  }

  const handleDisconnect = () => {
    disconnect()
  }

  const navbarTransform = isMobile 
    ? scrollDirection === 'down' 
      ? 'translateY(-100%)' 
      : 'translateY(0)'
    : 'translateY(0)'

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      transform={navbarTransform}
      transition="transform 0.3s ease-in-out"
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Link href="/" passHref>
            <Heading
              as="h1"
              size="lg"
              color={textColor}
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
            >
              general exchange
            </Heading>
          </Link>

          {/* Desktop Navigation */}
          <Flex display={{ base: 'none', md: 'flex' }} align="center" gap={6}>
            <Link href="/shop" passHref>
              <Button variant="ghost" color={textColor} _hover={{ bg: 'transparent', opacity: 0.8 }}>
                Shop
              </Button>
            </Link>
            <Link href="/company" passHref>
              <Button variant="ghost" color={textColor} _hover={{ bg: 'transparent', opacity: 0.8 }}>
                Company
              </Button>
            </Link>
            <Link href="/support" passHref>
              <Button variant="ghost" color={textColor} _hover={{ bg: 'transparent', opacity: 0.8 }}>
                Support
              </Button>
            </Link>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
              color={textColor}
              _hover={{ bg: 'transparent', opacity: 0.8 }}
            />
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                color={textColor}
                _hover={{ bg: 'transparent', opacity: 0.8 }}
                leftIcon={<Box as={FaUserCircle} fontSize={{ base: "24px", md: "28px" }} />}
                size={{ base: "md", md: "lg" }}
              >
                {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect'}
              </MenuButton>
              <MenuList>
                {isConnected ? (
                  <MenuItem onClick={handleDisconnect}>Disconnect</MenuItem>
                ) : (
                  <MenuItem onClick={handleConnect}>Connect Wallet</MenuItem>
                )}
              </MenuList>
            </Menu>
          </Flex>

          {/* Mobile Navigation */}
          <Flex display={{ base: 'flex', md: 'none' }} align="center" gap={2}>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
              color={textColor}
              _hover={{ bg: 'transparent', opacity: 0.8 }}
            />
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                color={textColor}
                _hover={{ bg: 'transparent', opacity: 0.8 }}
                leftIcon={<Box as={FaUserCircle} fontSize={{ base: "24px", md: "28px" }} />}
                size={{ base: "md", md: "lg" }}
              >
                {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect'}
              </MenuButton>
              <MenuList>
                {isConnected ? (
                  <MenuItem onClick={handleDisconnect}>Disconnect</MenuItem>
                ) : (
                  <MenuItem onClick={handleConnect}>Connect Wallet</MenuItem>
                )}
              </MenuList>
            </Menu>
            <IconButton
              aria-label="Open menu"
              icon={isOpen ? <FaTimes /> : <FaBars />}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color={textColor}
              _hover={{ bg: 'transparent', opacity: 0.8 }}
            />
          </Flex>
        </Flex>

        {/* Mobile Menu */}
        {isOpen && (
          <Box
            display={{ base: 'block', md: 'none' }}
            position="absolute"
            top="100%"
            left={0}
            right={0}
            bg={bgColor}
            py={4}
            borderBottom="1px"
            borderColor={borderColor}
          >
            <Flex direction="column" align="center" gap={4}>
              <Link href="/shop" passHref>
                <Button variant="ghost" color={textColor} _hover={{ bg: 'transparent', opacity: 0.8 }}>
                  Shop
                </Button>
              </Link>
              <Link href="/company" passHref>
                <Button variant="ghost" color={textColor} _hover={{ bg: 'transparent', opacity: 0.8 }}>
                  Company
                </Button>
              </Link>
              <Link href="/support" passHref>
                <Button variant="ghost" color={textColor} _hover={{ bg: 'transparent', opacity: 0.8 }}>
                  Support
                </Button>
              </Link>
            </Flex>
          </Box>
        )}
      </Container>
    </Box>
  )
} 