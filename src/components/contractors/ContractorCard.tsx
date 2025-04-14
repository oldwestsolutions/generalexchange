'use client'

import React from 'react'
import { Box, Flex, Image, Text, Badge, HStack, Icon, Button } from '@chakra-ui/react'
import { FaStar, FaMapMarkerAlt, FaCheck } from 'react-icons/fa'
import { Card } from '../ui/Card'
import Link from 'next/link'
import { Contractor } from '@/types'

interface ContractorCardProps {
  contractor: Contractor
  variant?: 'compact' | 'full'
}

export default function ContractorCard({ contractor, variant = 'full' }: ContractorCardProps) {
  return (
    <Card isHoverable>
      <Flex direction={variant === 'compact' ? 'row' : 'column'}>
        <Image
          src={contractor.portfolio[0]?.images[0] || 'https://via.placeholder.com/300x200'}
          alt={contractor.businessName}
          objectFit="cover"
          h={variant === 'compact' ? '100px' : '200px'}
          w={variant === 'compact' ? '100px' : 'full'}
        />
        <Box p={6} flex="1">
          <Flex justify="space-between" align="start" mb={2}>
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb={1}>
                {contractor.businessName}
              </Text>
              <HStack spacing={2} color="gray.600" mb={2}>
                <Icon as={FaMapMarkerAlt} />
                <Text>{contractor.location.city}, {contractor.location.state}</Text>
              </HStack>
            </Box>
            <HStack>
              <Icon as={FaStar} color="yellow.400" />
              <Text fontWeight="bold">{contractor.rating}</Text>
              <Text color="gray.600">({contractor.reviewCount})</Text>
            </HStack>
          </Flex>

          {variant === 'full' && (
            <>
              <Text noOfLines={2} color="gray.600" mb={4}>
                {contractor.description}
              </Text>

              <HStack spacing={2} mb={4} flexWrap="wrap">
                {contractor.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} colorScheme="blue" variant="subtle">
                    {skill}
                  </Badge>
                ))}
                {contractor.skills.length > 3 && (
                  <Badge colorScheme="gray" variant="subtle">
                    +{contractor.skills.length - 3} more
                  </Badge>
                )}
              </HStack>

              <HStack spacing={2} mb={4}>
                {contractor.licenses.some(l => l.verificationStatus === 'VERIFIED') && (
                  <HStack color="green.500" spacing={1}>
                    <Icon as={FaCheck} />
                    <Text fontSize="sm">Licensed & Verified</Text>
                  </HStack>
                )}
              </HStack>
            </>
          )}

          <Flex justify="space-between" align="center">
            <Link href={`/contractors/${contractor.id}`}>
              <Button variant="outline" colorScheme="blue">
                View Profile
              </Button>
            </Link>
            <Button colorScheme="blue">
              Contact
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  )
} 