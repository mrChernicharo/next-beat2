import { InstrumentContainer } from '../../../../../styles/InstrumentStyles';
import {
  appVoices,
  IInstrument,
  instrumentImgs,
} from '../../../../../utils/initialValues';
import Image from 'next/image';
import AppSelect from '../../../../shared/AppSelect';
import { useEffect, useState } from 'react';

interface IInstrumentProps {
  rowIndex: number;
  voice: string;
  image: string;
  updateInstrument: Function;
}

export default function Instrument({
  voice,
  image,
  rowIndex,
  updateInstrument,
}: IInstrumentProps) {
  const [vox, setVox] = useState(voice);
  const [img, setImg] = useState(image);

  useEffect(() => {
    // console.log(rowIndex);
    setImg(instrumentImgs[vox]);
    updateInstrument(vox, img, rowIndex);
  }, [vox]);

  function setNewInstrument(selectedVox) {
    setVox(selectedVox);
  }

  return (
    <InstrumentContainer>
      <img src={img} width={30} height={30} />

      <AppSelect
        disabled={false}
        setValue={setNewInstrument}
        lable="instrument"
        initialValue={voice}
        options={appVoices}
      />
    </InstrumentContainer>
  );
}
