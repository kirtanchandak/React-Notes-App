import React, { useState } from "react";

export const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note bg-blue-300 rounded-lg flex flex-col p-4 min-h-[170px] justify-between ">
      <textarea
        placeholder=" type to add a note..."
        cols=""
        rows="6"
        className="resize-none border-none bg-blue-300"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <button
          className="save float-right bg-gray-300 border-none px-3 rounded-lg"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
