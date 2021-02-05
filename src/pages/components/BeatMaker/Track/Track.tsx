import { TrackContainer } from '../../../../styles/TrackStyles';
import Instrument from './Instrument/Instrument';

export function Track() {
  return (
    <TrackContainer>
      <span>Track</span>
      <div>
        <Instrument />
        <Instrument />
      </div>
    </TrackContainer>
  );
}
