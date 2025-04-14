'use client'

import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface CustomButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, variant = 'primary', size = 'md', ...props }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'primary':
          return {
            bg: 'blue.500',
            color: 'white',
            _hover: { bg: 'blue.600' },
            _active: { bg: 'blue.700' }
          }
        case 'secondary':
          return {
            bg: 'gray.100',
            color: 'gray.800',
            _hover: { bg: 'gray.200' },
            _active: { bg: 'gray.300' }
          }
        case 'outline':
          return {
            bg: 'transparent',
            color: 'blue.500',
            border: '1px solid',
            borderColor: 'blue.500',
            _hover: { bg: 'blue.50' }
          }
        case 'ghost':
          return {
            bg: 'transparent',
            color: 'gray.600',
            _hover: { bg: 'gray.50' }
          }
        default:
          return {}
      }
    }

    return (
      <ChakraButton
        ref={ref}
        {...getVariantStyles()}
        size={size}
        fontWeight="medium"
        rounded="lg"
        {...props}
      >
        {children}
      </ChakraButton>
    )
  }
) 