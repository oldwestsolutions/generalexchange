'use client'

import { Box, Container, Heading, Text, VStack, HStack, Button, Icon, useColorModeValue, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Link, SimpleGrid } from '@chakra-ui/react'
import { FaQuestionCircle, FaFileAlt, FaHeadset, FaSearch, FaBook, FaUserTie } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

const faqs = [
  {
    question: "How does the escrow service work?",
    answer: "Our escrow service holds your payment securely until the work is completed to your satisfaction. Once you approve the final work, the funds are released to the contractor. This ensures both parties are protected throughout the project."
  },
  {
    question: "How do I find a qualified contractor?",
    answer: "You can browse our verified contractor directory, read reviews, and compare quotes. All contractors on our platform are vetted and licensed professionals with proven track records."
  },
  {
    question: "What happens if I'm not satisfied with the work?",
    answer: "If you're not satisfied with the completed work, you can file a dispute through our platform. Our team will mediate the situation and help find a resolution that works for both parties."
  },
  {
    question: "How are payments processed?",
    answer: "Payments are processed securely through our platform. You can pay using credit/debit cards, bank transfers, or other approved payment methods. All transactions are encrypted and secure."
  },
  {
    question: "What types of projects can I post?",
    answer: "You can post any home improvement or repair project, from small repairs to major renovations. Our platform supports a wide range of construction and home improvement services."
  }
]

const supportResources = [
  {
    icon: FaFileAlt,
    title: "Documentation",
    description: "Detailed guides and tutorials",
    link: "/help/documentation"
  },
  {
    icon: FaBook,
    title: "Knowledge Base",
    description: "Articles and best practices",
    link: "/help/knowledge-base"
  },
  {
    icon: FaUserTie,
    title: "Contractor Resources",
    description: "Tools and guides for contractors",
    link: "/help/contractor-resources"
  }
]

export default function Help() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            {/* Header */}
            <Box textAlign="center">
              <Heading size="lg">Help Center</Heading>
              <Text color="gray.600" mt={2}>
                Find answers to your questions and get the support you need
              </Text>
            </Box>

            {/* Search Bar */}
            <Box
              bg={bgColor}
              p={6}
              borderRadius="lg"
              boxShadow="sm"
              border="1px"
              borderColor={borderColor}
            >
              <HStack spacing={4}>
                <Icon as={FaSearch} boxSize={6} color="gray.400" />
                <Text color="gray.500">Search for help articles, FAQs, and more...</Text>
              </HStack>
            </Box>

            {/* Support Resources */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {supportResources.map((resource, index) => (
                <Box
                  key={index}
                  bg={bgColor}
                  p={6}
                  borderRadius="lg"
                  boxShadow="sm"
                  border="1px"
                  borderColor={borderColor}
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
                  transition="all 0.2s"
                >
                  <VStack spacing={4} align="start">
                    <Icon as={resource.icon} boxSize={8} color="blue.500" />
                    <Heading size="md">{resource.title}</Heading>
                    <Text color="gray.600">{resource.description}</Text>
                    <Link href={resource.link} color="blue.500">
                      Learn more →
                    </Link>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>

            {/* FAQs */}
            <Box
              bg={bgColor}
              p={6}
              borderRadius="lg"
              boxShadow="sm"
              border="1px"
              borderColor={borderColor}
            >
              <HStack spacing={4} mb={6}>
                <Icon as={FaQuestionCircle} boxSize={6} color="blue.500" />
                <Heading size="md">Frequently Asked Questions</Heading>
              </HStack>

              <Accordion allowMultiple>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} border="none">
                    <AccordionButton
                      py={4}
                      _hover={{ bg: 'gray.50' }}
                      borderRadius="md"
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontWeight="bold">{faq.question}</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text color="gray.600">{faq.answer}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>

            {/* Contact Support */}
            <Box
              bg={bgColor}
              p={6}
              borderRadius="lg"
              boxShadow="sm"
              border="1px"
              borderColor={borderColor}
              textAlign="center"
            >
              <VStack spacing={4}>
                <Icon as={FaHeadset} boxSize={8} color="blue.500" />
                <Heading size="md">Still Need Help?</Heading>
                <Text color="gray.600">
                  Our support team is available 24/7 to assist you
                </Text>
                <Button
                  colorScheme="blue"
                  leftIcon={<Icon as={FaHeadset} />}
                  onClick={() => window.location.href = '/support'}
                >
                  Contact Support
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 