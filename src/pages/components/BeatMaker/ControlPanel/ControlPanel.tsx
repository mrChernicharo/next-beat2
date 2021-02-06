import React from 'react';
import { ControlPanelContainer } from '../../../../styles/ControlPanelStyles';
import { IInstrument, IInstrumentRow } from '../../../../utils/initialValues';
import { InstrumentsControl } from './InstrumentsControl/InstrumentsControl';
import { PlayPause } from './PlayPause/PlayPause';
import TempoSlider from './TempoSlider/TempoSlider';
import { TrackControl } from './TrackControl/TrackControl';

interface IControlPanelProps {
  tempo: number;
  beats: number;
  clicks: number;
  bars: number;
  instruments: IInstrumentRow[];
  isPlaying: boolean;
  setIsPlaying: Function;
  setTempo: Function;
  setClicks: Function;
  setBeats: Function;
  setBars: Function;
  setInstruments: Function;
}

export function ControlPanel({
  tempo,
  clicks,
  beats,
  bars,
  instruments,
  isPlaying,
  setIsPlaying,
  setTempo,
  setClicks,
  setBeats,
  setBars,
  setInstruments,
}: IControlPanelProps) {
  return (
    <ControlPanelContainer>
      <div className="header">
        <span className="component-title">ControlPanel</span>
      </div>
      <div className="body">
        <TempoSlider tempo={tempo} setTempo={setTempo} />
        <InstrumentsControl instruments={instruments} setInstruments={setInstruments} />
        <TrackControl
          clicks={clicks}
          beats={beats}
          bars={bars}
          setClicks={setClicks}
          setBeats={setBeats}
          setBars={setBars}
        />
        <PlayPause isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
    </ControlPanelContainer>
  );
}
