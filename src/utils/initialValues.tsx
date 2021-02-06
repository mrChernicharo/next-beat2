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
    'https://www.google.com.br/imgres?imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F937%2F711%2Fpng-clipart-a-snare-drum-etiquette-musical-instruments-drums.png&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-dxsqs&tbnid=PzKdSFfGGwTvuM&vet=12ahUKEwjPx8zz7NPuAhUMlBoKHddiAdMQMygOegUIARD7AQ..i&docid=XRtoWLxUpGEsdM&w=900&h=900&q=instruments%20drums&hl=en&ved=2ahUKEwjPx8zz7NPuAhUMlBoKHddiAdMQMygOegUIARD7AQ',
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
