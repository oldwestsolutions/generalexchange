'use client'

import { useState, useEffect } from 'react'
import { Box, Flex, HStack, IconButton, Menu, MenuButton, MenuList, MenuItem, useColorModeValue, Image } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'
import NextLink from 'next/link'

export default function Navbar() {
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
      <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 6 }} py={{ base: 3, md: 4 }}>
        <Flex justify="space-between" align="center">
          <HStack spacing={8}>
            <NextLink href="/" passHref>
              <Box as="span" display="flex" alignItems="center" cursor="pointer">
                <Image
                  src="/xlogo.jpeg"
                  alt="General Exchange"
                  h={{ base: "28px", md: "32px" }}
                  w={{ base: "28px", md: "32px" }}
                  objectFit="contain"
                />
              </Box>
            </NextLink>
          </HStack>
          <HStack spacing={4}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="User menu"
                icon={<Box as={FaUserCircle} fontSize={{ base: "24px", md: "28px" }} />}
                variant="ghost"
                size={{ base: "md", md: "lg" }}
              />
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
} 