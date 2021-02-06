import { TrackControlContainer } from '../../../../../styles/TrackControlStyles';
import { appBeatOptions } from '../../../../../utils/initialValues';
import AppSelect from '../../../shared/AppSelect';

interface ITrackControlProps {
  clicks: number;
  beats: number;
  setClicks: Function;
  setBeats: Function;
}

export function TrackControl({ clicks, beats, setClicks, setBeats }: ITrackControlProps) {
  return (
    <TrackControlContainer>
      <div>
        <span className="component-title">TrackControl</span>
      </div>
      <AppSelect
        lable={'beats'}
        options={appBeatOptions}
        initialValue="2"
        setValue={setBeats}
      />
    </TrackControlContainer>
  );
}
// key="beats" items={appBeatOptions}
