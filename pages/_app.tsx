import "../styles/globals.css"

import type { AppProps } from "next/app"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>How To Pilot</title>
        <meta name="description" content="How To Pilot" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
