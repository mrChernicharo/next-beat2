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
  // useCallback(() => {}, []);

  function handleTempoSliderChange(tempo: number) {}
  function handleBeatsChange(beats: number) {}
  function handleClicksChange(clicks: number) {}
  function handleBarsChange(bars: number) {}
  function handlePlay(playing: boolean) {}
  function handleInstrumentRowsChange(val: IInstrumentRow[]) {}
  function handleInstrumentChange(voice: string, image: string, instrIndex: number) {}
  function handleNoteChange(play: boolean, rowIndex: number, noteIndex: number) {}
  const killLoop = () => {};

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
