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
  return `row-${row}-beat-${beat}-click-${click}-bar-${bar}`;
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
      notes: Array(2 * 4 * 1).fill({ play: false, id: idMaker(0, 2, 4, 1) }),
    },
    {
      instrument: {
        voice: appVoices[1],
        image: instrumentImgs.bassKick,
      },
      notes: Array(2 * 4 * 1).fill({ play: false, id: idMaker(1, 2, 4, 1) }),
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

    return Array(trackLength).fill({ play: false, id: '' } as INote);
  }

  trackCopy.instrumentRows.forEach((row, i) => {
    row.notes = resetNotes(beats, clicks, bars);
  });

  return trackCopy;
};

export const updateNote = (track: ITrack, play: boolean, rowI: number, noteI: number) => {
  console.log('updateNote');
  const trackCopy = { ...track };
  const trackLength = track.beats * track.clicks * track.bars;
  const idsRow = [];
  const newRow = [];
  console.log(play, rowI + 1, noteI);

  // AQUI Q TUDO ACONTECE!
  let z = 0;
  for (let i = 1; i < trackLength + 1; i++) {
    let beat: number, click: number, bar: number;
    console.log(i);

    beat = i % track.beats === 0 ? track.beats : i % track.beats;
    bar = Math.ceil(i / (trackLength / track.bars));

    i % track.bars === 1 ? z++ : '';
    click = z % track.clicks ? z % track.clicks : track.clicks;

    idsRow.push(idMaker(rowI, beat, click, bar));
  }
  console.log(idsRow);

  // trackCopy.instrumentRows[rowI].notes.forEach((note, i) => {
  //   let id = idsRow[i];

  //   if (i === noteI) {
  //     note.play = play;
  //   }
  //   newRow.push({ id, play: note.play });
  // });
  // console.log(trackCopy);
  // console.log(newRow);

  return { ...trackCopy } as ITrack;
};

//
// let b, c, bar, len
// b = 4
// c = 7
// bar = 2
// len = b * c * bar
// let z = 0

// arr = []
// for(let i = 1; i <= len; i++) {
//   let fb,fc,fBar

//   fb = i % b === 0 ? b : i % b
//   fBar = Math.ceil(i / (len/bar))

//   if(i % b === 1) {z++}
//   fc = (z % c ? z% c : c )

//   // console.table()
//   arr.push({a: fb, b: fc, c: fBar})
//   // arr.push(`${i}-${fb}-${c}-${bar}`)
// }
// console.table(arr)
// console.log(arr)

// ISSO FUNCIONA TÁ?

// const newNotes: INote[] = [];
// trackCopy.instrumentRows[rowI].notes.forEach((note, i) => {
//   newNotes.push(note);
// });

// trackCopy.instrumentRows[rowI].notes[noteI] = {
//   play,
//   id: trackCopy.instrumentRows[rowI].notes[noteI].id,
// };
