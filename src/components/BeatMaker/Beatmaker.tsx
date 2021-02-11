import React, { useCallback, useContext, useEffect, useState } from 'react';
import { BeatMakerContainer } from '../../styles/BeatMakerStyles';
import {
  IInstrument,
  IInstrumentRow,
  initialTrack,
  INote,
  ITrack,
  resetTrackNotes,
  updateNotes,
} from '../../utils/initialValues';
import { clearUI, playLoop } from '../../utils/Loop';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { Track } from './Track/Track';

export default function BeatMaker() {
  useEffect(() => {}, []);

  // useEffect(() => {
  //   console.log('hey');
  // }, [track]);
  function handleTempoSliderChange(tempo: number) {}

  function handleBeatsChange(beats: number) {}

  function handleClicksChange(clicks: number) {}

  function handleBarsChange(bars: number) {
    // console.log(bars);
  }

  function handlePlay(playing: boolean) {}

  // muda o row todo
  function handleInstrumentRowsChange(val: IInstrumentRow[]) {}

  // muda o intrument dentro do row
  function handleInstrumentChange(voice: string, image: string, instrIndex: number) {}

  // muda nota dentro do row
  function handleNoteChange(play: boolean, rowIndex: number, noteIndex: number) {
    // console.log('handleNoteChange');
  }
  // useCallback(() => {}, []);

  ///

  // useCallback(() => {}, []);

  const killLoop = () => {};

  // const overlay = useContext(Play);

  return (
    <BeatMakerContainer>
      <span>Beat Maker</span>
      <div>
        <ControlPanel />
      </div>
      <div>
        <Track />
      </div>
      <div className="state-log"></div>
    </BeatMakerContainer>
  );
}
