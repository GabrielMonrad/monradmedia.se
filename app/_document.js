import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google Fonts link for Sixtyfour Convergence */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
