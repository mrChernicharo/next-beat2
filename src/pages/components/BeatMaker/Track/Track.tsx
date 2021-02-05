import { TrackContainer } from '../../../../styles/TrackStyles';
import Instrument from './Instrument/Instrument';

export function Track() {
  return (
    <TrackContainer>
      <p className="component-title">Track</p>
      <div>
        <Instrument />
        <Instrument />
      </div>
    </TrackContainer>
  );
}
