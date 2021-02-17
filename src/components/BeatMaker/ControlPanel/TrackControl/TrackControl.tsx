import styled from 'styled-components';

import {
  appBarOptions,
  appBeatOptions,
  appClickOptions,
} from '../../../../utils/initialValues';
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

//****************************************************//

// key="beats" items={appBeatOptions}

export const TrackControlContainer = styled.div`
  border: 1px solid #444;

  display: grid;
  grid-area: track;
  height: 69px;
  width: 230px;
  padding: 4px;

  .title {
    border: 1px solid;
    border-bottom: none;
    display: flex;
    justify-content: center;

    span {
      line-height: 16px;
    }
  }
  .container {
    border: 1px solid;
    display: flex;
    justify-content: center;
    padding: 4px 4px 0px;
  }
`;
