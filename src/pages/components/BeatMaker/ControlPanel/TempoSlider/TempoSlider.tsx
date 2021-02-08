import { TempoSliderContainer } from '../../../../../styles/TempoSliderStyles';

interface ITempoSliderProps {
  tempo: number;
  setTempo: Function;
}

export default function TempoSlider({ tempo, setTempo }: ITempoSliderProps) {
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
            {tempo}
          </p>
        </div>

        <div className="slider-container">
          <input
            id="tempo"
            type="range"
            min="20"
            max="400"
            value={tempo}
            onChange={e => setTempo(+e.target.value)}
          />
        </div>
      </div>
    </TempoSliderContainer>
  );
}
