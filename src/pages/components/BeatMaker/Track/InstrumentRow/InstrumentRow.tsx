import { InstrumentRowContainer } from '../../../../../styles/InstrumentRowStyles';
import { IInstrument, INote } from '../../../../../utils/initialValues';
import Note from './Note/Note';
import Instrument from './Instrument/Instrument';

export interface IInstrumentRowProps {
  instrument: IInstrument;
  notes: INote[];
}

export default function InstrumentRow({ instrument, notes }: IInstrumentRowProps) {
  return (
    <InstrumentRowContainer>
      <div className="component-title"></div>
      <div className="head">Image</div>
      <div className="body">
        <Instrument />
        {/* <Note />
        <Note />
        <Note />
        <Note /> */}
      </div>
    </InstrumentRowContainer>
  );
}
