import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Google Fonts - Playfair Display (premium heading) + Inter */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700&display=swap" 
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
