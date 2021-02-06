import { useEffect, useState } from 'react';
import { NoteContainer } from '../../../../../../styles/NoteStyles';

interface INoteProps {
  index: number;
  play: boolean;
  changeNote: Function;
}

export default function Note({ index, play, changeNote }: INoteProps) {
  const [active, setActive] = useState(play);

  useEffect(() => {
    changeNote(active);
  }, [active]);

  function toggleActive() {
    setActive(!active);
  }
  return (
    <NoteContainer onClick={() => toggleActive()}>
      <div>{index + 1}</div>
    </NoteContainer>
  );
}
