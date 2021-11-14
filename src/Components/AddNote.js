import React, { useState } from "react";
import Color from "./Color";

function AddNote({ handleAddNote, addNotes, characterLimit }) {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    const word = e.target.value;
    if (characterLimit - word.length >= 0) {
      setNoteText(word);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <Color addNotes={addNotes} />
      <textarea
        value={noteText}
        onChange={handleChange}
        cols="10"
        rows="8"
        placeholder="Escribe Aquí tu Nueva Nota..."
      />
      <div className="note-save">
        <small>{characterLimit - noteText.length} Restantes</small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
