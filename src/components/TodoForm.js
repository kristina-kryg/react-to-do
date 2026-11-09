import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const TodoForm = () => {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);

  function handleChange(e) {
    setNewNote(e.target.value);
  }

  function addNote(e) {
    e.preventDefault();
    const trimmedNote = newNote.trim();
    if (trimmedNote === "") return;

    const noteObj = {
      id: Date.now(),
      text: newNote,
    };

    setNotes([...notes, noteObj]);
    setNewNote("");
  }

  function deleteTodo(itemId) {
    setNotes(notes.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <form className="todo-form" onSubmit={addNote}>
        <input
          type="text"
          className="todo-input"
          onChange={handleChange}
          value={newNote}
          placeholder="What's up for today?"
        />
        <button type="submit" className="todo-btn">
          Add Note
        </button>
      </form>
      <div className="notes-list">
        {notes.length === 0 && <div className="note placeholder-note">...</div>}
        {notes.map((item) => (
          <div className="note" key={item.id}>
            <span>{item.text}</span>
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrash}
              onClick={() => deleteTodo(item.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};
