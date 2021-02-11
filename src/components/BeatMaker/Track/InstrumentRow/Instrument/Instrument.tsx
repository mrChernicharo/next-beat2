import { InstrumentContainer } from '../../../../../styles/InstrumentStyles';
import {
  appVoices,
  IInstrument,
  instrumentImgs,
} from '../../../../../utils/initialValues';
import Image from 'next/image';
import AppSelect from '../../../../shared/AppSelect';
import { useCallback, useEffect, useState } from 'react';

interface IInstrumentProps {
  rowIndex: number;
  voice: string;
  image: string;
  updateInstrument: Function;
}

export default function Instrument() {
  useEffect(() => {}, []);

  function setNewInstrument(selectedVox) {}

  return (
    <InstrumentContainer>
      <img src={'../img'} width={30} height={30} />

      <AppSelect
        disabled={false}
        initialValue={'hiHat'}
        lable={'instrument'}
        options={appVoices}
        setValue={() => {}}
      />
    </InstrumentContainer>
  );
}
