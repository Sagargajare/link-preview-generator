import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <Head>
          <title>Next Link Previewer</title>
          <meta property="og:title" content="Next Link Previewer" key="title" />
        </Head>
        <Head>
          <meta
            property="og:description"
            content="Next Link Previewer:- A Link Previewer without any third party library."
            key="description"
          />
          <link
            rel="canonical"
            href="https://next-link-previewer.vercel.app/"
          />
          <meta name="next-head-count" content="25" />
          <meta
            property="og:image"
            itemProp="image"
            content="https://next-link-previewer.vercel.app/logo.png"
          />
        </Head>
      </Head>
      <body className="bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
