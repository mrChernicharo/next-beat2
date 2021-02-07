import styled from 'styled-components';

export const InstrumentRowContainer = styled.div`
  border: 1px solid red;
  /* height: 100px; */
  padding: 4px;
  margin: 10px;
  display: flex;

  .instrument-container {
    border: 1px solid lightblue;
  }
  .notes-container {
    border: 1px solid lightblue;
    display: flex;
    overflow-x: scroll;
  }
`;
