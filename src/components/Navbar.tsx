'use client'

import React, { useState, useMemo } from 'react'
import { Box, Flex, Text, HStack, Link, IconButton, Image, Menu, MenuButton, MenuList, MenuItem, Button, Input, InputGroup, InputLeftElement, VStack, Divider, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { FaBars, FaMapMarkerAlt, FaChevronDown, FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa'
import NextLink from 'next/link'

// Mock location data
const locations = [
  { id: 1, city: 'San Francisco', state: 'CA', zip: '94105' },
  { id: 2, city: 'Los Angeles', state: 'CA', zip: '90001' },
  { id: 3, city: 'New York', state: 'NY', zip: '10001' },
  { id: 4, city: 'Chicago', state: 'IL', zip: '60601' },
  { id: 5, city: 'Seattle', state: 'WA', zip: '98101' }
]

const NavLinks = ({ direction = 'row' as 'row' | 'column' }) => (
  <HStack spacing={8} align="center" direction={direction}>
    <Link as={NextLink} href="/contractors" color="gray.600" _hover={{ color: 'blue.500' }}>
      Find Contractors
    </Link>
    <Link as={NextLink} href="/projects" color="gray.600" _hover={{ color: 'blue.500' }}>
      Post a Project
    </Link>
    <Link as={NextLink} href="/shop" color="gray.600" _hover={{ color: 'blue.500' }}>
      Shop
    </Link>
    <Link as={NextLink} href="/services" color="gray.600" _hover={{ color: 'blue.500' }}>
      Services
    </Link>
  </HStack>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount] = useState(0) // This would be managed by your cart state

  const filteredLocations = useMemo(() => {
    if (!searchQuery) return locations
    const query = searchQuery.toLowerCase()
    return locations.filter(location => 
      location.city.toLowerCase().includes(query) ||
      location.state.toLowerCase().includes(query) ||
      location.zip.includes(query)
    )
  }, [searchQuery])

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      fontFamily="'Helvetica Neue', sans-serif"
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={6}
        py={4}
        justify="space-between"
        align="center"
      >
        <HStack spacing={8}>
          <Link as={NextLink} href="/" display="flex" alignItems="center">
            <Image
              src="/logo.svg"
              alt="General Exchange"
              h="32px"
              w="32px"
              objectFit="contain"
            />
          </Link>
          <Box display={{ base: 'none', md: 'block' }}>
            <NavLinks />
          </Box>
        </HStack>

        <HStack spacing={4}>
          <Link as={NextLink} href="/cart" position="relative">
            <IconButton
              aria-label="Shopping cart"
              icon={<FaShoppingCart />}
              variant="ghost"
              colorScheme="blue"
            />
            {cartCount > 0 && (
              <Box
                position="absolute"
                top="-2px"
                right="-2px"
                bg="red.500"
                color="white"
                borderRadius="full"
                w="18px"
                h="18px"
                fontSize="xs"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {cartCount}
              </Box>
            )}
          </Link>
          
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              leftIcon={<FaUserCircle />}
              colorScheme="blue"
            >
              Account
            </MenuButton>
            <MenuList>
              <MenuItem as={NextLink} href="/dashboard">Dashboard</MenuItem>
              <MenuItem as={NextLink} href="/profile">Profile</MenuItem>
              <MenuItem as={NextLink} href="/settings">Settings</MenuItem>
              <MenuItem>Sign Out</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<FaChevronDown />}
              leftIcon={<FaMapMarkerAlt />}
              colorScheme="blue"
              size="sm"
              fontWeight="normal"
            >
              {selectedLocation.city}, {selectedLocation.state}
            </MenuButton>
            <MenuList 
              bg="white"
              borderColor="gray.200"
              boxShadow="lg"
              zIndex={1001}
              minW="300px"
              p={2}
            >
              <VStack spacing={2} align="stretch">
                <InputGroup size="sm">
                  <InputLeftElement pointerEvents="none">
                    <FaSearch color="gray.300" />
                  </InputLeftElement>
                  <Input
                    placeholder="Search by city, state, or zip"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    borderRadius="md"
                    borderColor="gray.200"
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                  />
                </InputGroup>
                <Divider />
                <Box maxH="300px" overflowY="auto">
                  {filteredLocations.map((location) => (
                    <MenuItem
                      key={location.id}
                      onClick={() => {
                        setSelectedLocation(location)
                        setSearchQuery('')
                      }}
                      color="gray.700"
                      _hover={{ bg: 'blue.50' }}
                      _focus={{ bg: 'blue.50' }}
                      py={2}
                      px={4}
                    >
                      <Text>
                        {location.city}, {location.state} {location.zip}
                      </Text>
                    </MenuItem>
                  ))}
                  {filteredLocations.length === 0 && (
                    <Text px={4} py={2} color="gray.500" fontSize="sm">
                      No locations found
                    </Text>
                  )}
                </Box>
              </VStack>
            </MenuList>
          </Menu>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            variant="ghost"
            colorScheme="blue"
            aria-label="Open menu"
            icon={<FaBars />}
          />
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <NavLinks direction="column" />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
} 