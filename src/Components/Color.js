import React, { useState } from "react";
import { MdColorLens } from "react-icons/md";

function Color({ addNotes }) {
  const colors = [
    "#fe9b72",
    "#fec971",
    " #00d4fe",
    "#b693fd",
    "#e4ee91",
    "#fe7272",
    "#72b3fe",
  ];

  const [listOpen, setListOpen] = useState(false);
  return (
    <div>
      <div className="note-color" onClick={() => setListOpen(!listOpen)}>
        <MdColorLens className="color-icon" size="1.3em" />
      </div>
      <div className={`note-list-colors ${listOpen ? "active" : ""}`}>
        <h3>Lista de Colores</h3>
        <ul>
          {colors.map((item, index) => (
            <li
              key={index}
              className="note-list-color"
              style={{ backgroundColor: item }}
              onClick={() => addNotes(item)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Color;
