export interface Note {
  id: string;
  play: boolean;
  beat: number;
  click: number;
  bar: number;
}

export interface Instrument {
  voice: string;
  image: string;
}

export interface InstrumentRow {
  instrument: Instrument;
  notes: Note[];
}

export interface Track {
  tempo: number;
  beats: number;
  clicks: number;
  bars: number;
  playing: boolean;
  instrumentRows: InstrumentRow[];
}
