import { appSounds, ITrack } from './initialValues';

let loopInterval;
let totalBeats;
let totalClicks;
let totalBars;

export function playLoop(track: ITrack) {
  let click = 1;
  let beat = 1;
  let bar = 1;
  let pos = 1;
  totalBeats = track.beats;
  totalClicks = track.clicks;
  totalBars = track.bars;

  function play(tempo) {
    loopInterval = setTimeout(() => {
      updateUI(beat, click, bar);
      // console.log(`pos -> ${pos}, beat${beat}, click${click}, bar${bar}`);
      playSounds(track, pos);

      if (beat !== totalBeats) {
        beat++;
      } else if (beat === totalBeats) {
        beat = 1;
        if (click !== totalClicks) {
          click++;
        } else if (click === totalClicks) {
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
      play(track.tempo);
    }, Math.round(60_000 / (tempo * totalBeats)));
  }

  play(track.tempo);
  return loopInterval;
}

export function killLoop() {
  clearTimeout(loopInterval);
  clearUI();
}

function updateUI(beat: number, click: number, bar: number) {
  // console.log('updateUI');
  // console.log(beat, click, bar);
  const currentNoteEl = document.querySelectorAll(
    `div[id$='-beat-${beat}-click-${click}-bar-${bar}']`
  );

  const previousNoteEl = (beat, click, bar) => {
    let selector;
    if (click === 1 && beat === 1 && bar === 1) {
      // pega a última div
      selector = `div[id$='-beat-${totalBeats}-click-${totalClicks}-bar-${totalBars}']`;
    } else {
      // pega div anterior
      if (beat !== 1) {
        selector = `div[id$='-beat-${beat - 1}-click-${click}-bar-${bar}']`;
      } else {
        if (click !== 1) {
          selector = `div[id$='-beat-${totalBeats}-click-${click - 1}-bar-${bar}']`;
        } else {
          if (bar !== 1) {
            selector = `div[id$='-beat-${totalBeats}-click-${totalClicks}-bar-${
              bar - 1
            }']`;
          }
        }
      }
    }
    return document.querySelectorAll(selector);
  };
  // console.log('currentNoteEl');
  // console.log(currentNoteEl);
  // console.log('previousNoteEl');
  // console.log(previousNoteEl(beat, click, bar));
  // console.log();

  previousNoteEl(beat, click, bar).forEach(el => el.classList.remove('current-note'));
  currentNoteEl.forEach(el => el.classList.add('current-note'));
  //   previousNoteEl(beat, click).classList.remove('current-note');
}

export function clearUI() {
  const remainingEl = document.querySelectorAll('.current-note');
  if (remainingEl) {
    // console.log(remainingEl);
    remainingEl.forEach(el => el.classList.remove('current-note'));
  }
}

export function playSounds(track: ITrack, pos: number) {
  const position = pos - 1;
  const soundBatch = [];
  // console.log();
  console.log(position);
  //
  track.instrumentRows.forEach(row => {
    row.notes[position].play ? soundBatch.push(row.instrument.voice) : '';
  });

  if (track.clickOn && pos % track.beats === 1) {
    soundBatch.push('click');
  }

  console.log(soundBatch);

  soundBatch.forEach(s => new Audio(appSounds[s]).play());
}
