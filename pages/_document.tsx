import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-primary-base">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
