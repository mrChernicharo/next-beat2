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
  volume: number;
  notes: INote[];
}

export interface ITrack {
  tempo: number;
  beats: number;
  clicks: number;
  bars: number;
  playing: boolean;
  clickOn: boolean;
  instrumentRows: IInstrumentRow[];
}

// export interface Note {
//   play: boolean;
//   id: string;
//   beat: number;
//   click: number;
//   bar: number;
// }

// export interface Instrument {
//   voice: string;
//   image: string;
// }

// export interface InstrumentRow {
//   instrument: Instrument;
//   notes: Note[];
// }

// export interface Track {
//   tempo: number;
//   beats: number;
//   clicks: number;
//   bars: number;
//   playing: boolean;
//   clickOn: boolean;
//   instrumentRows: InstrumentRow[];
// }
