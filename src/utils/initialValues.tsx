export interface INote {
  play: boolean;
}

export interface IInstrument {
  instrument: string;
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

export const appSounds = ['snare', 'bass-kick', 'hi-hat', 'crash'];

export const initialTrack: ITrack = {
  beats: 2,
  clicks: 4,
  instruments: [{ instrument: appSounds[0], notes: Array(8).fill({ play: false }) }],
  playing: false,
  tempo: 120,
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
