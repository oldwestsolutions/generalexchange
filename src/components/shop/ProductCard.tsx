'use client'

import React from 'react'
import { Box, Image, Text, Badge, HStack, Icon, Button, useToast } from '@chakra-ui/react'
import { FaStar, FaShoppingCart } from 'react-icons/fa'
import { Card } from '../ui/Card'
import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const toast = useToast()

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Card isHoverable>
      <Link href={`/shop/${product.id}`}>
        <Image
          src={product.images[0] || 'https://via.placeholder.com/300x300'}
          alt={product.name}
          objectFit="cover"
          h="300px"
          w="full"
        />
      </Link>
      <Box p={6}>
        <HStack justify="space-between" mb={2}>
          <Badge colorScheme="blue" variant="subtle">
            {product.category}
          </Badge>
          <HStack spacing={1}>
            <Icon as={FaStar} color="yellow.400" />
            <Text fontWeight="bold">{product.rating}</Text>
            <Text color="gray.600" fontSize="sm">
              ({product.reviewCount})
            </Text>
          </HStack>
        </HStack>

        <Link href={`/shop/${product.id}`}>
          <Text fontSize="xl" fontWeight="semibold" mb={2} noOfLines={2}>
            {product.name}
          </Text>
        </Link>

        <Text color="gray.600" noOfLines={2} mb={4}>
          {product.description}
        </Text>

        <HStack justify="space-between" align="center">
          <Text fontSize="2xl" fontWeight="bold" color="blue.600">
            ${product.price.toFixed(2)}
          </Text>
          <Button
            leftIcon={<FaShoppingCart />}
            colorScheme="blue"
            onClick={handleAddToCart}
            isDisabled={product.inventory === 0}
          >
            {product.inventory === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </HStack>
      </Box>
    </Card>
  )
} 