import styled from 'styled-components';

export const InstrumentRowContainer = styled.div`
  border: 1px solid #ccc;
  padding: 4px;
  margin: 10px;
  display: flex;

  .instrument-container {
    border: 1px solid lightblue;
  }
  .notes-container {
    border: 1px solid lightblue;
    width: 100%;
    display: flex;
    align-items: center;
    overflow-x: auto;

    .notes-top {
      height: 40px;
    }
    /* .note-wrapper { */
    //
    border: 1px solid;
    .click-indicator {
      /* margin: 0 2px; */
    }

    .bar-inidcator {
      border-left: 3px solid green;
      height: 75px;
      transform: translate(0px, -24px);
    }
  }
  ::-webkit-scrollbar {
    height: 8px;
    background-color: rgb(73, 72, 72);
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(245, 245, 245, 0.494);
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    transition: background-image 0.3s;

    background-image: -webkit-gradient(
      linear,
      right top,
      left bottom,
      color-stop(0.24, rgb(94, 117, 162)),
      color-stop(0.42, rgb(73, 125, 189)),
      color-stop(0.76, rgb(28, 58, 148))
    );
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-image: -webkit-gradient(
      linear,
      right top,
      left bottom,
      color-stop(0.24, rgb(119, 142, 187)),
      color-stop(0.42, rgb(98, 150, 214)),
      color-stop(0.76, rgb(53, 83, 173))
    );
    /* } */
    /* } */
  }
`;
