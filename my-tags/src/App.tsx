import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Notes } from "./components/pages/Notes";
import { CreateNote } from "./components/pages/CreateNote";
import { EditNote } from "./components/pages/EditNote";
import { INoteItem } from "./data_notes";

function App() {
  const [notes, setNotes] = useState<INoteItem[]>(
    JSON.parse((localStorage.getItem("notes"))||'[]')
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes notes={notes} />} />
        <Route
          path="/create-note"
          element={<CreateNote setNotes={setNotes} />}
        />
        <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const [tags, setTag] = useState<string[]>([]);
//   const remakeTags = (arr:string[]) => setTag(arr)
// <h1>Input some tags...</h1>
//       <TagInput tags={tags} remakeTags={remakeTags}/>
