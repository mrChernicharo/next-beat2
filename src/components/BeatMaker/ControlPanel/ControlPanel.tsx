import styled from 'styled-components';

import { IInstrument, IInstrumentRow } from '../../../utils/interfaces';
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
    </ControlPanelContainer>
  );
}

//****************************************************//

export const ControlPanelContainer = styled.div`
  border: 1px solid;
  height: 100%;
  padding: 16px;
  display: grid;
  grid-template-columns: 122px 130px 130px 100px 130px 230px;
  grid-template-rows: 68px 60px;
  grid-template-areas:
    'play tempo tempo click instrument track'
    'play . . . . .';

  @media screen and (max-width: 1000px) {
    grid-template-columns: 122px 130px 130px 100px;
    grid-template-rows: 62px 68px;
    grid-template-areas:
      'play tempo tempo click'
      'play instrument track track';
  }
  @media screen and (max-width: 550px) {
  }
`;
