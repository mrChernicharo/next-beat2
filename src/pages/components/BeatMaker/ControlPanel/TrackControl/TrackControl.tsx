import { TrackControlContainer } from '../../../../../styles/TrackControlStyles';
import { appBeatOptions, appClickOptions } from '../../../../../utils/initialValues';
import AppSelect from '../../../shared/AppSelect';

interface ITrackControlProps {
  clicks: number;
  beats: number;
  bars: number;
  setClicks: Function;
  setBeats: Function;
  setBars: Function;
}

export function TrackControl({
  clicks,
  beats,
  bars,
  setClicks,
  setBeats,
  setBars,
}: ITrackControlProps) {
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

      <AppSelect
        lable={'bars'}
        options={appClickOptions}
        initialValue={bars}
        setValue={setBars}
      />
    </TrackControlContainer>
  );
}
// key="beats" items={appBeatOptions}
