import "Styles/Note.css";
import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

function NoteList({
  notes,
  addNotes,
  handleAddNote,
  handleDeleteNote,
  updateText,
  characterLimit,
}) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          handleDeleteNote={handleDeleteNote}
          updateText={updateText}
          handleAddNote={handleAddNote}
          characterLimit={characterLimit}
          id={note.id}
          color={note.color}
          text={note.text}
          date={note.date}
          key={note.id}
        />
      ))}
      <AddNote
        handleAddNote={handleAddNote}
        addNotes={addNotes}
        characterLimit={characterLimit}
      />
    </div>
  );
}

export default NoteList;
