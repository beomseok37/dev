import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';

import store from 'src/redux/store';

import { global } from 'src/styles/global';
import { theme } from 'src/styles/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cotton's frontend</title>
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
