import {
  createContext,
  useEffect,
  useReducer,
  useState,
  useContext,
} from "react";
import { db } from "../config/firebase";
import {
  collection,
  query,
  onSnapshot,
  // doc,
  // updateDoc,
  // deleteDoc,
  // QuerySnapshot,
} from "firebase/firestore";
import type { NoteType } from "../utils/types";

export const NotesContext = createContext<NoteType[]>([]);

export const NotesContextProvider = ({ children }: any) => {
  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    const q = query(collection(db, "notes"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let notesArray: any = [];
      querySnapshot.forEach((doc) => {
        notesArray.push({ ...doc.data(), id: doc.id });
      });
      setNotes(notesArray);
    });
    return () => unsub();
  }, []);
  
  return (
    <NotesContext.Provider value={ notes }>{children}</NotesContext.Provider>
  );
};

