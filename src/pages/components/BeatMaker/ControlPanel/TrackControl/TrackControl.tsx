import { useEffect, useState } from 'react';
import { TrackControlContainer } from '../../../../../styles/TrackControlStyles';
import {
  appBarOptions,
  appBeatOptions,
  appClickOptions,
} from '../../../../../utils/initialValues';
import AppSelect from '../../../shared/AppSelect';

interface ITrackControlProps {
  clicks: number;
  beats: number;
  bars: number;
  setClicks: Function;
  setBeats: Function;
  setBars: Function;
  isPlaying: boolean;
}

export function TrackControl({
  clicks,
  beats,
  bars,
  setClicks,
  setBeats,
  setBars,
  isPlaying,
}: ITrackControlProps) {
  // const [play, setPlay] = useState(isPlaying);

  return (
    <TrackControlContainer>
      <div className="title">
        <span>TrackControl</span>
      </div>
      <div className="container">
        <AppSelect
          disabled={isPlaying}
          lable={'beats'}
          options={appBeatOptions}
          initialValue={beats}
          setValue={setBeats}
        />

        <AppSelect
          disabled={isPlaying}
          lable={'clicks'}
          options={appClickOptions}
          initialValue={clicks}
          setValue={setClicks}
        />

        <AppSelect
          disabled={isPlaying}
          lable={'bars'}
          options={appBarOptions}
          initialValue={bars}
          setValue={setBars}
        />
      </div>
    </TrackControlContainer>
  );
}
// key="beats" items={appBeatOptions}
