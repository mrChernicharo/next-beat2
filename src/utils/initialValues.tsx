export interface INote {
  play: boolean;
  id: string;
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

const idMaker = (row, beat, click, bar) => {
  return `row-${row + 1}-beat-${beat}-click-${click}-bar-${bar}`;
};

export const initialTrack: ITrack = {
  tempo: 120,
  beats: 2,
  clicks: 4,
  bars: 2,
  playing: false,
  instrumentRows: [
    {
      instrument: {
        voice: appVoices[0],
        image: instrumentImgs.snare,
      },
      notes: Array(2 * 4 * 2).fill({ play: false, id: idMaker(0, 2, 4, 2) }),
    },
    {
      instrument: {
        voice: appVoices[1],
        image: instrumentImgs.bassKick,
      },
      notes: Array(2 * 4 * 2).fill({ play: false, id: idMaker(1, 2, 4, 2) }),
    },
  ],
};

export const resetTrackNotes = (
  track: ITrack,
  beats: number,
  clicks: number,
  bars: number
) => {
  console.log('resetTrackNotes');

  // TODO melhorar algorítimo pra aprovitar notas clicadas anteriormente
  const trackCopy: ITrack = Object.assign(track, { beats, clicks, bars });

  function resetNotes(bts, clcks, brs): INote[] {
    const trackLength = bts * clcks * brs;

    return Array(trackLength).fill({ play: false, id: '' } as INote);
  }

  trackCopy.instrumentRows.forEach((row, i) => {
    row.notes = resetNotes(beats, clicks, bars);
  });

  return trackCopy;
};

export const updateNotes = (
  track: ITrack,
  notePlay: boolean,
  rowI: number,
  noteI: number
) => {
  // console.log('updateNote');
  const trackCopy = { ...track };
  const trackLength = track.beats * track.clicks * track.bars;
  const idsRow = [];
  const newNotes = [];
  let z = 0;

  // AQUI Q TUDO ACONTECE!
  createIds(rowI, track);
  for (let i = 1; i < trackLength + 1; i++) {
    let beat: number, click: number, bar: number;

    beat = i % track.beats === 0 ? track.beats : i % track.beats;
    bar = Math.ceil(i / (trackLength / track.bars));

    i % track.beats === 1 ? z++ : '';
    click = z % track.clicks ? z % track.clicks : track.clicks;

    idsRow.push(idMaker(rowI, beat, click, bar));
  }
  // console.log(idsRow);

  trackCopy.instrumentRows[rowI].notes.forEach((note, i) => {
    let shouldPlay = note.play;
    if (i === noteI) {
      shouldPlay = notePlay;
    }
    newNotes.push({ id: idsRow[i], play: shouldPlay });
  });
  const newRow: IInstrumentRow = { ...trackCopy.instrumentRows[rowI], notes: newNotes };

  trackCopy.instrumentRows[rowI] = newRow;

  return { ...trackCopy } as ITrack;
};

function createIds(rowI, track) {
  let z = 0;
  const idsRow = [];
  const trackLength = track.beats * track.clicks * track.bars;

  for (let i = 1; i < trackLength + 1; i++) {
    let beat: number, click: number, bar: number;

    beat = i % track.beats === 0 ? track.beats : i % track.beats;
    bar = Math.ceil(i / (trackLength / track.bars));

    i % track.beats === 1 ? z++ : '';
    click = z % track.clicks ? z % track.clicks : track.clicks;

    idsRow.push(idMaker(rowI, beat, click, bar));
  }
  return idsRow;
}
