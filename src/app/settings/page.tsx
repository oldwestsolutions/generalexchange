'use client'

import { Box, Container, Heading, Text, VStack, HStack, Button, Icon, useColorModeValue, Divider, FormControl, FormLabel, Switch, Input, Select, Avatar, Badge } from '@chakra-ui/react'
import { FaUser, FaBell, FaLock, FaPalette, FaLanguage, FaShieldAlt } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

export default function Settings() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            {/* Header */}
            <Box>
              <Heading size="lg">Settings</Heading>
              <Text color="gray.600">Manage your account preferences and security settings</Text>
            </Box>

            {/* Account Section */}
            <Box bg={bgColor} p={6} borderRadius="lg" boxShadow="sm" border="1px" borderColor={borderColor}>
              <HStack spacing={4} mb={6}>
                <Icon as={FaUser} boxSize={6} color="blue.500" />
                <Heading size="md">Account Settings</Heading>
              </HStack>

              <VStack spacing={6} align="stretch">
                <HStack spacing={4}>
                  <Avatar size="lg" name="John Doe" />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">John Doe</Text>
                    <Badge colorScheme="green">Verified</Badge>
                  </VStack>
                </HStack>

                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input defaultValue="John Doe" />
                </FormControl>

                <FormControl>
                  <FormLabel>Email Address</FormLabel>
                  <Input defaultValue="john.doe@example.com" type="email" />
                </FormControl>

                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input defaultValue="+1 (555) 123-4567" type="tel" />
                </FormControl>

                <Button colorScheme="blue" alignSelf="flex-start">
                  Update Profile
                </Button>
              </VStack>
            </Box>

            {/* Notifications Section */}
            <Box bg={bgColor} p={6} borderRadius="lg" boxShadow="sm" border="1px" borderColor={borderColor}>
              <HStack spacing={4} mb={6}>
                <Icon as={FaBell} boxSize={6} color="blue.500" />
                <Heading size="md">Notifications</Heading>
              </HStack>

              <VStack spacing={4} align="stretch">
                <FormControl display="flex" alignItems="center" justifyContent="space-between">
                  <FormLabel mb="0">Email Notifications</FormLabel>
                  <Switch colorScheme="blue" defaultChecked />
                </FormControl>

                <FormControl display="flex" alignItems="center" justifyContent="space-between">
                  <FormLabel mb="0">SMS Notifications</FormLabel>
                  <Switch colorScheme="blue" />
                </FormControl>

                <FormControl display="flex" alignItems="center" justifyContent="space-between">
                  <FormLabel mb="0">Project Updates</FormLabel>
                  <Switch colorScheme="blue" defaultChecked />
                </FormControl>

                <FormControl display="flex" alignItems="center" justifyContent="space-between">
                  <FormLabel mb="0">Marketing Communications</FormLabel>
                  <Switch colorScheme="blue" />
                </FormControl>
              </VStack>
            </Box>

            {/* Security Section */}
            <Box bg={bgColor} p={6} borderRadius="lg" boxShadow="sm" border="1px" borderColor={borderColor}>
              <HStack spacing={4} mb={6}>
                <Icon as={FaLock} boxSize={6} color="blue.500" />
                <Heading size="md">Security</Heading>
              </HStack>

              <VStack spacing={4} align="stretch">
                <Button colorScheme="blue" variant="outline" leftIcon={<Icon as={FaLock} />}>
                  Change Password
                </Button>

                <Button colorScheme="blue" variant="outline" leftIcon={<Icon as={FaShieldAlt} />}>
                  Two-Factor Authentication
                </Button>

                <Button colorScheme="blue" variant="outline" leftIcon={<Icon as={FaUser} />}>
                  Manage Connected Accounts
                </Button>
              </VStack>
            </Box>

            {/* Preferences Section */}
            <Box bg={bgColor} p={6} borderRadius="lg" boxShadow="sm" border="1px" borderColor={borderColor}>
              <HStack spacing={4} mb={6}>
                <Icon as={FaPalette} boxSize={6} color="blue.500" />
                <Heading size="md">Preferences</Heading>
              </HStack>

              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel>Language</FormLabel>
                  <Select defaultValue="en">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Time Zone</FormLabel>
                  <Select defaultValue="est">
                    <option value="est">Eastern Time (ET)</option>
                    <option value="cst">Central Time (CT)</option>
                    <option value="pst">Pacific Time (PT)</option>
                  </Select>
                </FormControl>

                <FormControl display="flex" alignItems="center" justifyContent="space-between">
                  <FormLabel mb="0">Dark Mode</FormLabel>
                  <Switch colorScheme="blue" />
                </FormControl>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 