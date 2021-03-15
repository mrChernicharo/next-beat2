import React from 'react';
import styled from 'styled-components';
// import { HeaderContainer } from '../../styles/HeaderStyles';

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Real Beat Maker</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  /* border: 1px solid; */
  padding: 16px;

  h1 {
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 520px) {
    h1 {
      /* margin: 0 0 0 16%; */
    }
  }
`;
