'use client'

import { Inter } from 'next/font/google'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white',
      },
    },
  },
  colors: {
    brand: {
      50: '#f0e4ff',
      100: '#cbb2ff',
      200: '#a67fff',
      300: '#804dff',
      400: '#5a1aff',
      500: '#4100e6',
      600: '#3200b4',
      700: '#230082',
      800: '#140051',
      900: '#070021',
    },
  },
})

function getLibrary(provider: any) {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </Web3ReactProvider>
      </body>
    </html>
  )
} 