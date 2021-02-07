import styled from 'styled-components';

export const TempoSliderContainer = styled.div`
  border: 1px solid;
  height: 64px;
  padding: 16px;

  /* input[type='range'] { */
  /* -webkit-appearance: none; */
  /* height: 0.5rem; */
  /* border-radius: 4px; */
  /* outline: none; */
  /* max-width: 7rem; */
  /* width: 200px; */
  /* background: transparent; */
  /* margin: 10px; */
  /* background: #464646; */
  /* background-image: -webkit-gradient(
      linear,
      right top,
      left bottom,
      color-stop(0.24, rgb(94, 117, 162)),
      color-stop(0.42, rgb(73, 125, 189)),
      color-stop(0.76, rgb(28, 58, 148))
    ); */
  /* } */
  /* 
  input[type='range']::-webkit-slider-runnable-track {
    height: 0.9rem;
    margin: 0;
    width: 100%;
    cursor: pointer;
    background: #464646;
  } */

  /*Chrome*/
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type='range'] {
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
        /* box-shadow: -90px 0 60px 70px #2b767e; */
        box-shadow: -86px 0px 36px 80px rgba(28, 58, 148);

        &:hover {
          background: #d8d7d7;
        }
      }
    }
    /** FF*/
    &::-moz-range-progress {
      background-color: #2b767e;
    }
    &::-moz-range-track {
      background-color: rgba(245, 245, 245, 0.494);
    }
    /* IE*/
    &::-ms-fill-lower {
      background-color: #2b767e;
    }
    &::-ms-fill-upper {
      background-color: rgba(245, 245, 245, 0.494);
    }
  }
`;
