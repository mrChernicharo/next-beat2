import { useState } from 'react';
import { BeatMakerContainer } from '../../../styles/BeatMakerStyles';
import { initialTrack, ITrack } from '../../../utils/initialValues';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { Track } from './Track/Track';

export default function BeatMaker() {
  const [track, setTrack] = useState<ITrack>(initialTrack);
  const [tempo, setTempo] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [loop, setLoop] = useState(null);

  function handleTempoSlider(val: number) {
    // console.log(val);
    setTempo(val);
  }

  function handleBeatsChange(val: number) {
    // console.log("beats " + val);
  }

  function handleClicksChange(val: number) {
    // console.log("clicks " + val);
  }

  return (
    <BeatMakerContainer>
      <p className="component-title">Beat Maker</p>
      <div>
        <ControlPanel />
      </div>
      <div>
        <Track />
      </div>
    </BeatMakerContainer>
  );
}
