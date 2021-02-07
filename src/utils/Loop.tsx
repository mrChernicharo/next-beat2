import { ITrack } from './initialValues';

export function playLoop(track: ITrack) {
  let click = 1;
  let beat = 1;
  let bar = 1;
  let pos = 1;

  let loopInterval = setInterval(() => {
    console.log(updateUI(beat, click, bar));
    console.log(`pos -> ${pos}, beat${beat}, click${click}, bar${bar}`);

    if (beat !== track.beats) {
      beat++;
    } else if (beat === track.beats) {
      beat = 1;
      if (click !== track.clicks) {
        click++;
      } else if (click === track.clicks) {
        click = 1;

        if (bar !== track.bars) {
          bar++;
        } else if (bar === track.bars) {
          bar = 1;
        }
      }
    }

    if (click === 1 && beat === 1 && bar === 1) {
      pos = 1;
    } else {
      pos++;
    }
  }, Math.round(60_000 / (track.tempo * track.beats)));

  return loopInterval;
}

// export function killLoop(loop) {
//   setLoop(clearInterval(loop));
//   // clearUI();
// }

function updateUI(beat: number, click: number, bar: number) {
  //   console.log({ beat, click, pos });
  const currentNoteEl = document.querySelector(
    `id$=[-beat-${beat}-click-${click}-bar-${bar}]`
  );
  // const previousNoteEl = (beat, click, bar) => {
  //   if (click === 1 && beat === 1 && bar === 1) {
  //     // pega a última div
  //     return document.querySelector(`#click-${track.clicks}-beat-${track.beats}`);
  //   } else {
  //     // pega a anterior
  //     if (beat !== 1) {
  //       return document.querySelector(`#click-${click}-beat-${beat - 1}`);
  //     } else {
  //       if (bar !== 1) {
  //         return document.querySelector(`#click-${click}-beat-${beat - 1}`);
  //       }
  //       return document.querySelector(`#click-${click - 1}-beat-${track.beats}`);
  //     }
  //   }
  return currentNoteEl;
}
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
