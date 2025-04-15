'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, Button, Input, InputGroup, InputRightElement, IconButton, Flex, Link, HStack, Badge, SimpleGrid, InputLeftElement } from '@chakra-ui/react'
import { FaSearch, FaTools, FaHammer, FaPaintRoller, FaWrench, FaHome, FaBuilding, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import NextLink from 'next/link'
import { Icon } from '@chakra-ui/react'

export default function Home() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <>
      <Navbar />
      {/* eBay-style Hero Section */}
      <Box bg="white" py={4} borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} align="stretch" gap={10}>
            {/* Left: Carousel */}
            <Box flex="1" minW={{ base: '100%', md: '380px' }} maxW={{ base: '100%', md: '420px' }} display="flex" alignItems="center" justifyContent="center">
              <HeroCarousel />
            </Box>
            {/* Right: Description, Search, Featured Products */}
            <VStack flex="1" align="stretch" spacing={6} justify="center" minW={0}>
              <Box>
                <Text fontSize={{ base: 'xl', md: '2xl' }} color="gray.800" fontWeight="bold" mb={2}>
                  Find the right contractor for your next project
                </Text>
                <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }}>
                  Post your project, get free quotes, and hire with confidence. All payments are protected by escrow.
                </Text>
              </Box>
              {/* Search Bar */}
              <Box w="full">
                <form onSubmit={handleSearch} style={{ width: '100%' }}>
                  <InputGroup size={{ base: "md", md: "lg" }}>
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for contractors, services, or products..."
                      borderRadius="full"
                      borderColor="gray.300"
                      _hover={{ borderColor: 'gray.400' }}
                      _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                      fontSize={{ base: "md", md: "lg" }}
                      py={{ base: 4, md: 6 }}
                      px={{ base: 6, md: 8 }}
                      color="gray.800"
                      bg="white"
                      _placeholder={{ color: 'gray.400' }}
                    />
                    <InputRightElement h="full" pr={0}>
                      <Button
                        type="submit"
                        aria-label="Search"
                        colorScheme="blue"
                        borderRadius="full"
                        size={{ base: "md", md: "lg" }}
                        px={0}
                        h="full"
                        fontWeight="bold"
                        fontSize={{ base: "md", md: "lg" }}
                        borderLeftRadius={0}
                      >
                        <Box as={FaSearch} fontSize={{ base: "18px", md: "24px" }} />
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </form>
              </Box>
              {/* Featured Products Mini-Grid */}
              <Box>
                <Text fontWeight="semibold" color="gray.700" mb={2} fontSize="lg">Featured Products</Text>
                <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={3} mb={2}>
                  {featuredProducts.slice(0, 3).map((product, idx) => (
                    <Box key={idx} bg="gray.50" borderRadius="lg" boxShadow="sm" p={2} textAlign="center">
                      <Image src={product.image} alt={product.name} width={60} height={60} style={{ objectFit: 'contain', margin: '0 auto' }} />
                      <Text fontSize="sm" fontWeight="bold" mt={1}>{product.name}</Text>
                      <Text color="orange.500" fontWeight="bold" fontSize="sm">${product.price}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
                <Button as={NextLink} href="#featured" colorScheme="blue" size="sm" borderRadius="full" fontWeight="bold" w="full">See More</Button>
              </Box>
            </VStack>
          </Flex>
          {/* Category Chips (below hero) */}
          <Flex wrap="wrap" justify="center" gap={3} mb={2} mt={8}>
            {['Home Improvement', 'Remodeling', 'Plumbing', 'Painting', 'Electrical', 'Landscaping', 'Cleaning', 'More...'].map((cat) => (
              <Button
                key={cat}
                variant="outline"
                colorScheme="gray"
                borderRadius="full"
                size="sm"
                fontWeight="500"
                px={5}
                _hover={{ bg: 'gray.100', borderColor: 'orange.400', color: 'orange.500' }}
              >
                {cat}
              </Button>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* Dynamic Sections as Carousels */}
      <Container maxW="container.xl" py={12}>
        <Box py={8} bg="gray.50" borderRadius="2xl" mb={10} boxShadow="sm">
          <SectionCarousel title="Featured" products={featuredProducts} />
        </Box>
        <Box py={8} bg="white" borderRadius="2xl" mb={10} boxShadow="sm">
          <SectionCarousel title="Recommended for You" products={recommendedProducts} />
        </Box>
        <Box py={8} bg="gray.50" borderRadius="2xl" mb={10} boxShadow="sm">
          <SectionCarousel title="Top Liked" products={topLikedProducts} />
        </Box>
        <Box py={8} bg="white" borderRadius="2xl" mb={10} boxShadow="sm">
          <SectionCarousel title="Best Sellers" products={bestSellers} />
        </Box>
        <Box py={8} bg="gray.50" borderRadius="2xl" mb={10} boxShadow="sm">
          <SectionCarousel title="High Rated" products={highRatedProducts} />
        </Box>
        {/* News Section as Grid */}
        <SectionHeading mt={12}>News</SectionHeading>
        <NewsGrid news={newsItems} />
      </Container>
    </>
  )
}

// Helper components and mock data
const SectionHeading = (props: any) => (
  <Heading size="xl" mb={8} color="gray.800" letterSpacing="-1px" {...props} />
)

const SectionCarousel = ({ title, products }: { title: string, products: any[] }) => (
  <Box mb={6}>
    <Flex align="center" justify="space-between" mb={4}>
      <Heading size="lg" color="gray.800">{title}</Heading>
      <Button variant="link" colorScheme="blue" fontWeight="bold" fontSize="md">See all</Button>
    </Flex>
    <Box overflowX="auto" whiteSpace="nowrap" pb={2}>
      <Flex gap={6}>
        {products.map((product, idx) => (
          <Box key={idx} minW="220px" maxW="240px" bg="white" boxShadow="md" borderRadius="xl" p={5} textAlign="center" display="inline-block" _hover={{ boxShadow: '2xl', transform: 'translateY(-4px)', transition: 'all 0.2s' }} transition="all 0.2s">
            <Image src={product.image} alt={product.name} width={140} height={140} style={{ objectFit: 'contain', margin: '0 auto' }} />
            <Text fontWeight="bold" mt={3} fontSize="lg">{product.name}</Text>
            <Text color="gray.500" fontSize="sm">{product.category}</Text>
            <Text color="orange.500" fontWeight="bold" fontSize="xl">${product.price}</Text>
            <Button mt={3} colorScheme="blue" size="md" borderRadius="full" fontWeight="bold" _hover={{ bg: 'blue.600' }}>View</Button>
          </Box>
        ))}
      </Flex>
    </Box>
  </Box>
)

// Fix linter errors by typing NewsGrid and its parameters
interface NewsItem {
  title: string;
  summary: string;
}

const NewsGrid = ({ news }: { news: NewsItem[] }) => (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={4}>
    {news.map((item: NewsItem, idx: number) => (
      <Box key={idx} bg="gray.50" boxShadow="sm" borderRadius="lg" p={5} _hover={{ boxShadow: 'md', transform: 'translateY(-2px)', transition: 'all 0.2s' }} transition="all 0.2s">
        <Text fontWeight="bold" mb={2} fontSize="lg">{item.title}</Text>
        <Text color="gray.600" fontSize="md">{item.summary}</Text>
        <Button mt={3} size="sm" colorScheme="blue" variant="link">Read More</Button>
      </Box>
    ))}
  </SimpleGrid>
)

const featuredProducts = [
  { name: 'Smart Thermostat', category: 'Electronics', price: 199.99, image: '/carraigetrans.jpeg' },
  { name: 'Rainfall Shower', category: 'Home Improvement', price: 299.99, image: '/carriage.jpeg' },
  { name: 'LED Ceiling Fan', category: 'Lighting', price: 149.99, image: '/carraigetrans.jpeg' },
  { name: 'Cordless Drill', category: 'Tools', price: 89.99, image: '/carriage.jpeg' },
]
const recommendedProducts = [
  { name: 'Smart Lock', category: 'Electronics', price: 129.99, image: '/carraigetrans.jpeg' },
  { name: 'Paint Kit', category: 'Paint', price: 39.99, image: '/carriage.jpeg' },
  { name: 'Garden Hose', category: 'Garden', price: 24.99, image: '/carraigetrans.jpeg' },
  { name: 'Flooring Tiles', category: 'Flooring', price: 59.99, image: '/carriage.jpeg' },
]
const topLikedProducts = [
  { name: 'Tool Set', category: 'Tools', price: 79.99, image: '/carraigetrans.jpeg' },
  { name: 'LED Bulbs', category: 'Lighting', price: 19.99, image: '/carriage.jpeg' },
  { name: 'Smart Plug', category: 'Electronics', price: 29.99, image: '/carraigetrans.jpeg' },
  { name: 'Shower Head', category: 'Home Improvement', price: 49.99, image: '/carriage.jpeg' },
]
const newsItems = [
  { title: 'New Partnership with Top Brands', summary: 'We are excited to announce new partnerships with leading home improvement brands.' },
  { title: 'Spring Sale is Live!', summary: 'Enjoy discounts on select products and services this spring.' },
  { title: 'How to Choose the Right Contractor', summary: 'Tips and tricks for finding the best professional for your next project.' },
]
const bestSellers = [
  { name: 'Cordless Drill', category: 'Tools', price: 89.99, image: '/carriage.jpeg' },
  { name: 'Smart Thermostat', category: 'Electronics', price: 199.99, image: '/carraigetrans.jpeg' },
  { name: 'LED Ceiling Fan', category: 'Lighting', price: 149.99, image: '/carraigetrans.jpeg' },
  { name: 'Paint Kit', category: 'Paint', price: 39.99, image: '/carriage.jpeg' },
]
const highRatedProducts = [
  { name: 'Rainfall Shower', category: 'Home Improvement', price: 299.99, image: '/carriage.jpeg' },
  { name: 'Smart Lock', category: 'Electronics', price: 129.99, image: '/carraigetrans.jpeg' },
  { name: 'Tool Set', category: 'Tools', price: 79.99, image: '/carraigetrans.jpeg' },
  { name: 'Garden Hose', category: 'Garden', price: 24.99, image: '/carriage.jpeg' },
]

// Add a simple HeroCarousel component
const heroSlides = [
  {
    headline: 'Find Trusted Contractors',
    description: 'Connect with licensed, vetted professionals for any home project. Get started in minutes!',
    cta: 'Find a Contractor',
    ctaLink: '/search?type=contractor',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // general contractor
  },
  {
    headline: 'Plumbing Services',
    description: 'Leaky faucet or major pipe repair? Find top-rated plumbers near you.',
    cta: 'Find Plumbers',
    ctaLink: '/search?type=plumbing',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Roofing Experts',
    description: 'Protect your home with trusted roofing professionals. Get free quotes today.',
    cta: 'Find Roofers',
    ctaLink: '/search?type=roofing',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Flooring Solutions',
    description: 'Upgrade your space with beautiful, durable flooring. Compare local pros now.',
    cta: 'Find Flooring Pros',
    ctaLink: '/search?type=flooring',
    image: 'https://images.unsplash.com/photo-1503389152951-9c3d8b6e9c94?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Electrical Services',
    description: 'From rewiring to lighting, connect with licensed electricians for any job.',
    cta: 'Find Electricians',
    ctaLink: '/search?type=electrical',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Get Quotes Fast',
    description: 'Post your project and receive free quotes from top-rated pros near you.',
    cta: 'Post Your Project',
    ctaLink: '/post-project',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Secure Escrow Payments',
    description: 'Your money is protected until the job is done right. Pay only when satisfied.',
    cta: 'Learn About Escrow',
    ctaLink: '/company',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  },
  {
    headline: 'Top-Rated Service Pros',
    description: 'Browse reviews and ratings to choose the best contractor for your needs.',
    cta: 'Browse Pros',
    ctaLink: '/search?sort=rating',
    image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=600&q=80',
  },
]

function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [progress, setProgress] = useState(0)
  const SLIDE_DURATION = 5000
  const FADE_DURATION = 800
  // Smoother, slower fade transition and progress bar
  React.useEffect(() => {
    setFade(false)
    setProgress(0)
    const fadeTimeout = setTimeout(() => setFade(true), 80)
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % heroSlides.length)
        setFade(true)
      }, FADE_DURATION)
    }, SLIDE_DURATION)
    // Progress bar animation
    let frame: number
    let start: number | null = null
    function animateProgress(ts: number) {
      if (!start) start = ts
      const elapsed = ts - start
      setProgress(Math.min(elapsed / SLIDE_DURATION, 1))
      if (elapsed < SLIDE_DURATION) {
        frame = requestAnimationFrame(animateProgress)
      }
    }
    frame = requestAnimationFrame(animateProgress)
    return () => { clearInterval(timer); clearTimeout(fadeTimeout); cancelAnimationFrame(frame) }
  }, [index])
  const slide = heroSlides[index]
  // Navigation handlers
  const goTo = (i: number) => {
    setFade(false)
    setTimeout(() => {
      setIndex((i + heroSlides.length) % heroSlides.length)
      setFade(true)
    }, 80)
  }
  return (
    <Box w="360px" h="440px" maxW="100%" mx="auto" mb={0} position="relative" bg="gray.50" borderRadius="2xl" boxShadow="lg" border="1.5px solid #e2e8f0" p={{ base: 6, md: 8 }} textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center" transition="all 0.3s">
      {/* Left Arrow */}
      <IconButton
        aria-label="Previous"
        icon={<FaChevronLeft />}
        size="sm"
        variant="ghost"
        colorScheme="gray"
        position="absolute"
        top="50%"
        left={2}
        transform="translateY(-50%)"
        zIndex={2}
        onClick={() => goTo(index - 1)}
        opacity={0.7}
        _hover={{ opacity: 1, bg: 'gray.200' }}
        borderRadius="full"
      />
      {/* Right Arrow */}
      <IconButton
        aria-label="Next"
        icon={<FaChevronRight />}
        size="sm"
        variant="ghost"
        colorScheme="gray"
        position="absolute"
        top="50%"
        right={2}
        transform="translateY(-50%)"
        zIndex={2}
        onClick={() => goTo(index + 1)}
        opacity={0.7}
        _hover={{ opacity: 1, bg: 'gray.200' }}
        borderRadius="full"
      />
      <Image
        src={slide.image}
        alt={slide.headline}
        width={320}
        height={180}
        style={{
          objectFit: 'cover',
          borderRadius: '16px',
          margin: '0 auto',
          marginBottom: 28,
          transition: 'opacity 0.8s',
          opacity: fade ? 1 : 0
        }}
      />
      <Box style={{ transition: 'opacity 0.8s', opacity: fade ? 1 : 0 }}>
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="extrabold" color="gray.800" mb={2}>
          {slide.headline}
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" mb={4}>
          {slide.description}
        </Text>
        <Button as={NextLink} href={slide.ctaLink} colorScheme="orange" size="sm" borderRadius="full" fontWeight="bold" px={5} py={2} fontSize="md">
          {slide.cta}
        </Button>
      </Box>
      {/* Progress Bar */}
      <Box w="80%" h="2.5px" bg="gray.200" borderRadius="full" mt={5} mb={2} mx="auto" position="relative" overflow="hidden">
        <Box h="full" bg="orange.400" borderRadius="full" transition="width 0.2s" style={{ width: `${progress * 100}%` }} />
      </Box>
      {/* Minimal Dots */}
      <Flex position="absolute" bottom={4} left="50%" transform="translateX(-50%)" gap={1.5}>
        {heroSlides.map((_, i) => (
          <Box key={i} w={1.5} h={1.5} borderRadius="full" bg={i === index ? 'orange.400' : 'gray.200'} opacity={i === index ? 1 : 0.7} />
        ))}
      </Flex>
    </Box>
  )
}
