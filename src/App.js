import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";
import Note from "./components/Note";
import Header from "./components/Header";

function App() {
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
  return (
    <div className="max-w-[960px] ml-auto mr-auto px-4">
      <Header />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
