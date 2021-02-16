import React from 'react';
import { ControlPanelContainer } from '../../../styles/ControlPanelStyles';
import { IInstrument, IInstrumentRow } from '../../../utils/initialValues';
import ClickControl from './ClickControl/ClickControl';
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
  setClickOn: Function;
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
  setClickOn,
}: IControlPanelProps) {
  return (
    <ControlPanelContainer>
      <div className="header">
        <span>ControlPanel</span>
      </div>
      <div className="body">
        <PlayPause isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <TempoSlider tempo={tempo} setTempo={setTempo} />
        <InstrumentsControl
          disabled={isPlaying}
          instruments={instruments}
          setInstruments={setInstruments}
        />
        <ClickControl toggleClick={setClickOn} />
        <TrackControl
          clicks={clicks}
          beats={beats}
          bars={bars}
          isPlaying={isPlaying}
          setClicks={setClicks}
          setBeats={setBeats}
          setBars={setBars}
        />
      </div>
    </ControlPanelContainer>
  );
}
