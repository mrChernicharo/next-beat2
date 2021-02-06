import { TempoSliderContainer } from '../../../../../styles/TempoSliderStyles';

interface ITempoSliderProps {
  tempo: number;
  setTempo: Function;
}

export default function TempoSlider({ tempo, setTempo }: ITempoSliderProps) {
  return (
    <TempoSliderContainer>
      <span className="component-title">TempoSlider</span>
      <div>
        <span>{tempo}</span>
        <input
          id="tempo"
          type="range"
          min="20"
          max="400"
          value={tempo}
          onChange={e => setTempo(+e.target.value)}
        />
      </div>
    </TempoSliderContainer>
  );
}
