import { TrackControlContainer } from '../../../../../styles/TrackControlStyles';
import { appBeatOptions, appClickOptions } from '../../../../../utils/initialValues';
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
        initialValue={beats}
        setValue={setBeats}
      />

      <AppSelect
        lable={'clicks'}
        options={appClickOptions}
        initialValue={clicks}
        setValue={setClicks}
      />
    </TrackControlContainer>
  );
}
// key="beats" items={appBeatOptions}
