import { InstrumentContainer } from '../../../../../styles/InstrumentStyles';
import Note from './Note/Note';

export default function Instrument() {
  return (
    <InstrumentContainer>
      <span>Instrument</span>
      <div>
        <Note />
      </div>
    </InstrumentContainer>
  );
}
