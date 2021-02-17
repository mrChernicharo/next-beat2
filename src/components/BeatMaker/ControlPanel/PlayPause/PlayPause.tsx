import styled from 'styled-components';

import { FiPlay, FiPause, FiCheck } from 'react-icons/fi';
import { useEffect, useState } from 'react';

interface IPlayPauseProps {
  isPlaying: boolean;
  setIsPlaying: Function;
}

export function PlayPause({ isPlaying, setIsPlaying }: IPlayPauseProps) {
  const [playing, setPlaying] = useState(isPlaying);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // console.log(playing);
    setIsPlaying(playing);
  }, [playing]);

  function playToggle() {
    setPlaying(!playing);
  }

  function hoverIcon() {
    setHover(true);
  }
  function leaveIcon() {
    setHover(false);
  }

  return (
    <PlayPauseContainer>
      <svg width="0" height="0">
        <linearGradient id="purple-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#7a6ded" offset="0%" />
          <stop stopColor="#591885" offset="100%" />
        </linearGradient>
      </svg>

      <div className="btn-container">
        <PlayPauseBtn key="play" onClick={() => playToggle()}>
          <h1>
            {playing ? (
              <FiPause
                onMouseEnter={() => hoverIcon()}
                onMouseLeave={() => leaveIcon()}
                style={
                  hover
                    ? { fill: '#fff', stroke: '#fff' }
                    : { fill: 'url(#purple-gradient)', stroke: 'url(#purple-gradient)' }
                }
              />
            ) : (
              <FiPlay
                onMouseEnter={() => hoverIcon()}
                onMouseLeave={() => leaveIcon()}
                style={
                  hover
                    ? { fill: '#fff', stroke: '#fff' }
                    : { fill: 'url(#purple-gradient)', stroke: 'url(#purple-gradient)' }
                }
              />
            )}
          </h1>
        </PlayPauseBtn>
      </div>
    </PlayPauseContainer>
  );
}

//****************************************************//

export const PlayPauseContainer = styled.div`
  border: 1px solid;
  height: 122px;
  padding: 4px;
  display: grid;
  grid-area: play;
`;

export const PlayPauseBtn = styled.button`
  background: transparent;
  color: #fff;
  font-size: 56px;
  border: none;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  outline: none;
  cursor: pointer;
  transition: 0.4s;

  h1 {
    line-height: 68px;

    :hover {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
    }

    :active {
      box-shadow: inset 0 0 10px 0 rgba(255, 255, 255, 0.4);
    }
  }
`;
