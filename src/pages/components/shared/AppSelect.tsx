import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { AppSelectContainer, Overlay } from '../../../styles/AppSelectStyles';
interface ISelectProps {
  options: any[];
  lable: string;
  initialValue: any;
  setValue: Function;
}

export default function AppSelect({
  lable,
  options,
  initialValue,
  setValue,
}: ISelectProps) {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    // getAllSelects();
  }, [isOpened]);

  function handleOptionClick(val) {
    setSelectedValue(val);
    setIsOpened(false);
    return selectedValue;
  }

  function handleOverlayClick(e) {
    console.log('clicked overlay');
    console.log(e);
    setIsOpened(false);
  }

  function toggleOpened(e: BaseSyntheticEvent) {
    // console.log((e.bubbles = false));

    // setTimeout(() => {
    //   const thisLay = document.querySelector(`.select-overlay[id=${lable}]`);
    //   const allLays = document.querySelectorAll('.select-overlay');

    //   console.log('thisLay');
    //   console.log(thisLay);
    //   console.log('allLays');
    //   console.log(allLays);

    //   const els = [];
    //   allLays.forEach(lay => {
    //     (lay as any).style.visibility = 'hidden';
    //   });

    //   (thisLay as any).style.visibility = 'visible';
    // }, 0);

    setIsOpened(!isOpened);
  }

  return (
    <>
      <Overlay
        id={lable}
        className="select-overlay"
        onClick={e => handleOverlayClick(e)}
        opened={isOpened}
      />
      <AppSelectContainer opened={isOpened}>
        <div className="label">
          <label>{lable}</label>
        </div>
        <div className="value" onClick={e => toggleOpened(e)}>
          {selectedValue}
        </div>
        <>
          {isOpened ? (
            <div className="dropdown">
              {options.map(option => (
                <div
                  onClick={() => handleOptionClick(option)}
                  className="option"
                  key={option}
                >
                  {option}
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </>
      </AppSelectContainer>
    </>
  );
}
