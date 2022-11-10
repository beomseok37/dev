import { Html, Head, Main, NextScript } from 'next/document';

function MyApp() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="author" content="Beomseok Han" />
        <meta name="description" content="frontend tech practice page" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keyword" content="HTML, frontend, tech, cotton" />
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyApp;
