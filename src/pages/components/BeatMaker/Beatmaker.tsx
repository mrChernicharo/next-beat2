import { useState } from 'react';
import { BeatMakerContainer } from '../../../styles/BeatMakerStyles';
import {
  IInstrument,
  IInstrumentRow,
  initialTrack,
  INote,
  ITrack,
  resetTrackNotes,
} from '../../../utils/initialValues';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { Track } from './Track/Track';

export default function BeatMaker() {
  const [track, setTrack] = useState<ITrack>(initialTrack);
  // const [loop, setLoop] = useState(null);

  function handleTempoSliderChange(val: number) {
    // console.log(val);
    setTrack({ ...track, tempo: val });
  }

  function handleBeatsChange(val: number) {
    // console.log("beats " + val);
    const trackCopy: ITrack = { ...track };
    trackCopy.instrumentRows.forEach((row, i) => {
      row.notes = resetTrackNotes(val, track.clicks, track.bars);
    });
    setTrack({ ...track, beats: val });
  }

  function handleClicksChange(val: number) {
    // console.log("clicks " + val);
    const trackCopy: ITrack = { ...track };
    trackCopy.instrumentRows.forEach((row, i) => {
      row.notes = resetTrackNotes(track.beats, val, track.bars);
    });
    setTrack({ ...trackCopy, clicks: val });
  }

  function handleBarsChange(val: number) {
    // console.log("clicks " + val);
    const trackCopy: ITrack = { ...track };
    trackCopy.instrumentRows.forEach((row, i) => {
      row.notes = resetTrackNotes(track.beats, track.clicks, val);
    });
    setTrack({ ...trackCopy, bars: val });
  }

  function handlePlay(val: boolean) {
    setTrack({ ...track, playing: val });
  }

  // muda o row todo
  function handleInstrumentRowsChange(val: IInstrumentRow[]) {
    setTrack({ ...track, instrumentRows: val });
  }

  // muda o intrument dentro do row
  function handleInstrumentChange(voice: string, image: string, instrIndex: number) {
    //
    const updatedRows = (instr: IInstrument, rowIndex: number) => {
      const rowsCopy = [...track.instrumentRows];
      rowsCopy[rowIndex].instrument = instr;
      return rowsCopy as IInstrumentRow[];
    };
    setTrack({ ...track, instrumentRows: updatedRows({ voice, image }, instrIndex) });
  }

  // muda nota dentro do row
  function handleNoteChange(note: INote, rowIndex: number, noteIndex: number) {
    console.log(note.play);
    //   setTrack({ ...track, instrumentRows: rows(val, index) });
  }

  return (
    <BeatMakerContainer>
      <span className="component-title">Beat Maker</span>
      <div>
        <ControlPanel
          tempo={track.tempo}
          clicks={track.clicks}
          beats={track.beats}
          bars={track.bars}
          instruments={track.instrumentRows}
          isPlaying={track.playing}
          setIsPlaying={handlePlay}
          setTempo={handleTempoSliderChange}
          setClicks={handleClicksChange}
          setBeats={handleBeatsChange}
          setBars={handleBarsChange}
          setInstruments={handleInstrumentRowsChange}
        />
      </div>
      <div>
        <Track
          tempo={track.tempo}
          clicks={track.clicks}
          beats={track.beats}
          bars={track.bars}
          instrumentRows={track.instrumentRows}
          isPlaying={track.playing}
          setInstrumentRows={handleInstrumentRowsChange}
          setInstrument={handleInstrumentChange}
          setNote={handleNoteChange}
        />
      </div>
      <div className="state-log">{JSON.stringify(track)}</div>
    </BeatMakerContainer>
  );
}
