import React from "react";

import { Container } from "./LayoutStyles";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Josh Scanlan | Web Developer</title>
        <meta
          name="description"
          content="Portfolio site of Josh Scanlan. Experience includes React/Redux, Next.js, Ethers, Styled Components, Tailwind CSS, Node, Express, and Solidity."
        />
        <link rel="canonical" href="https://joshscanlan.dev/" />
        <meta property="og:title" content="Josh Scanlan | Web Developer" />
        <meta property="og:url" content="https://joshscanlan.dev/" />
        <meta property="og:image" content="/images/profile_pic_large.jpeg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Web developer experienced in React/Redux, Next.js, Ethers, Styled Components, Tailwind CSS, Node, Express, and Solidity."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};
