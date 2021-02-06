import { PlayPauseContainer, PlayPauseBtn } from '../../../../../styles/PlayPauseStyles';
import { FiPlay, FiPause } from 'react-icons/fi';
import { useEffect, useState } from 'react';

interface IPlayPauseProps {
  isPlaying: boolean;
  setIsPlaying: Function;
}

export function PlayPause({ isPlaying, setIsPlaying }: IPlayPauseProps) {
  const [playing, setPlaying] = useState(isPlaying);

  useEffect(() => {
    console.log(playing);
    setIsPlaying(playing);
  }, [playing]);

  function playToggle() {
    setPlaying(!playing);
  }

  return (
    <PlayPauseContainer>
      <span className="component-title">PlayPause</span>
      <div className="btn-container">
        <PlayPauseBtn onClick={() => playToggle()}>
          {playing ? <FiPause /> : <FiPlay />}
        </PlayPauseBtn>
      </div>
    </PlayPauseContainer>
  );
}
