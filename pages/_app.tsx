import "../styles/globals.css"

import type { AppProps } from "next/app"
import Head from "next/head"

import MainLayout from "../layouts/MainLayout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>How To Pilot</title>
        <meta name="description" content="How To Pilot" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp
