import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ankit Das - Web Developer</title>
        <meta name="title" content="Ankit Das - Web Developer" />
        <meta name="description" content="Ankit Das, also known as Bucky is an Web developer." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ankit Das - Web Developer" />
        <meta property="og:description" content="Ankit Das, also known as Bucky is an Web developer." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Ankit Das - Web Developer" />
        <meta property="twitter:description" content="Ankit Das, also known as Bucky is an Web developer." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
