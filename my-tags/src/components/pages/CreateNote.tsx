import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { useGetDateNow } from "../useGetDateNow";
import { INoteItem } from "../../dataInterface";
type IProps = {
  setNotes: React.Dispatch<React.SetStateAction<INoteItem[]>>;
};
export const CreateNote = ({ setNotes }: IProps) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useGetDateNow();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && details) {
      const note: INoteItem = {
        id: String(Date.now()),
        title: title,
        details: details,
        date: date,
      };
      setNotes((prevState) => [...prevState, note]);
      navigate("/");
    }
  };
  return (
    <section>
      <header className="create-note__header">
        <Link className="btn" to="/">
          <IoIosArrowBack />
        </Link>
        <button type="submit" form="create-note-form" className="btn create-note__btn">
          Save
        </button>
      </header>
      <form id="create-note-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          autoFocus
          className="create-note__input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={28}
          className="create-note__textarea"
          placeholder="Enter text..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </form>
    </section>
  );
};
