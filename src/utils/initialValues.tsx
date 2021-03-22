import { IInstrumentRow, INote, ITrack } from './interfaces';

export const appBeatOptions = [2, 3, 4, 6];
export const appClickOptions = [2, 3, 4, 5, 6, 7];
export const appBarOptions = [1, 2, 3, 4];

export const appVoices = ['hiHat', 'snare', 'bassKick', 'shake', 'crash', 'sideStick'];
export const instrumentImgs = {
  hiHat: '../static/images/hi-hat.png',
  snare: '../static/images/snare.png',
  bassKick: '../static/images/bass-kick.png',
  crash: '../static/images/crash.png',
  shake: '../static/images/maracas.png',
  sideStick: '../static/images/snare.png',
};

const initialBeats = 4;
const initialClicks = 4;
const initialBars = 1;

const idMaker = (row, beat, click, bar) => {
  return `row-${row + 1}-beat-${beat}-click-${click}-bar-${bar}`;
};

export const initialTrack = () => {
  const initial = {
    tempo: 120,
    beats: initialBeats,
    clicks: initialClicks,
    bars: initialBars,
    playing: false,
    clickOn: false,
    instrumentRows: [
      {
        volume: 60,
        instrument: {
          voice: appVoices[0],
          image: instrumentImgs.hiHat,
        },
        notes: Array(initialBeats * initialClicks * initialBars).fill({
          play: false,
          id: idMaker(0, 4, 4, 1),
        }),
      },
      {
        volume: 60,
        instrument: {
          voice: appVoices[1],
          image: instrumentImgs.snare,
        },
        notes: Array(initialBeats * initialClicks * initialBars).fill({
          play: false,
          id: idMaker(1, 4, 4, 1),
        }),
      },
      {
        volume: 60,
        instrument: {
          voice: appVoices[2],
          image: instrumentImgs.bassKick,
        },
        notes: Array(initialBeats * initialClicks * initialBars).fill({
          play: false,
          id: idMaker(2, 4, 4, 1),
        }),
      },
    ],
  } as ITrack;

  const initialPattern = initial.instrumentRows.map(row => {
    return {
      instrument: row.instrument,
      volume: row.volume,
      notes: row.notes.map((note, i) => {
        if (row.instrument.voice === 'hiHat') {
          if (i % 2 === 0) {
            return { ...note, play: true };
          }
        }
        if (row.instrument.voice === 'snare') {
          if (i === 4 || i === 12) {
            return { ...note, play: true };
          }
        }

        if (row.instrument.voice === 'bassKick') {
          if (i % 8 === 0) {
            return { ...note, play: true };
          }
        }

        return note;
      }),
    };
  });

  return { ...initial, instrumentRows: initialPattern };
};

export const appSounds = {
  crash: `../static/sounds/crash.mp3`,
  bassKick: `../static/sounds/bassKick.mp3`,
  snare: `../static/sounds/snare.mp3`,
  sideStick: `../static/sounds/sideStick.mp3`,
  hiHat: `../static/sounds/hi-hat.mp3`,
  ride: '../static/sounds/ride.mp3',
  rideBell: '../static/sounds/ride-bell.mp3',
  shake: `../static/sounds/shake.mp3`,
  cowbell1: '../static/sounds/cuba_cowbell.mp3',
  cowbell2: '../static/sounds/light_cowbell.mp3',
  woodblock: '../static/sounds/wood_block.mp3',
  timbale1: '../static/sounds/timbale.mp3',
  timbale2: '../static/sounds/timbale2.mp3',
  click: '../static/sounds/tick.mp3',
};

export const resetTrackNotes = (
  track: ITrack,
  beats: number,
  clicks: number,
  bars: number
) => {
  // console.log('resetTrackNotes');

  // TODO melhorar algorítimo pra aprovitar notas clicadas anteriormente
  const trackCopy: ITrack = Object.assign(track, { beats, clicks, bars });

  function resetNotes(i, bts, clcks, brs): INote[] {
    const trackLength = bts * clcks * brs;
    const notes = [];

    const ids = createIds(i, track);

    ids.forEach(id => notes.push({ id, play: false }));

    return notes;
  }

  trackCopy.instrumentRows.forEach((row, i) => {
    row.notes = resetNotes(i, beats, clicks, bars);
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
