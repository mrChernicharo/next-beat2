import styled from 'styled-components';

export const TempoSliderContainer = styled.div`
  border: 1px solid;
  height: 64px;
  padding: 4px;
  display: flex;
  flex-direction: column;

  .top {
    border: 1px solid;

    .title-container {
      width: 100%;
      display: flex;
      justify-content: center;
      /* border: 1px solid; */
    }
  }
  .bottom {
    border: 1px solid;

    > .tempo-container {
      border: 1px solid;
      border: 1px solid;
      width: 40px;
      height: 42px;

      > p {
        font-size: 10px;

        > span.bpm {
          font-size: 22px;
          font-family: 'MusicalSymbols';
          font-weight: bold;
          margin-right: 4px;
        }
      }
    }
    .slider-container {
      border: 1px solid;
    }
  }

  input[type='range'] {
    @media screen and (-webkit-min-device-pixel-ratio: 0) {
      overflow: hidden;
      width: 160px;
      -webkit-appearance: none;
      background-color: rgba(245, 245, 245, 0.494);
      outline: none;
      height: 10px;
      border-radius: 8px;

      &::-webkit-slider-runnable-track {
        height: 10px;
        -webkit-appearance: none;
        color: #13bba4;
        margin-top: -1px;
      }

      &::-webkit-slider-thumb {
        width: 30px;
        -webkit-appearance: none;
        height: 10px;
        cursor: ew-resize;
        background: #fff;
        border-radius: 8px;
        box-shadow: -86px 0px 36px 80px rgba(28, 58, 148);

        &:hover {
          background: #d8d7d7;
        }
      }
      /** FF*/
      &::-moz-range-progress {
        background-color: rgba(28, 58, 148);
      }
      &::-moz-range-track {
        background-color: rgba(245, 245, 245, 0.494);
      }
      /* IE*/
      &::-ms-fill-lower {
        background-color: rgba(28, 58, 148);
      }
      &::-ms-fill-upper {
        background-color: rgba(245, 245, 245, 0.494);
      }
    }
  }
`;
