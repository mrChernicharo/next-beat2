import { appSounds } from './initialValues';
import { ITrack } from './interfaces';

let loopInterval, totalBeats, totalClicks, totalBars, loopAnimFrame;

export function playLoop(track: ITrack) {
  console.log('playLoop high');

  let time = performance.now();

  let click = 1;
  let beat = 1;
  let bar = 1;
  let pos = 1;
  totalBeats = track.beats;
  totalClicks = track.clicks;
  totalBars = track.bars;
  let msPerBeat = Math.round(60_000 / (track.tempo * totalBeats));

  function play(tempo) {
    // console.log('play inner');

    // loopInterval = setTimeout(() => {
    //   updateUI(beat, click, bar);
    //   // console.log(`pos -> ${pos}, beat${beat}, click${click}, bar${bar}`);
    //   playSounds(track, pos);

    //   if (beat !== totalBeats) {
    //     beat++;
    //   } else if (beat === totalBeats) {
    //     beat = 1;
    //     if (click !== totalClicks) {
    //       click++;
    //     } else if (click === totalClicks) {
    //       click = 1;

    //       if (bar !== totalBars) {
    //         bar++;
    //       } else if (bar === totalBars) {
    //         bar = 1;
    //       }
    //     }
    //   }

    //   if (click === 1 && beat === 1 && bar === 1) {
    //     pos = 1;
    //   } else {
    //     pos++;
    //   }

    //   play(track.tempo);
    // // }, Math.round(60_000 / (tempo * totalBeats)));
    // },msPerBeat);

    loopAnimFrame = requestAnimationFrame(timestamp => {
      // console.log(timestamp - time);
      const ms = timestamp - time;

      if (ms > msPerBeat) {
        // console.log(msPerBeat);
        // time = performance.now();
        updateUI(beat, click, bar);

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

        // console.log(timestamp);
        // console.log(ms);
        const diff = ms - msPerBeat;
        // console.log('diff: ' + diff);
        // console.log(time);
        time = performance.now() - diff;
      }
      play(track.tempo);
    });
  }
  play(track.tempo);

  // return loopInterval;
  return loopAnimFrame;
}

export function killLoop() {
  // clearTimeout(loopInterval);
  cancelAnimationFrame(loopAnimFrame);
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
  const promises = [];
  let volume = 0;
  //

  for (let row of track.instrumentRows) {
    row.notes[position].play ? soundBatch.push(row.instrument.voice) : '';
    volume = row.volume * 0.01;
  }

  if (track.clickOn && position % track.beats === 0) {
    soundBatch.unshift('click');
    // soundBatch.push('click');
  }

  // console.log(soundBatch);

  // soundBatch.forEach(s => new Audio(appSounds[s]).play());
  soundBatch.forEach(s => {
    const audio = new Audio(appSounds[s]);
    if (s === 'shake') {
      audio.volume = 1;
    } else {
      audio.volume = volume;
    }

    console.log(s);
    console.log('volume: ' + audio.volume);

    promises.push(audio);
  });

  Promise.all(promises.map(p => p.play()));
}
