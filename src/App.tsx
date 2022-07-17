import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import AddNote from "./components/AddNote";
import NoteId from "./pages/app/notes/NoteId";
import AppLayout from "./components/AppLayout";
import Main from "./pages/Main";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import NotFound from "./pages/NotFound";
import type { NoteType } from "./utils/types";
import { useNotesContext } from "./hooks/UseNotesContext";
import ProtectedRoutes from "./pages/app/ProtectedRoutes";
import Notes from "./pages/app/notes/Notes";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<AppLayout />}>
              <Route
                path="/app"
                element={<Navigate to="/app/notes" replace />}
              />
              <Route path="/app/notes" element={<Notes />} />
              <Route path="/app/notes/:id" element={<NoteId />} />
            </Route>
          </Route>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
