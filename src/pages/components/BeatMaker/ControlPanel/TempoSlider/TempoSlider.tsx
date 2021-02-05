import { TempoSliderContainer } from '../../../../../styles/TempoSliderStyles';

export default function TempoSlider() {
  return (
    <TempoSliderContainer>
      <span>TempoSlider</span>
      <div>
        <input type="range" name="tempo" id="tempo" />
      </div>
    </TempoSliderContainer>
  );
}
