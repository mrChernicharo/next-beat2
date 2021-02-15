import styled from 'styled-components';

export const TempoSliderContainer = styled.div`
  border: 1px solid;
  width: 260px;
  height: 64px;
  padding: 4px;
  display: flex;
  flex-direction: column;

  .top {
    border: 1px solid;
    border-bottom: none;

    span {
      line-height: 16px;
    }

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
      /* border: 1px solid; */
      height: 32px;
      max-width: 60px;
      min-width: 60px;
      justify-content: end;
      padding: 0 0px 0 6px;

      > p {
        font-size: 18px;
        line-height: 32px;

        > span.bpm {
          font-size: 18px;
          font-family: 'MusicalSymbols';
          font-weight: bold;
          margin-right: 8px;
        }
      }
    }
    .slider-container {
      width: 100%;
      border-left: 1px solid;
      padding: 10px 0 0 0;
      justify-content: center;
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