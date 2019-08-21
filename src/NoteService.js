const getNotes = () => {
  const notes = localStorage.getItem("notes");
  if (!notes) {
    return [];
  }
  return JSON.parse(notes);
};

const saveNote = note => {
  // TODO : Improve this function
  const notes = getNotes();
  if (note.edit) {
    notes.map(curr => {
      if (curr.id === note.id) {
        curr.text = note.text;
        curr.title = note.title;
        return curr;
      }
      return curr;
    });
    localStorage.setItem("notes", JSON.stringify([...notes]));
  } else {
    const id = "note-" + new Date().getTime();
    note.id = id;
    localStorage.setItem("notes", JSON.stringify([...notes, note]));
  }
};

export default {
  getNotes,
  saveNote
};
