import { useState } from 'react';
import { BeatMakerContainer } from '../../../styles/BeatMakerStyles';
import { IInstrument, initialTrack, ITrack } from '../../../utils/initialValues';
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

  function handleInstrumentsChange(val: IInstrument[]) {
    setTrack({ ...track, instruments: val });
  }

  return (
    <BeatMakerContainer>
      <span className="component-title">Beat Maker</span>
      <div className="state-log">{JSON.stringify(track)}</div>
      <div>
        <ControlPanel
          tempo={track.tempo}
          clicks={track.clicks}
          beats={track.beats}
          bars={track.bars}
          instruments={track.instruments}
          isPlaying={track.playing}
          setIsPlaying={handlePlay}
          setTempo={handleTempoSliderChange}
          setClicks={handleClicksChange}
          setBeats={handleBeatsChange}
          setBars={handleBarsChange}
          setInstruments={handleInstrumentsChange}
        />
      </div>
      <div>
        <Track />
      </div>
    </BeatMakerContainer>
  );
}
