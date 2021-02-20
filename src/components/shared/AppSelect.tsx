import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { AppSelectContainer, Overlay } from '../../styles/AppSelectStyles';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { toNormalCase, toNormalTitleCase } from '../../utils/functions';
interface ISelectProps {
  options: any[];
  lable: string;
  initialValue: any;
  setValue: Function;
  disabled: boolean;
}

const chevron = {
  open: { rotate: 180, y: -3, transition: { type: 'tween' } },
  close: { rotate: 0, y: 0, transition: { type: 'tween' } },
};

export default function AppSelect({
  lable,
  options,
  initialValue,
  setValue,
  disabled,
}: ISelectProps) {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const [isOpened, setIsOpened] = useState(false);
  const [animation, cycleAnimation] = useCycle('close', 'open');

  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    return cycleAnimation();
  }, [isOpened]);

  function handleOptionClick(val) {
    setSelectedValue(val);
    setIsOpened(false);
    console.log(options);

    return selectedValue;
  }

  function handleOverlayClick(e) {
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
        <div className="label-container">
          <label>
            <span>{lable}</span>
            <motion.div className="icon" variants={chevron} animate={animation}>
              <FiChevronUp />
            </motion.div>
          </label>
        </div>
        <div className="value" onClick={e => toggleOpened(e)}>
          {typeof selectedValue === 'string'
            ? toNormalTitleCase(selectedValue)
            : selectedValue}
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
                    {typeof option === 'string' ? toNormalCase(option) : option}
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
