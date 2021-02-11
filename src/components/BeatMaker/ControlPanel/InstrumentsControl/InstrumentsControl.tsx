import {
  InstrumentsControlContainer,
  InstrumentsControlBtn,
} from '../../../../styles/InstrumentsControlStyles';
import {
  appVoices,
  IInstrument,
  IInstrumentRow,
  instrumentImgs,
} from '../../../../utils/initialValues';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { clearUI } from '../../../../utils/Loop';

interface IInstrumentControlProps {
  instruments: IInstrumentRow[];
  setInstruments: Function;
  disabled: boolean;
}

export function InstrumentsControl() {
  useEffect(() => {}, []);
  const disabled = false;
  // useEffect(() => {}, [])

  function addInstrument() {}

  function removeInstrument() {}

  return (
    <InstrumentsControlContainer>
      <div className="title-container">
        <span>Instruments</span>
      </div>
      <div className="btn-container">
        <InstrumentsControlBtn disabled={disabled} add>
          <FiPlus onClick={() => addInstrument()} />
        </InstrumentsControlBtn>
        <InstrumentsControlBtn disabled={disabled} remove>
          <FiMinus onClick={() => removeInstrument()} />
        </InstrumentsControlBtn>
      </div>
    </InstrumentsControlContainer>
  );
}
