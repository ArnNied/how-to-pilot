import "../styles/globals.css"

import type { AppProps } from "next/app"
import Head from "next/head"

import MainLayout from "../layouts/MainLayout"
import MainLayoutWithoutFooter from "../layouts/MainLayoutWithoutFooter"

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const pagesWithoutFooter = ["/register", "/login"]
  function determineLayout() {
    if (pagesWithoutFooter.includes(appProps.router.pathname)) {
      return (
        <MainLayoutWithoutFooter>
          <Component {...pageProps} />
        </MainLayoutWithoutFooter>
      )
    } else {
      return (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )
    }
  }
  return (
    <>
      <Head>
        <title>How To Pilot</title>
        <meta name="description" content="How To Pilot" />
      </Head>
      {determineLayout()}
    </>
  )
}

export default MyApp
