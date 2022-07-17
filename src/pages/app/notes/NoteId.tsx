import { useParams } from "react-router-dom";
import { useNotesContext } from "../../../hooks/UseNotesContext";
import type { NoteType } from "../../../utils/types";
import { format } from "date-fns";

const NoteId = () => {
  const notes: NoteType[] = useNotesContext();
  const { id } = useParams();
  const currentNote: NoteType | undefined = notes.find(
    (note: NoteType) => note.id === id
  );
  let createdAt;
  const noteDate: Date = currentNote && currentNote.createdAt.toDate();

  if (noteDate) {
    createdAt = format(noteDate, "MMM dd");
  }
  return (
    <div>
      <div>
        <p>title: {currentNote?.title}</p>
        <p>Body: {currentNote?.body}</p>
        <p>Created at: {createdAt && createdAt}</p>
      </div>
    </div>
  );
};

export default NoteId;
