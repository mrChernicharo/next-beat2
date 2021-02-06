import { useState } from 'react';
import { BeatMakerContainer } from '../../../styles/BeatMakerStyles';
import { initialTrack, ITrack } from '../../../utils/initialValues';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { Track } from './Track/Track';

export default function BeatMaker() {
  const [track, setTrack] = useState<ITrack>(initialTrack);
  const [isPlaying, setIsPlaying] = useState(false);
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

  return (
    <BeatMakerContainer>
      <p className="component-title">Beat Maker</p>
      <div className="state-log">{JSON.stringify(track)}</div>
      <div>
        <ControlPanel
          tempo={track.tempo}
          clicks={track.clicks}
          beats={track.beats}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setTempo={handleTempoSliderChange}
          setClicks={handleClicksChange}
          setBeats={handleBeatsChange}
        />
      </div>
      <div>
        <Track />
      </div>
    </BeatMakerContainer>
  );
}
