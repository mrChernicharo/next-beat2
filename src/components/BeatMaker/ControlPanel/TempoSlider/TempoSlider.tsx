import { useCallback, useState } from 'react';
import { TempoSliderContainer } from '../../../../styles/TempoSliderStyles';

interface ITempoSliderProps {
  tempo: number;
  setTempo: Function;
}

export default function TempoSlider({ tempo, setTempo }: ITempoSliderProps) {
  const [appTempo, setAppTempo] = useState(tempo);

  const handleTempoChange = useCallback(
    val => {
      console.log(val);
      setAppTempo(val);
      setTempo(appTempo);
    },
    [appTempo]
  );

  return (
    <TempoSliderContainer>
      <div className="top">
        <div className="title-container">
          <span>Tempo</span>
        </div>
      </div>

      <div className="bottom">
        <div className="tempo-container">
          <p>
            <span className="bpm">q</span>
            {appTempo}
          </p>
        </div>

        <div className="slider-container">
          <input
            id="tempo"
            type="range"
            min="20"
            max="400"
            value={appTempo}
            onChange={e => handleTempoChange(+e.target.value)}
          />
        </div>
      </div>
    </TempoSliderContainer>
  );
}
