'use client'

import React from 'react'
import { Box, Flex, HStack, Link, IconButton, Image, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
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
      <Flex
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={{ base: 3, md: 4 }}
        justify="space-between"
        align="center"
      >
        <Link as={NextLink} href="/" display="flex" alignItems="center">
          <Image
            src="/xlogo.jpeg"
            alt="General Exchange"
            h={{ base: "28px", md: "32px" }}
            w={{ base: "28px", md: "32px" }}
            objectFit="contain"
          />
        </Link>

        <Menu>
          <MenuButton
            as={IconButton}
            variant="ghost"
            icon={<FaUserCircle />}
            colorScheme="blue"
            aria-label="Account menu"
            size={{ base: "sm", md: "md" }}
          />
          <MenuList>
            <MenuItem as={NextLink} href="/dashboard">Dashboard</MenuItem>
            <MenuItem as={NextLink} href="/profile">Profile</MenuItem>
            <MenuItem as={NextLink} href="/settings">Settings</MenuItem>
            <MenuItem>Sign Out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  )
} 