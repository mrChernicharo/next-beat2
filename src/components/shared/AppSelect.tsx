import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppSelectContainer, Overlay } from '../../styles/AppSelectStyles';
interface ISelectProps {
  options: any[];
  lable: string;
  initialValue: any;
  setValue: Function;
  disabled: boolean;
}

export default function AppSelect({
  lable,
  options,
  initialValue,
  setValue,
  disabled,
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
    // console.log('clicked overlay');
    // console.log(e);
    setIsOpened(false);
  }

  function toggleOpened(e: BaseSyntheticEvent) {
    setIsOpened(!isOpened);
  }

  return (
    <>
      <Overlay
        disabled={disabled}
        id={lable}
        className="select-overlay"
        onClick={e => handleOverlayClick(e)}
        opened={isOpened}
      />
      <AppSelectContainer disabled={disabled} opened={isOpened}>
        <div className="label">
          <label>{lable}</label>
        </div>
        <div className="value" onClick={e => toggleOpened(e)}>
          {selectedValue}
        </div>
        <>
          <AnimatePresence>
            {isOpened && (
              <motion.div
                className="dropdown"
                initial={{ y: -40, scaleY: 0 }}
                animate={{ y: 0, scaleY: 1 }}
                exit={{ y: -40, scaleY: 0, opacity: 0 }}
              >
                {options.map(option => (
                  <div
                    onClick={() => handleOptionClick(option)}
                    className="option"
                    key={option}
                  >
                    {option}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      </AppSelectContainer>
    </>
  );
}
