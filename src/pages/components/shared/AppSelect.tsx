import { useEffect, useState } from 'react';
import { AppSelectContainer } from '../../../styles/AppSelectStyles';
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

  function handleOptionClick(val) {
    console.log(val);
    setSelectedValue(val);
    setIsOpened(false);
    return selectedValue;
  }

  function toggleOpened() {
    setIsOpened(!isOpened);
  }

  return (
    <AppSelectContainer>
      <div className="label">
        <label>{lable}</label>
      </div>
      <div className="value" onClick={() => toggleOpened()}>
        {selectedValue || 2}
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
  );
}
