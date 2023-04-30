//import '@/styles/globals.css'

import React, { useEffect, useState } from 'react';
import { Layout } from '../components'
import Head from 'next/head'
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
   <>
    <Head>
      <title>TD Blog</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
   </>
  )
}
