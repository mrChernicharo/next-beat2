import { InstrumentRowContainer } from '../../../../../styles/InstrumentRowStyles';
import { IInstrument, INote } from '../../../../../utils/initialValues';
import Note from './Note/Note';
import Instrument from './Instrument/Instrument';
import { useEffect, useState } from 'react';

export interface IInstrumentRowProps {
  rowIndex: number;
  instrument: IInstrument;
  notes: INote[];
  setInstrument: Function;
  setisPlayNote: Function;
}

export default function InstrumentRow({
  rowIndex,
  instrument,
  notes,
  setInstrument,
  setisPlayNote,
}: IInstrumentRowProps) {
  // const [rowInstrument, setRowInstrument] = useState(instrument);

  // useEffect(() => {
  //   console.log(rowInstrument);
  //   console.log(rowIndex);
  // }, [rowInstrument]);

  return (
    <InstrumentRowContainer>
      <div className="instrument-container">
        <Instrument
          rowIndex={rowIndex}
          voice={instrument.voice}
          image={instrument.image}
          updateInstrument={setInstrument}
        />
      </div>
      <div className="notes-container">
        {notes.map((note, i) => (
          <Note
            position={i}
            rowIndex={rowIndex}
            play={note.play}
            changeNote={setisPlayNote}
          />
        ))}
      </div>
    </InstrumentRowContainer>
  );
}
