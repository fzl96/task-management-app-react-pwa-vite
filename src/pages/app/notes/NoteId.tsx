import { useParams } from "react-router-dom";
import { useNotesContext } from "../../../hooks/UseNotesContext";
import type { NoteType } from "../../../utils/types";

const NoteId = () => {
  const notes: NoteType[] = useNotesContext();
  const { id } = useParams();
  const currentNote: NoteType | undefined = notes.find((note: any) => note.id === id)

  return (
    <div>
      {currentNote && currentNote.title}
    </div>
  )
}

export default NoteId