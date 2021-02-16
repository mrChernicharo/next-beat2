import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IClickControlProps {
  toggleClick: Function;
}

export default function ClickControl({ toggleClick }: IClickControlProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => toggleClick(checked), [checked]);

  function handleSlideToggle() {
    setChecked(!checked);
  }
  return (
    <Container>
      <div className="top">
        <span>Click</span>
      </div>
      <div className="bottom">
        <label className="switch">
          <input type="checkbox" onChange={handleSlideToggle} />
          <span className="slider"></span>
        </label>
      </div>
    </Container>
  );
}

//****************************************************//

const Container = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  padding: 4px;
  width: 100px;
  height: 57px;

  .top {
    border: 1px solid;
    display: flex;
    justify-content: center;

    span {
      line-height: 16px;
    }
  }

  .bottom {
    border: 1px solid;
    border-top: none;
    display: flex;
    justify-content: center;
    padding: 4px;

    .switch {
      position: relative;
      display: inline-block;
      width: 44px;
      height: 20px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 28px;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 14px;
      width: 14px;
      left: 4px;
      bottom: 3px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
      box-shadow: 1px 0px 1px 0px rgba(0, 0, 0, 0.6);
    }

    input:checked + .slider {
      background-image: linear-gradient(45deg, rgb(33, 150, 243), rgb(28, 58, 148));
      /* background-color: rgb(33, 150, 243); */
    }

    input:focus + .slider {
      box-shadow: 0px 0px 4px 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(22px);
      -ms-transform: translateX(22px);
      transform: translateX(22px);
    }
  }
`;
// background-image: linear-gradient(45deg, rgb(33, 150, 243), rgb(28, 58, 148));

// rgb(94,117,162), rgb(73,125,189), rgb(28,58,148)
