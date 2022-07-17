import { Link } from "react-router-dom";
import AddNote from "../../../components/AddNote";
import { useNotesContext } from "../../../hooks/UseNotesContext";
import { NoteType } from "../../../utils/types";

const Notes = () => {
  const notes: NoteType[] = useNotesContext();
  return (
    <>
      <AddNote />
      {notes &&
        notes.map((note: NoteType) => {
          return (
            <div key={note.id}>
              <Link to={`/app/notes/${note.id}`}>{note.title}</Link>
            </div>
          );
        })}
    </>
  );
};
export default Notes;
