import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link href="/favicon.ico" rel="shortcut icon" />
        <link href="/manifest.json" rel="manifest" />
        <link href="/assets/apple-icon-120x120.png" rel="apple-touch-icon" />
        <link href="/assets/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />

        <meta content="그 밈" name="apple-mobile-web-app-title" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="default" name="apple-mobile-web-app-status-bar-style" />

        <meta content="#F3F4F8" name="theme-color" />

        <script
          defer
          crossOrigin="anonymous"
          integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
