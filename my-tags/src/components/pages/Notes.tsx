import * as React from "react";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { NoteItem } from "../NoteItem";
import { Link } from "react-router-dom";
import { INoteItem } from "../../dataInterface";
import { useEffect, useState } from "react";
type IProps = {
  notes: INoteItem[];
};
export const Notes = ({ notes }: IProps) => {
  const [showSearch, setShowSearch] = React.useState(false);
  const [title, setTitle] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  console.log("filteredNotes=", filteredNotes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((item) => {
        if (item.title.toLowerCase().match(title.toLocaleLowerCase())) {
          return item;
        }
      })
    );
  };
  useEffect(handleSearch, [title]);

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My notes</h2>}
        {showSearch && (
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
            type="text"
            autoFocus
            placeholder="Keyword..."
          />
        )}
        <button
          className="btn notes__btn"
          onClick={() => {
            setShowSearch((prev) => !prev);
            setTitle("");
          }}
        >
          <CiSearch />
        </button>
      </header>
      <main className="notes__container">
        {filteredNotes.map((item) => (
          <NoteItem key={item.id} item={item} />
        ))}
      </main>
      <Link to="/create-note" className="btn btn__plus">
        <BsPlusLg />
      </Link>
    </section>
  );
};
