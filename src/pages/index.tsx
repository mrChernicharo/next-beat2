import Head from 'next/head';
import React, { useContext } from 'react';
import BeatMaker from '../components/BeatMaker/Beatmaker';
import Header from '../components/Header/Header';
import SEO from '../components/SEO/SEO';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <SEO />
      <header>
        <Header />
      </header>
      <main>
        <BeatMaker />
      </main>
    </Container>
  );
}

const Container = styled.div`
  @media screen and (max-width: 520px) {
    main,
    header {
      width: calc(100% + 120px);
    }
  }
`;
