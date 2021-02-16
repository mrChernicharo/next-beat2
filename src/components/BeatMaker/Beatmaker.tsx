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
import { clearUI, killLoop, playLoop } from '../../utils/Loop';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { Track } from './Track/Track';

export default function BeatMaker() {
  const [track, setTrack] = useState<ITrack>(initialTrack);
  const [loop, setLoop] = useState(null);

  useEffect(() => {
    if (track.playing) {
      setLoop(playLoop(track));
    } else {
      killLoop();
    }
  }, [track.playing]);

  useEffect(() => {
    if (track.playing) {
      killLoop();
      setLoop(playLoop(track));
    }
  }, [
    track.tempo,
    track.clickOn,
    track.instrumentRows,
    track.bars,
    track.beats,
    track.clicks,
  ]);

  function handleTempoSliderChange(tempo: number) {
    setTrack({ ...track, tempo });
  }

  function handleBeatsChange(beats: number) {
    setTrack({ ...resetTrackNotes(track, beats, track.clicks, track.bars) });
  }

  function handleClicksChange(clicks: number) {
    setTrack({ ...resetTrackNotes(track, track.beats, clicks, track.bars) });
  }

  function handleBarsChange(bars: number) {
    // console.log(bars);
    setTrack({ ...resetTrackNotes(track, track.beats, track.clicks, bars) });
  }

  function handlePlay(playing: boolean) {
    setTrack({ ...track, playing });
  }

  // muda o row todo
  function handleInstrumentRowsChange(val: IInstrumentRow[]) {
    setTrack({ ...track, instrumentRows: val });
  }

  // muda o intrument dentro do row
  const handleInstrumentChange = useCallback(
    (voice: string, image: string, instrIndex: number) => {
      //
      const updatedRows = (instr: IInstrument, rowIndex: number) => {
        const rowsCopy = [...track.instrumentRows];
        rowsCopy[rowIndex].instrument = instr;
        return rowsCopy as IInstrumentRow[];
      };

      setTrack({ ...track, instrumentRows: updatedRows({ voice, image }, instrIndex) });
    },
    [track]
  );

  // muda nota dentro do row
  const handleNoteChange = useCallback(
    // console.log('handleNoteChange');
    (play: boolean, rowIndex: number, noteIndex: number) => {
      setTrack({ ...updateNotes(track, play, rowIndex, noteIndex) });
    },
    [track]
  );

  function handleClickOn(on: boolean) {
    setTrack({ ...track, clickOn: on });
  }

  return (
    <BeatMakerContainer>
      <span>Beat Maker</span>
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
          setClickOn={handleClickOn}
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
      {/* <div className="state-log">{JSON.stringify(track)}</div> */}
    </BeatMakerContainer>
  );
}
