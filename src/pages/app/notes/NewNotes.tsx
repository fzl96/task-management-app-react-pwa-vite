import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import { db } from "../../../config/firebase";

const NewNotes = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("untitled");
  const [body, setBody] = useState("empty");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const currentDate = new Date();
    if (!title || !body) {
      console.log('no');
      return null
    }
    const newNote = await addDoc(collection(db, "notes"), {
      title,
      body,
      createdAt: Timestamp.fromDate(currentDate)
    })
    return navigate(`/app/notes/${newNote.id}`)
  };

  return (
    <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex justify-end">
        <button
          className="py-3 px-6 bg-gray-800 rounded-2xl text-white"
          type="submit"
        >
          Save
        </button>
      </div>
      <TextareaAutosize
        className="text-5xl resize-none bg-transparent focus:outline-none font-semibold w-full"
        placeholder="untitled"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextareaAutosize
        className="text-2xl resize-none bg-transparent focus:outline-none  w-full"
        placeholder="type something here"
        onChange={(e) => setBody(e.target.value)}
      />
    </form>
  );
};
export default NewNotes;
