import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';

import store from 'src/redux/store';

import { global } from 'src/styles/global';
import { theme } from 'src/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>cotton's frontend</title>
        <meta name="author" content="Beomseok Han" />
        <meta name="description" content="frontend tech practice page" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keyword" content="HTML, frontend, tech, cotton" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global styles={global} />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
