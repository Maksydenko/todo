import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      {/* <meta charset="utf-8" /> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      {/* A brief description of the page  */}
      <meta name="description" content="Task management website" />
      {/* Disconnects the formation of a link by the phone number on iOS */}
      {/* <meta name="format-detection" content="telephone=no" /> */}
      {/* Key words of the page  */}
      <meta name="keywords" content="to do, todo, task management" />
      {/* Search robots access control to the page */}
      {/* <meta name="robots" content="" /> */}
      {/* The author of the page */}
      <meta name="author" content="Maksydenko" />
      {/* Copyright */}
      <meta name="copyright" content="Maksydenko" />
      {/* The address of the author */}
      <meta name="address" content="Kyiv, Ukraine" />
      {/* Card type, summary is used by default */}
      <meta name="twitter:card" content="summary" />
      {/* Page name */}
      <meta name="twitter:title" content="To do" />
      {/* Page description */}
      <meta name="twitter:description" content="Task management website" />
      {/* System on the image */}
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/Maksydenko/todo/master/public/todo-png.png"
      />
      {/* Site localization */}
      <meta property="og:locale" content="en_US" />
      {/* Site localization, for the Ukrainian-language site uk_UA */}
      {/* <meta property="og:locale:alternate" content="uk_UA" /> */}
      {/* Type of content */}
      <meta property="og:type" content="website" />
      {/* The title of the page that will be displayed in the recording of the social network */}
      <meta property="og:title" content="To do" />
      {/* Page description */}
      <meta property="og:description" content="Task management website" />
      {/* Link to the image that will be published in the recording */}
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/Maksydenko/todo/master/public/todo-png.png"
      />
      <meta property="og:image:alt" content="To do" />
      {/* Link to the current page */}
      <meta property="og:url" content="https://maksydenko.github.io/todo/" />
      {/* Name of the site */}
      <meta property="og:site_name" content="To do" />
      <link rel="apple-touch-icon" href="/todo/todo.svg" />
      <link rel="icon" href="/todo/todo.svg" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
