import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { theme } from '@/styles/theme'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </SessionProvider>
  )
}
