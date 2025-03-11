import '@/styles/globals.css'
import 'prismjs/themes/prism-tomorrow.css' // Import PrismJS theme
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}