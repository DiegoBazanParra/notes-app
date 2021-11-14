import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Note({
  id,
  color,
  text,
  date,
  handleDeleteNote,
  updateText,
  characterLimit,
}) {
  const handleChange = (e) => {
    const word = e.target.value;
    if (characterLimit - word.length >= 0) {
      updateText(word, id);
    }
  };
  return (
    <div className="note" key={id} style={{ backgroundColor: color }}>
      <textarea
        className="note-text"
        defaultValue={text}
        maxLength={characterLimit}
        cols="4"
        rows="9"
        onChange={handleChange}
        placeholder="Escribe Aquí..."
      />
      <div className="note-footer">
        <div className="note-words">
          <p>{characterLimit - text.length} Remaining</p>
        </div>
        <div className="note-date">
          <p>{date}</p>
          <MdDeleteForever
            className="delete-icon"
            size="1.3em"
            onClick={() => handleDeleteNote(id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Note;
