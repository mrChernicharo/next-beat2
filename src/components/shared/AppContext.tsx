import { createContext } from 'react';
import { appVoices, instrumentImgs } from '../../utils/initialValues';
import { Instrument, InstrumentRow, Note, Track } from '../../utils/interfaces';

const initialNotes = Array(4 * 2 * 2).fill({
  beat: 1,
  click: 1,
  bar: 1,
  play: false,
  id: `row-1-beat-1-click-1-bar-1`,
});

const appContext = createContext({
  playing: false,
  tempo: 120,
  beats: 4,
  clicks: 2,
  bars: 2,
  instrumentRows: [
    {
      instrument: { voice: appVoices[3], image: instrumentImgs.hiHat },
      notes: [...initialNotes],
    },
    {
      instrument: { voice: appVoices[1], image: instrumentImgs.bassKick },
      notes: [...initialNotes],
    },
  ],
  togglePlaying: (v: boolean) => {},
  changeTempo: (n: number) => {},
  changeBeats: (n: number) => {},
  changeCLicks: (n: number) => {},
  changeBars: (n: number) => {},
  changeRows: (r: InstrumentRow[]) => {},
  changeInstrument: (i: Instrument, r: number) => {},
  changeNote: (n: Note) => {},
});

export default appContext;
