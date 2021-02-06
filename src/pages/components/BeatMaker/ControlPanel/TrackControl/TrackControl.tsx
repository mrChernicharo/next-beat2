import { TrackControlContainer } from '../../../../../styles/TrackControlStyles';

interface ITrackControlProps {
  clicks: number;
  beats: number;
  setClicks: Function;
  setBeats: Function;
}

export function TrackControl({ clicks, beats, setClicks, setBeats }: ITrackControlProps) {
  return (
    <TrackControlContainer>
      <p className="component-title">TrackControl</p>
      <div>🎮</div>
    </TrackControlContainer>
  );
}
