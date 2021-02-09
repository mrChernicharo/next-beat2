import { useEffect, useState } from 'react';
import { NoteContainer } from '../../../../../styles/NoteStyles';

interface INoteProps {
  id: string;
  position: number;
  rowIndex: number;
  play: boolean;
  changeNote: Function;
}

export default function Note({ id, position, rowIndex, play, changeNote }: INoteProps) {
  const [active, setActive] = useState(play);
  const beat = id.substr(11, 1);
  const click = id.substr(19, 1);
  const bar = id.substr(25, 1);

  useEffect(() => {
    console.log('note touched!');
    changeNote(active, rowIndex, position);
  }, [active]);

  function toggleActive() {
    setActive(!active);
  }
  return (
    <NoteContainer
      beat={beat}
      click={click}
      bar={bar}
      id={id}
      shouldPlay={active}
      onClick={() => toggleActive()}
      className="note"
    >
      {beat === '1' ? <span>○</span> : <span>_</span>}
    </NoteContainer>
  );
}
