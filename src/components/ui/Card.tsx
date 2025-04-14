'use client'

import { Box, BoxProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface CardProps extends BoxProps {
  variant?: 'elevated' | 'outline' | 'filled'
  isHoverable?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'elevated', isHoverable = false, ...props }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'elevated':
          return {
            bg: 'white',
            boxShadow: 'sm',
            _hover: isHoverable ? {
              boxShadow: 'md',
              transform: 'translateY(-2px)',
            } : undefined
          }
        case 'outline':
          return {
            bg: 'white',
            border: '1px solid',
            borderColor: 'gray.200',
            _hover: isHoverable ? {
              borderColor: 'gray.300',
              transform: 'translateY(-2px)',
            } : undefined
          }
        case 'filled':
          return {
            bg: 'gray.50',
            _hover: isHoverable ? {
              bg: 'gray.100',
              transform: 'translateY(-2px)',
            } : undefined
          }
        default:
          return {}
      }
    }

    return (
      <Box
        ref={ref}
        borderRadius="lg"
        overflow="hidden"
        transition="all 0.2s"
        {...getVariantStyles()}
        {...props}
      >
        {children}
      </Box>
    )
  }
) 