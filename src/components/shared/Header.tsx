import React from 'react';
import styled from 'styled-components';
// import { HeaderContainer } from '../../styles/HeaderStyles';

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Next Beat Maker</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  border: 1px solid;
  padding: 16px;

  h1 {
    text-align: center;
  }
`;
