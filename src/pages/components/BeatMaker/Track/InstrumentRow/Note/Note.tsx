import { useEffect, useState } from 'react';
import { NoteContainer } from '../../../../../../styles/NoteStyles';

interface INoteProps {
  id: string;
  position: number;
  rowIndex: number;
  play: boolean;
  changeNote: Function;
}

export default function Note({ id, position, rowIndex, play, changeNote }: INoteProps) {
  const [active, setActive] = useState(play);

  useEffect(() => {
    changeNote(active, rowIndex, position);
  }, [active]);

  function toggleActive() {
    setActive(!active);
  }
  return (
    <NoteContainer
      id={id}
      shouldPlay={active}
      onClick={() => toggleActive()}
      className="note"
    >
      <div>{position + 1}</div>
    </NoteContainer>
  );
}
