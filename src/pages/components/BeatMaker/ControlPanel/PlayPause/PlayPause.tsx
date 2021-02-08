import { PlayPauseContainer, PlayPauseBtn } from '../../../../../styles/PlayPauseStyles';
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
          {/* <h1>{playing ? '⑊' : '⎶'}</h1> */}
          {/* <h1>{playing ? '◻︎' : '▷'}</h1> */}
        </PlayPauseBtn>
      </div>
    </PlayPauseContainer>
  );
}
