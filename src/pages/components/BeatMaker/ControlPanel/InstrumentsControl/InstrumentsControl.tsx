import {
  InstrumentsControlContainer,
  InstrumentsControlBtn,
} from '../../../../../styles/InstrumentsControlStyles';
import {
  appVoices,
  IInstrument,
  IInstrumentRow,
  instrumentImgs,
} from '../../../../../utils/initialValues';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { clearUI } from '../../../../../utils/Loop';

interface IInstrumentControlProps {
  instruments: IInstrumentRow[];
  setInstruments: Function;
}

export function InstrumentsControl({
  instruments,
  setInstruments,
}: IInstrumentControlProps) {
  const [appInstruments, setAppInstruments] = useState(instruments);

  useEffect(() => {
    console.log(appInstruments);
    setInstruments(appInstruments);
  }, [appInstruments]);
  // useEffect(() => {}, [])

  function addInstrument() {
    if (appInstruments.length < 6) {
      const newInstr: IInstrumentRow = {
        instrument: { voice: appVoices[2], image: instrumentImgs.shake },
        notes: Array(appInstruments[0].notes.length).fill({ play: false, id: '' }),
      };
      setAppInstruments([...appInstruments, newInstr]);
    }
  }

  function removeInstrument() {
    if (appInstruments.length > 1) {
      const copy = [...appInstruments];
      copy.pop();

      setAppInstruments([...copy]);
    }
  }

  return (
    <InstrumentsControlContainer>
      <div className="title-container">
        <span>Instruments</span>
      </div>
      <div className="btn-container">
        <InstrumentsControlBtn add>
          <FiPlus onClick={() => addInstrument()} />
        </InstrumentsControlBtn>
        <InstrumentsControlBtn remove>
          <FiMinus onClick={() => removeInstrument()} />
        </InstrumentsControlBtn>
      </div>
    </InstrumentsControlContainer>
  );
}
