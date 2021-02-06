import { useEffect, useState } from 'react';
import { NoteContainer } from '../../../../../../styles/NoteStyles';

interface INoteProps {
  position: number;
  rowIndex: number;
  play: boolean;
  changeNote: Function;
}

export default function Note({ position, rowIndex, play, changeNote }: INoteProps) {
  const [active, setActive] = useState(play);

  useEffect(() => {
    changeNote(active, rowIndex, position);
  }, [active]);

  function toggleActive() {
    setActive(!active);
  }
  return (
    <NoteContainer shouldPlay={active} onClick={() => toggleActive()}>
      <div>{position + 1}</div>
    </NoteContainer>
  );
}
