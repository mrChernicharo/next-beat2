import { TempoSliderContainer } from '../../../../../styles/TempoSliderStyles';

export default function TempoSlider() {
  return (
    <TempoSliderContainer>
      <p className="component-title">TempoSlider</p>
      <div>
        <input type="range" name="tempo" id="tempo" />
      </div>
    </TempoSliderContainer>
  );
}
