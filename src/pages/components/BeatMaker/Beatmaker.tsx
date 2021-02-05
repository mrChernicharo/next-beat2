import { useState } from "react";

export interface INote {
  play: boolean;
  beat?: number;
  click?: number;
}

export interface Track {
  intrument: string;
  beats: number;
  clicks: number;
  notes: INote[];
  playing: boolean;
}

export default function BeatMaker() {
  const [tracks, setTracks] = useState<Track[]>();

  return <div>Beat Maker</div>;
}
// const beatOptions = [2, 3, 4, 6];
// const clickOptions = [1, 2, 3, 4];
// const initialNotes: INote[] = [
// 	{ play: false, click: 1, beat: 1 },
// 	{ play: false, click: 1, beat: 2 },
// 	{ play: false, click: 2, beat: 1 },
// 	{ play: false, click: 2, beat: 2 },
// 	{ play: false, click: 3, beat: 1 },
// 	{ play: false, click: 3, beat: 2 },
// 	{ play: false, click: 4, beat: 1 },
// 	{ play: false, click: 4, beat: 2 },
// ];
// const initialTrack: Track = {
// 	beats: 2,
// 	clicks: 4,
// 	intrument: "hi-hat",
// 	notes: initialNotes,
// 	playing: false,
// };
