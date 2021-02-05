import Head from "next/head";
import React from "react";
import BeatMaker from "./components/BeatMaker/Beatmaker";
import Header from "./components/Header/Header";
import SEO from "./components/SEO";

export default function Home() {
  return (
    <>
      <SEO />
      <header>
        <Header />
      </header>
      <main>
        <BeatMaker />
      </main>
    </>
  );
}
