import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Auth from "./Auth";
import Account from "./Account";

// export default App;
export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "21/06/22",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "22/06/22",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString("en-GB"),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth />
      ) : (
        <div>
          <Account key={session.user.id} session={session} />
          <div className="max-w-[960px] ml-auto mr-auto px-4">
            <Header />
            <NotesList
              notes={notes}
              handleAddNote={addNote}
              handleDeleteNote={deleteNote}
            />
          </div>
        </div>
      )}
    </div>
  );
}
