import { useState } from 'react';
import { BeatMakerContainer } from '../../../styles/BeatMakerStyles';
import {
  IInstrument,
  IInstrumentRow,
  initialTrack,
  INote,
  ITrack,
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
    setTrack({ ...track, beats: val });
  }

  function handleClicksChange(val: number) {
    // console.log("clicks " + val);
    setTrack({ ...track, clicks: val });
  }

  function handleBarsChange(val: number) {
    // console.log("clicks " + val);
    setTrack({ ...track, bars: val });
  }

  function handlePlay(val: boolean) {
    setTrack({ ...track, playing: val });
  }

  // muda o row todo
  function handleInstrumentRowsChange(val: IInstrumentRow[]) {
    setTrack({ ...track, instrumentRows: val });
  }

  // muda o intrument dentro do row
  function handleInstrumentChange({ voice, image, instrIndex }) {
    console.log(voice);
    console.log(image);
    console.log(instrIndex);
    // //
    // const updatedRows = (instr: IInstrument, rowIndex: number) => {
    //   const rowsCopy = [...track.instrumentRows];
    //   rowsCopy[rowIndex].instrument = instr;
    //   return rowsCopy as IInstrumentRow[];
    // };
    // setTrack({ ...track, instrumentRows: updatedRows(instrument, instrIndex) });
  }

  function handleNoteChange(note: INote, index: number) {
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
