import styled from 'styled-components';

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

export function InstrumentsControl({
  instruments,
  setInstruments,
  disabled,
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

//****************************************************//

// interface IControlProps {
//   disabled: boolean;
// }

interface IBtnProps {
  // disabled: boolean;
  add?: boolean;
  remove?: boolean;
}

export const InstrumentsControlContainer = styled.div`
  border: 1px solid;
  height: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  width: 120px;

  .title-container {
    border: 1px solid;
    border-bottom: none;
    justify-content: center;

    span {
      line-height: 16px;
    }
  }

  .btn-container {
    border: 1px solid;
    padding: 4px;
  }
`;
export const InstrumentsControlBtn = styled.button`
  width: 50%;
  background: transparent;
  color: #fff;
  font-size: 18px;
  border: 1px solid;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  outline: none;
  cursor: pointer;

  :hover {
    background: rgba(255, 255, 255, 0.1);
  }

  :active {
    box-shadow: inset 0 0 10px 0 rgba(255, 255, 255, 0.4);
  }
  margin-right: ${(props: IBtnProps) => (props.add ? '4px' : '')};
`;
