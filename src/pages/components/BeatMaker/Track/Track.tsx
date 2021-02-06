import { TrackContainer } from '../../../../styles/TrackStyles';
import { IInstrumentRow } from '../../../../utils/initialValues';
import InstrumentRow from './InstrumentRow/InstrumentRow';

interface ITrackProps {
  tempo: number;
  beats: number;
  clicks: number;
  bars: number;
  isPlaying: boolean;
  instrumentRows: IInstrumentRow[];
}

export function Track({
  bars,
  beats,
  clicks,
  instrumentRows,
  isPlaying,
  tempo,
}: ITrackProps) {
  return (
    <TrackContainer>
      <span className="component-title">Track</span>
      <div>
        {instrumentRows.map(instrumentRow => (
          <InstrumentRow
            instrument={instrumentRow.instrument}
            notes={instrumentRow.notes}
          />
        ))}
      </div>
    </TrackContainer>
  );
}
