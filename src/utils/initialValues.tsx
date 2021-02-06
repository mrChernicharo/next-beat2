export interface INote {
  play: boolean;
}

export interface IInstrument {
  voice: string;
  image: string;
}

export interface IInstrumentRow {
  instrument: IInstrument;
  notes: INote[];
}

export interface ITrack {
  tempo: number;
  beats: number;
  clicks: number;
  bars: number;
  playing: boolean;
  instrumentRows: IInstrumentRow[];
}

export const appBeatOptions = [2, 3, 4, 6];
export const appClickOptions = [1, 2, 3, 4, 5, 6, 7];
export const appBarOptions = [1, 2, 3, 4];

export const appVoices = ['snare', 'bassKick', 'shake', 'hiHat', 'crash'];
export const instrumentImgs = {
  snare:
    'https://www.gretschdrums.com/sites/default/files/drums/snares/usa-snares/GAS542514-GB.png',
  bassKick:
    'https://i.pinimg.com/originals/d2/19/0f/d2190fa3af0509799ada2dd695dd9fbd.jpg',
  hiHat: 'https://images-na.ssl-images-amazon.com/images/I/71KOqhGS7bL._AC_SX425_.jpg',
  crash: 'https://sc1.musik-produktiv.com/pic-010119595xl/zildjian-i-family-19-crash.jpg',
  shake: 'https://www.normans.co.uk/blog/wp-content/uploads/2018/10/maracas-300x300.jpg',
};

export const initialTrack: ITrack = {
  tempo: 120,
  beats: 2,
  clicks: 4,
  bars: 1,
  playing: false,
  instrumentRows: [
    {
      instrument: {
        voice: appVoices[0],
        image: instrumentImgs.snare,
      },
      notes: Array(2 * 4 * 1).fill({ play: false }),
    },
    {
      instrument: {
        voice: appVoices[1],
        image: instrumentImgs.bassKick,
      },
      notes: Array(2 * 4 * 1).fill({ play: false }),
    },
  ],
};

export const resetTrackNotes = (
  track: ITrack,
  beats: number,
  clicks: number,
  bars: number
) => {
  // TODO melhorar algorítimo pra aprovitar notas clicadas anteriormente
  const trackCopy: ITrack = Object.assign(track, { beats, clicks, bars });

  function resetNotes(bts, clcks, brs): INote[] {
    const trackLength = bts * clcks * brs;

    return Array(trackLength).fill({ play: false } as INote);
  }
  console.log(trackCopy);

  trackCopy.instrumentRows.forEach((row, i) => {
    row.notes = resetNotes(beats, clicks, bars);
  });

  console.log(trackCopy);

  return trackCopy;
};
