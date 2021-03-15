import styled from 'styled-components';

import { appVoices, instrumentImgs } from '../../../../../utils/initialValues';
import { IInstrument } from '../../../../../utils/interfaces';
import Image from 'next/image';
import AppSelect from '../../../../shared/AppSelect';
import { memo, useCallback, useEffect, useState } from 'react';

interface IInstrumentProps {
  rowIndex: number;
  voice: string;
  image: string;
  updateInstrument: Function;
}

function Instrument({ voice, image, rowIndex, updateInstrument }: IInstrumentProps) {
  const [vox, setVox] = useState(voice);
  const [img, setImg] = useState(image);

  useEffect(() => {
    setImg(instrumentImgs[vox]);
    updateInstrument(vox, img, rowIndex);
    console.log(vox, img, rowIndex);
  }, [vox, img]);

  function setNewInstrument(selectedVox) {
    setVox(selectedVox);
  }

  return (
    <InstrumentContainer>
      <img src={img} width={40} height={40} />

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

export default Instrument;
//****************************************************//

export const InstrumentContainer = styled.div`
  width: 132px;
  padding: 2px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    border: 1px solid;
    padding: 4px;
    margin-bottom: 4px;
    background-image: linear-gradient(to bottom, #224, #448);
  }
`;
