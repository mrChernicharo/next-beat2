import Head from 'next/head';
import React, { useContext } from 'react';
import BeatMaker from './components/BeatMaker/Beatmaker';
import Header from './components/Header/Header';
import SEO from './components/SEO/SEO';

export const OverlayCtx = React.createContext(false);

export default function Home() {
  const overlay = useContext(OverlayCtx);

  return (
    <div>
      <SEO />
      <header>
        <Header />
      </header>
      <main>
        <OverlayCtx.Provider value={overlay}>
          <BeatMaker />
        </OverlayCtx.Provider>
      </main>
    </div>
  );
}
