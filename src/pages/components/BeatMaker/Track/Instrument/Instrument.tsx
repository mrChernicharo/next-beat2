import { InstrumentContainer } from '../../../../../styles/InstrumentStyles';
import Note from './Note/Note';

export default function Instrument() {
  return (
    <InstrumentContainer>
      <div className="component-title">Instrument</div>
      <div className="head">Image</div>
      <div className="body">
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </InstrumentContainer>
  );
}
