import { useState } from 'react';
import { BeatMakerContainer } from '../../../styles/BeatMakerStyles';
import { ITrack } from '../../../utils/initialValues';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { Track } from './Track/Track';

export default function BeatMaker() {
  return (
    <BeatMakerContainer>
      <span>Beat Maker</span>
      <div>
        <ControlPanel />
      </div>
      <div>
        <Track />
      </div>
    </BeatMakerContainer>
  );
}
