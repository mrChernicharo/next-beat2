import Head from 'next/head';
import React, { useContext } from 'react';
import BeatMaker from './components/BeatMaker/Beatmaker';
import Header from './components/Header/Header';
import SEO from './components/SEO/SEO';

export default function Home() {
  return (
    <div>
      <SEO />
      <header>
        <Header />
      </header>
      <main>
        <BeatMaker />
      </main>
    </div>
  );
}
