'use client'

import React from 'react'
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  VStack, 
  Button, 
  Icon, 
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  CardBody,
  HStack,
  Badge,
  Divider,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { 
  FaStore, 
  FaBox, 
  FaChartLine, 
  FaClipboardList, 
  FaTruck, 
  FaFileInvoiceDollar, 
  FaBell, 
  FaQuestionCircle,
  FaArrowRight,
  FaUserPlus,
  FaTools,
  FaShoppingCart,
  FaUsers
} from 'react-icons/fa'
import Navbar from '@/components/Navbar'

const sellerTools = [
  {
    icon: FaStore,
    title: "Seller Dashboard",
    description: "Manage your store, track sales, and monitor performance",
    color: "orange.500"
  },
  {
    icon: FaBox,
    title: "Inventory Management",
    description: "Track and manage your product inventory",
    color: "cyan.500"
  },
  {
    icon: FaChartLine,
    title: "Analytics",
    description: "View detailed sales and customer analytics",
    color: "blue.500"
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Earnings",
    description: "Track your earnings and manage payouts",
    color: "green.500"
  }
]

const vendorTools = [
  {
    icon: FaTruck,
    title: "Shipping Portal",
    description: "Manage shipping and delivery operations",
    color: "purple.500"
  },
  {
    icon: FaClipboardList,
    title: "Order Management",
    description: "Process and track customer orders",
    color: "teal.500"
  },
  {
    icon: FaBell,
    title: "Notifications",
    description: "Stay updated with order and system notifications",
    color: "red.500"
  },
  {
    icon: FaQuestionCircle,
    title: "Support",
    description: "Access vendor support and resources",
    color: "blue.500"
  }
]

const gettingStartedSteps = [
  {
    title: "Create Your Account",
    description: "Sign up as a seller or vendor to get started",
    icon: FaUserPlus
  },
  {
    title: "Set Up Your Profile",
    description: "Complete your profile and business information",
    icon: FaTools
  },
  {
    title: "List Your Products",
    description: "Add your products and set up your inventory",
    icon: FaShoppingCart
  },
  {
    title: "Start Selling",
    description: "Begin accepting orders and managing your business",
    icon: FaUsers
  }
]

export default function Services() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="gray.50">
        <Container maxW="container.xl" py={12}>
          <VStack spacing={12} align="stretch">
            {/* Hero Section */}
            <Box textAlign="center">
              <Heading
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="900"
                letterSpacing="-0.02em"
                mb={4}
              >
                Business Tools & Services
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
                Everything you need to run your business on General Exchange
              </Text>
            </Box>

            {/* Getting Started Section */}
            <Box bg={bgColor} p={8} borderRadius="lg" boxShadow="sm" border="1px" borderColor={borderColor}>
              <Heading size="lg" mb={6}>Getting Started</Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                {gettingStartedSteps.map((step, index) => (
                  <Card key={index} variant="outline">
                    <CardBody>
                      <VStack align="start" spacing={4}>
                        <Icon as={step.icon} boxSize={6} color="blue.500" />
                        <Text fontWeight="bold">{step.title}</Text>
                        <Text color="gray.600" fontSize="sm">{step.description}</Text>
                      </VStack>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </Box>

            {/* Tools Section */}
            <Tabs variant="enclosed" colorScheme="blue">
              <TabList>
                <Tab>Seller Tools</Tab>
                <Tab>Vendor Tools</Tab>
              </TabList>

              <TabPanels>
                {/* Seller Tools Panel */}
                <TabPanel>
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                    {sellerTools.map((tool, index) => (
                      <Card key={index} variant="outline">
                        <CardBody>
                          <VStack align="start" spacing={4}>
                            <Icon as={tool.icon} boxSize={6} color={tool.color} />
                            <Text fontWeight="bold">{tool.title}</Text>
                            <Text color="gray.600" fontSize="sm">{tool.description}</Text>
                            <Button
                              rightIcon={<FaArrowRight />}
                              variant="ghost"
                              colorScheme="blue"
                              size="sm"
                            >
                              Learn More
                            </Button>
                          </VStack>
                        </CardBody>
                      </Card>
                    ))}
                  </SimpleGrid>
                </TabPanel>

                {/* Vendor Tools Panel */}
                <TabPanel>
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                    {vendorTools.map((tool, index) => (
                      <Card key={index} variant="outline">
                        <CardBody>
                          <VStack align="start" spacing={4}>
                            <Icon as={tool.icon} boxSize={6} color={tool.color} />
                            <Text fontWeight="bold">{tool.title}</Text>
                            <Text color="gray.600" fontSize="sm">{tool.description}</Text>
                            <Button
                              rightIcon={<FaArrowRight />}
                              variant="ghost"
                              colorScheme="blue"
                              size="sm"
                            >
                              Learn More
                            </Button>
                          </VStack>
                        </CardBody>
                      </Card>
                    ))}
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>

            {/* Resources Section */}
            <Box bg={bgColor} p={8} borderRadius="lg" boxShadow="sm" border="1px" borderColor={borderColor}>
              <Heading size="lg" mb={6}>Resources & Support</Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                  <Text fontWeight="bold" mb={2}>Documentation</Text>
                  <VStack align="start" spacing={2}>
                    <Link color="blue.500" href="#">Getting Started Guide</Link>
                    <Link color="blue.500" href="#">Seller Handbook</Link>
                    <Link color="blue.500" href="#">Vendor Guidelines</Link>
                    <Link color="blue.500" href="#">API Documentation</Link>
                  </VStack>
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={2}>Support</Text>
                  <VStack align="start" spacing={2}>
                    <Link color="blue.500" href="#">Help Center</Link>
                    <Link color="blue.500" href="#">Contact Support</Link>
                    <Link color="blue.500" href="#">Community Forum</Link>
                    <Link color="blue.500" href="#">Training Webinars</Link>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 