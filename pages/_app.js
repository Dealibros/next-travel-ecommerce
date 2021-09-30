import { css, Global } from '@emotion/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
<>
  <Global styles={css`
  * {
  box-sizing:border-box;
  }
  body {
  margin:0;
  padding:0;
  height: 100vh;
  width:100vw;
  font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 20px;
  letter-spacing: 1.4;
  word-spacing: 1.4;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.9);
  }`}/>
<Head>
  <link rel="icon" href="/favicon.svg"/>
</Head>
  <Component {...pageProps} />
  </>
  )
};


export default MyApp
