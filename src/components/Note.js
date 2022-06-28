import React from "react";
import { MdDeleteForever } from "react-icons/md";

export const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note bg-yellow-200 rounded-lg flex flex-col p-4 min-h-[170px] justify-between">
      <span>{text}</span>
      <div className="note-footer">
        <small className="">{date}</small>
        <MdDeleteForever
          size="1.5em"
          className="float-right cursor-pointer"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
