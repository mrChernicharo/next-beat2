import { TrackContainer } from '../../../styles/TrackStyles';
import { IInstrumentRow } from '../../../utils/initialValues';
import InstrumentRow from './InstrumentRow/InstrumentRow';

interface ITrackProps {
  // tempo: number;
  // beats: number;
  // clicks: number;
  // bars: number;
  // isPlaying: boolean;
  // instrumentRows: IInstrumentRow[];
  // setInstrumentRows: Function;
  // setInstrument: Function;
  // setNote: Function;
}

export function Track({}: ITrackProps) {
  return (
    <TrackContainer>
      <span>Track</span>
      <div>
        {/* {instrumentRows.map((instrumentRow, i) => (
          <InstrumentRow />
        ))} */}
      </div>
    </TrackContainer>
  );
}
