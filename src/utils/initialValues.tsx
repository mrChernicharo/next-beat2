export interface INote {
  play: boolean;
}

export interface IInstrument {
  voice: string;
  image: string;
  notes: INote[];
}

export interface ITrack {
  tempo: number;
  beats: number;
  clicks: number;
  playing: boolean;
  instruments: IInstrument[];
}

export const appBeatOptions = [2, 3, 4, 6];
export const appClickOptions = [1, 2, 3, 4];

export const appVoices = {
  snare: 'snare',
  bassKick: 'bass kick',
  hiHat: 'hi hat',
  crash: 'crash',
};
export const instrumentImgs = {
  snare:
    'https://www.google.com.br/imgres?imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F937%2F711%2Fpng-clipart-a-snare-drum-etiquette-musical-instruments-drums.png&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-dxsqs&tbnid=PzKdSFfGGwTvuM&vet=12ahUKEwjPx8zz7NPuAhUMlBoKHddiAdMQMygOegUIARD7AQ..i&docid=XRtoWLxUpGEsdM&w=900&h=900&q=instruments%20drums&hl=en&ved=2ahUKEwjPx8zz7NPuAhUMlBoKHddiAdMQMygOegUIARD7AQ',
  bassKick:
    'https://i.pinimg.com/originals/d2/19/0f/d2190fa3af0509799ada2dd695dd9fbd.jpg',
  hiHat: 'https://images-na.ssl-images-amazon.com/images/I/71KOqhGS7bL._AC_SX425_.jpg',
  crash: 'https://sc1.musik-produktiv.com/pic-010119595xl/zildjian-i-family-19-crash.jpg',
};

export const initialTrack: ITrack = {
  tempo: 120,
  beats: 2,
  clicks: 4,
  playing: false,
  instruments: [
    {
      voice: appVoices.snare,
      image: instrumentImgs.snare,
      notes: Array(8).fill({ play: false }),
    },
    {
      voice: appVoices.bassKick,
      image: instrumentImgs.bassKick,
      notes: Array(8).fill({ play: false }),
    },
  ],
};

// const initialNotes: INote[] = [
//   { play: false, click: 1, beat: 1 },
//   { play: false, click: 1, beat: 2 },
//   { play: false, click: 2, beat: 1 },
//   { play: false, click: 2, beat: 2 },
//   { play: false, click: 3, beat: 1 },
//   { play: false, click: 3, beat: 2 },
//   { play: false, click: 4, beat: 1 },
//   { play: false, click: 4, beat: 2 },
// ];
// const initialTrack1: ITrack = {
//   beats: 2,
//   clicks: 4,
//   intrument: instruments[0],
//   notes: initialNotes,
//   playing: false,
// };

// const initialTrack2: ITrack = {
//   beats: 2,
//   clicks: 4,
//   intrument: instruments[1],
//   notes: initialNotes,
//   playing: false,
// };

// export const initialTracks: ITrack[] = [initialTrack1, initialTrack2];
