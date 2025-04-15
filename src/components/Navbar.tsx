'use client'

import { Box, Flex, HStack, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, Image, Icon, Text, SimpleGrid } from '@chakra-ui/react'
import { FaUserCircle, FaStore, FaShoppingCart, FaHeart, FaHistory, FaCog, FaSignOutAlt, FaQuestionCircle, FaSignInAlt } from 'react-icons/fa'
import NextLink from 'next/link'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const isAuthenticated = false // This should come from your auth context/state

  const handleAuthAction = () => {
    if (isAuthenticated) {
      // Handle sign out
      router.push('/')
    } else {
      // Handle sign up
      router.push('/signup')
    }
  }

  return (
    <Box
      as="nav"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      fontFamily="'Helvetica Neue', sans-serif"
    >
      <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 6 }} py={{ base: 1, md: 2 }}>
        <Flex justify="space-between" align="center">
          <HStack spacing={{ base: 2, md: 4 }}>
            <Box as={Link} href="/" display="flex" alignItems="center">
              <Image
                src="/carraigetrans.jpeg"
                alt="General Exchange"
                h={{ base: "64px", md: "80px" }}
                w="auto"
                maxW={{ base: "180px", md: "240px" }}
                objectFit="contain"
              />
              <Text
                ml={3}
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl" }}
                color="gray.800"
                letterSpacing="-0.5px"
                fontFamily="'Cinzel', serif"
                display={{ base: 'none', sm: 'block' }}
              >
                General Exchange
              </Text>
            </Box>
          </HStack>
          <HStack spacing={4}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Apps menu"
                icon={
                  <Box 
                    as={FaUserCircle} 
                    fontSize={{ base: "24px", md: "28px" }} 
                    color="gray.600"
                    _hover={{ color: "gray.800" }}
                  />
                }
                variant="ghost"
                size={{ base: "md", md: "lg" }}
                display={{ base: "flex", md: "flex" }}
                _hover={{ bg: "gray.100" }}
                _active={{ bg: "gray.200" }}
                bg="gray.50"
                borderRadius="full"
                p={2}
              />
              <MenuList 
                p={4} 
                minW="300px"
                boxShadow="xl"
                border="1px solid"
                borderColor="gray.200"
              >
                {/* Shopping Section */}
                <MenuGroup title="Shopping" fontSize="sm" color="gray.600">
                  <SimpleGrid columns={2} spacing={2} mb={4}>
                    <NextLink href="/shop" passHref>
                      <MenuItem icon={<Icon as={FaStore} color="blue.500" />}>
                        Marketplace
                      </MenuItem>
                    </NextLink>
                    <NextLink href="/cart" passHref>
                      <MenuItem icon={<Icon as={FaShoppingCart} color="green.500" />}>
                        My Cart
                      </MenuItem>
                    </NextLink>
                    <NextLink href="/wishlist" passHref>
                      <MenuItem icon={<Icon as={FaHeart} color="red.500" />}>
                        Wishlist
                      </MenuItem>
                    </NextLink>
                    <NextLink href="/orders" passHref>
                      <MenuItem icon={<Icon as={FaHistory} color="purple.500" />}>
                        Order History
                      </MenuItem>
                    </NextLink>
                  </SimpleGrid>
                </MenuGroup>

                <MenuDivider />

                {/* Account Section */}
                <MenuGroup title="Account" fontSize="sm" color="gray.600">
                  <SimpleGrid columns={2} spacing={2}>
                    <NextLink href="/settings" passHref>
                      <MenuItem icon={<Icon as={FaCog} color="gray.500" />}>
                        Settings
                      </MenuItem>
                    </NextLink>
                    <NextLink href="/support" passHref>
                      <MenuItem icon={<Icon as={FaQuestionCircle} color="blue.500" />}>
                        Help Center
                      </MenuItem>
                    </NextLink>
                    <MenuItem 
                      icon={<Icon as={isAuthenticated ? FaSignOutAlt : FaSignInAlt} color="red.500" />}
                      onClick={handleAuthAction}
                    >
                      {isAuthenticated ? 'Sign Out' : 'Sign Up'}
                    </MenuItem>
                  </SimpleGrid>
                </MenuGroup>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
} 