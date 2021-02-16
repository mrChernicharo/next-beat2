import styled from 'styled-components';

import { IInstrumentRow } from '../../../utils/interfaces';
import InstrumentRow from './InstrumentRow/InstrumentRow';

interface ITrackProps {
  tempo: number;
  beats: number;
  clicks: number;
  bars: number;
  isPlaying: boolean;
  instrumentRows: IInstrumentRow[];
  setInstrumentRows: Function;
  setInstrument: Function;
  setNote: Function;
}

export function Track({
  bars,
  beats,
  clicks,
  instrumentRows,
  isPlaying,
  tempo,
  setInstrumentRows,
  setInstrument,
  setNote,
}: ITrackProps) {
  return (
    <TrackContainer>
      <span>Track</span>
      <div>
        {instrumentRows.map((instrumentRow, i) => (
          <InstrumentRow
            key={i}
            rowIndex={i}
            setInstrument={setInstrument}
            setisPlayNote={setNote}
            instrument={instrumentRow.instrument}
            notes={instrumentRow.notes}
          />
        ))}
      </div>
    </TrackContainer>
  );
}

//****************************************************//

export const TrackContainer = styled.div`
  border: 1px solid;
  // 100%;
  height: 100%;
  padding: 4px;
`;
