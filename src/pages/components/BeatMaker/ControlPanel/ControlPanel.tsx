import React from 'react';
import { ControlPanelContainer } from '../../../../styles/ControlPanelStyles';
import { InstrumentsControl } from './InstrumentsControl/InstrumentsControl';
import { PlayPause } from './PlayPause/PlayPause';
import TempoSlider from './TempoSlider/TempoSlider';
import { TrackControl } from './TrackControl/TrackControl';

interface IControlPanelProps {
  tempo: number;
  beats: number;
  clicks: number;
  isPlaying: boolean;
  setIsPlaying: Function;
  setTempo: Function;
  setClicks: Function;
  setBeats: Function;
}

export function ControlPanel({
  tempo,
  clicks,
  beats,
  isPlaying,
  setIsPlaying,
  setTempo,
  setClicks,
  setBeats,
}: IControlPanelProps) {
  return (
    <ControlPanelContainer>
      <div className="header">
        <span className="component-title">ControlPanel</span>
      </div>
      <div className="body">
        <TempoSlider tempo={tempo} setTempo={setTempo} />
        <InstrumentsControl />
        <TrackControl
          clicks={clicks}
          beats={beats}
          setClicks={setClicks}
          setBeats={setBeats}
        />
        <PlayPause />
      </div>
    </ControlPanelContainer>
  );
}
