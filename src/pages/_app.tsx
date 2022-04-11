import React from 'react'
import { AppProps } from 'next/app'

import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../../styles/theme'
import Head from 'next/head'
import Base from 'src/templates/Base'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>7 Card</title>
        <meta name="description" content="A queridinha dos gamers" />
        <link
          rel="icon"
          href="https://kassandra.finance/favicon.svg"
          sizes="any"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Base Template={Component} pageProps={pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
