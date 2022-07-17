import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const AddNote = () => {
  const [title, setTitle] = useState<string>("");

  const addNote = async (e: any) => {
    e.preventDefault();
    if (!title) {
      return;
    }
    await addDoc(collection(db, "notes"), {
      title,
    });
    setTitle("");
  };

  return (
    <form onSubmit={addNote}>
      <input
        type="text"
        className="p-3 bg-slate-200 rounded-2xl border-1 border-black text-black"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="rounded-2xl bg-gray-800 p-3">
        Add note
      </button>
    </form>
  );
};
export default AddNote;
