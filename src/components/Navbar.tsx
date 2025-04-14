'use client'

import React, { useState, useMemo } from 'react'
import { Box, Flex, Text, HStack, Link, IconButton, Image, Menu, MenuButton, MenuList, MenuItem, Button, Input, InputGroup, InputLeftElement, VStack, Divider, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { FaBars, FaMapMarkerAlt, FaChevronDown, FaSearch, FaUserCircle } from 'react-icons/fa'
import NextLink from 'next/link'

// Mock location data
const locations = [
  { id: 1, city: 'San Francisco', state: 'CA', zip: '94105' },
  { id: 2, city: 'Los Angeles', state: 'CA', zip: '90001' },
  { id: 3, city: 'New York', state: 'NY', zip: '10001' },
  { id: 4, city: 'Chicago', state: 'IL', zip: '60601' },
  { id: 5, city: 'Seattle', state: 'WA', zip: '98101' }
]

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const [searchQuery, setSearchQuery] = useState('')

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
        <Link as={NextLink} href="/" display="flex" alignItems="center">
          <Image
            src="/xlogo.jpeg"
            alt="General Exchange"
            h="32px"
            w="32px"
            objectFit="contain"
          />
        </Link>

        <HStack spacing={4}>
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
        </HStack>
      </Flex>
    </Box>
  )
} 