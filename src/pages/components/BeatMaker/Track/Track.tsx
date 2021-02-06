import { TrackContainer } from '../../../../styles/TrackStyles';
import Instrument from './Instrument/Instrument';

export function Track() {
  return (
    <TrackContainer>
      <span className="component-title">Track</span>
      <div>
        <Instrument />
        <Instrument />
      </div>
    </TrackContainer>
  );
}
