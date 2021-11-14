import "Styles/Global.css";

import NoteList from "./Components/NoteList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "Components/Header";
function App() {
  const ListNotes = [
    {
      id: nanoid(),
      text: "",
      color: "#fe9b72",
      date: "14/11/2021",
    },
    {
      id: nanoid(),
      text: "",
      color: "#fec971",
      date: "14/11/2021",
    },
    {
      id: nanoid(),
      text: "",
      color: "#00d4fe",
      date: "14/11/2021",
    },
  ];
  const [notes, setNotes] = useState(ListNotes);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      color: "",
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const addNotes = (color) => {
    const tempNotes = [...notes];
    const date = new Date();

    tempNotes.push({
      id: nanoid(),
      text: "",
      date: date.toLocaleDateString(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const displayNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("react-notes-app"));
    if (saveNotes) {
      setNotes(saveNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app", JSON.stringify(notes));
  }, [notes]);

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };
  const characterLimit = 200;

  return (
    <div className={darkMode ? "dark-mode" : "App"}>
      <Header handleToggleDarkMode={setDarkMode} theme={darkMode} />
      <div className="container">
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={displayNotes}
          addNotes={addNotes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          updateText={updateText}
          characterLimit={characterLimit}
        />
      </div>
    </div>
  );
}

export default App;
