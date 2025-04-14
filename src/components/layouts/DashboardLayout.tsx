'use client'

import React from 'react'
import { Box, Flex, VStack, Icon, Text, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { FaHome, FaClipboardList, FaTools, FaShoppingCart, FaComments, FaCog, FaBars } from 'react-icons/fa'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  label: string
  href: string
  icon: typeof FaHome
}

const contractorNavItems: NavItem[] = [
  { label: 'Overview', href: '/dashboard', icon: FaHome },
  { label: 'Projects', href: '/dashboard/projects', icon: FaClipboardList },
  { label: 'Services', href: '/dashboard/services', icon: FaTools },
  { label: 'Messages', href: '/dashboard/messages', icon: FaComments },
  { label: 'Settings', href: '/dashboard/settings', icon: FaCog },
]

const homeownerNavItems: NavItem[] = [
  { label: 'Overview', href: '/dashboard', icon: FaHome },
  { label: 'My Projects', href: '/dashboard/projects', icon: FaClipboardList },
  { label: 'Orders', href: '/dashboard/orders', icon: FaShoppingCart },
  { label: 'Messages', href: '/dashboard/messages', icon: FaComments },
  { label: 'Settings', href: '/dashboard/settings', icon: FaCog },
]

interface DashboardLayoutProps {
  children: React.ReactNode
  userType: 'contractor' | 'homeowner'
}

const Sidebar = ({ userType }: { userType: 'contractor' | 'homeowner' }) => {
  const pathname = usePathname()
  const navItems = userType === 'contractor' ? contractorNavItems : homeownerNavItems

  return (
    <VStack spacing={2} align="stretch" w="full">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link key={item.href} href={item.href}>
            <Flex
              align="center"
              px={4}
              py={3}
              borderRadius="lg"
              cursor="pointer"
              color={isActive ? 'blue.500' : 'gray.600'}
              bg={isActive ? 'blue.50' : 'transparent'}
              _hover={{
                bg: isActive ? 'blue.50' : 'gray.50',
                color: isActive ? 'blue.500' : 'gray.800',
              }}
            >
              <Icon as={item.icon} boxSize={5} />
              <Text ml={4} fontWeight={isActive ? 'medium' : 'normal'}>
                {item.label}
              </Text>
            </Flex>
          </Link>
        )
      })}
    </VStack>
  )
}

export default function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex minH="100vh" pt="64px">
      {/* Desktop Sidebar */}
      <Box
        display={{ base: 'none', md: 'block' }}
        w="240px"
        bg="white"
        borderRight="1px"
        borderColor="gray.200"
        px={4}
        py={8}
      >
        <Sidebar userType={userType} />
      </Box>

      {/* Mobile Sidebar Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Sidebar userType={userType} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Box flex={1} p={8} bg="gray.50">
        <IconButton
          aria-label="Open menu"
          icon={<FaBars />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          mb={4}
        />
        {children}
      </Box>
    </Flex>
  )
} 