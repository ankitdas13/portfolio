import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
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
  return <Component {...pageProps} />
}
