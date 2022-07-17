import { Link } from "react-router-dom";
import AddNote from "../../../components/AddNote";
import Card from "../../../components/notes/Card";
import NewNoteButton from "../../../components/notes/NewNoteButton";
import { useNotesContext } from "../../../hooks/UseNotesContext";
import { NoteType } from "../../../utils/types";

const Notes = () => {
  const notes: NoteType[] = useNotesContext();

  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl  font-semibold ml-1">Recent notes</h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
          {notes.map((note: NoteType, index: number) => {
            if (index > 2) return null;
            return <Card key={note.id} note={note} />;
          })}
          <Link to="new">
            <NewNoteButton />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Notes;
