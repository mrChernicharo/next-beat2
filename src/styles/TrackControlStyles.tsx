import styled from 'styled-components';

export const TrackControlContainer = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 4px;

  .title {
    border: 1px solid;
    justify-content: center;

    span {
      line-height: 16px;
    }
  }
  .container {
    padding: 4px 4px 0px;
    border: 1px solid;
  }
`;
