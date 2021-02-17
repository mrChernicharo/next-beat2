import styled from 'styled-components';
import { INote } from '../utils/interfaces';

interface INoteWrapperProps {
  noteItem: INote;
}

export const InstrumentRowContainer = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
  display: flex;

  .instrument-container {
    border-right: 1px solid #ccc;
    box-shadow: 1px 2px 19px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
  }
  .notes-container {
    /* border: 1px solid lightblue; */
    padding: 0 6px 0 0;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;

    > :last-child {
      padding-right: 8px;
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
    }
  }
`;

export const NoteWrapper = styled.div`
  height: 60px;
  padding-left: ${(props: INoteWrapperProps) =>
    props.noteItem.id.substr(11, 1) === '1' && props.noteItem.id.substr(19, 1) === '1'
      ? '12px'
      : props.noteItem.id.substr(11, 1) === '1'
      ? '4px'
      : ''};

  .notes-top {
    height: 40px;
  }
  .click-indicator {
    text-align: end;
    padding-left: 4px;
    z-index: 4;
    display: inline;
    position: sticky;
  }

  .bar-inidcator {
    border-left: 3px solid #777;
    height: 60px;
    position: relative;
    background: transparent;
    z-index: -2;
    transform: translate(-7px, -20px);
  }
`;
