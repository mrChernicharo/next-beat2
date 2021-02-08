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
  const beat = id => +id.substr(11, 1);
  const click = id => +id.substr(19, 1);
  const bar = id => +id.substr(25, 1);

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
          <div
          // className={beat(note.id) === 1 && click(note.id) === 1 ? 'bar-indicator' : ''}
          >
            <div className="notes-top">
              {beat(note.id) === 1 ? (
                <div className="click-indicator">{click(note.id)}</div>
              ) : (
                ''
              )}
              {beat(note.id) === 1 && click(note.id) === 1 ? (
                <div className="bar-inidcator"></div>
              ) : (
                ''
              )}
            </div>
            <Note
              id={note.id}
              key={i}
              position={i}
              rowIndex={rowIndex}
              play={note.play}
              changeNote={setisPlayNote}
            />
          </div>
        ))}
      </div>
    </InstrumentRowContainer>
  );
}
