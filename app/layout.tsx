"use client"
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
