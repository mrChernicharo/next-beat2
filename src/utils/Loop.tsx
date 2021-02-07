import { ITrack } from './initialValues';

export function playLoop(track: ITrack) {
  const totalBeats = track.beats;
  const totalclicks = track.clicks;
  const totalBars = track.bars;
  const trackLength = totalBeats * totalclicks;

  let click = 1;
  let beat = 1;
  let bar = 1;
  let pos = 1;

  let loopInterval = setInterval(() => {
    // updateUI(beat, click, pos);
    console.log(pos, beat, click, bar);

    if (beat !== totalBeats) {
      beat++;
    } else if (beat === totalBeats) {
      beat = 1;
      if (click !== totalclicks) {
        click++;
      } else if (click === totalclicks) {
        click = 1;

        if (bar !== totalBars) {
          bar++;
        } else if (bar === totalBars) {
          bar = 1;
        }
      }
    }

    if (click === 1 && beat === 1 && bar === 1) {
      pos = 1;
    } else {
      pos++;
    }
  }, Math.round(60_000 / (track.tempo * totalBeats)));

  return loopInterval;
}

function killLoop() {
  // setLoop(clearInterval(loop));
  // clearUI();
}

// function updateUI(beat: number, click: number, pos: number) {
//   console.log({ beat, click, pos });
//   const curentNoteEl = document.querySelector(`#click-${click}-beat-${beat}`);
//   const previousNoteEl = (beat, click) => {
//     if (click === 1 && beat === 1) {
//       // pega a última div
//       return document.querySelector(`#click-${track.clicks}-beat-${track.beats}`);
//     } else {
//       // pega a anterior
//       if (beat !== 1) {
//         return document.querySelector(`#click-${click}-beat-${beat - 1}`);
//       } else {
//         return document.querySelector(`#click-${click - 1}-beat-${track.beats}`);
//       }
//     }
//   };

//   curentNoteEl.classList.add('current-note');
//   previousNoteEl(beat, click).classList.remove('current-note');
//   // console.log(curentNoteEl);
// }
// function clearUI() {
//   const remainingEl = document.querySelector('.current-note');

//   if (remainingEl) {
//     // console.log(remainingEl);
//     remainingEl.classList.remove('current-note');
//   }
// }
