import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { INoteItem } from "../../data_notes";
import { useState } from "react";
import { useGetDateNow } from "../useGetDateNow";
type IProps = {
  notes: INoteItem[];
  setNotes: React.Dispatch<React.SetStateAction<INoteItem[]>>;
};
export const EditNote = ({ notes, setNotes }: IProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const date = useGetDateNow();
  const note = notes.find((note) => note.id === id);

  const [title, setTitle] = useState(note?.title);
  const [details, setDetails] = useState(note?.details);

  const deleteNote = (id: string | undefined) => {
    if (!id) return;
    const arr = notes.filter((item) => item.id !== id);
    setNotes(arr);
  };

  const editNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && details && note) {
      const newNote: INoteItem = {
        ...note,
        title: title,
        details: details,
        date: date,
      };
      if (!id) return;
      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link className="btn" to="/">
          <IoIosArrowBack />
        </Link>
        <button
          type="submit"
          form="edit-note-form"
          className="btn create-note__btn"
        >
          Save
        </button>
        <button
          onClick={() => {
            deleteNote(id);
            navigate("/");
          }}
          className="btn create-note__delete"
        >
          <RiDeleteBin6Line />
        </button>
      </header>
      <form
        id="edit-note-form"
        onSubmit={(e) => {
          editNote(e);
        }}
      >
        <input
          autoFocus
          className="create-note__input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <textarea
          value={details}
          onChange={(e) => setDetails(e.currentTarget.value)}
          rows={28}
          className="create-note__textarea"
          placeholder="Enter text..."
        />
      </form>
    </section>
  );
};
