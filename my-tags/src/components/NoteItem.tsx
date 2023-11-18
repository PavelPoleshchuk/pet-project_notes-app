import * as React from "react";
import { Link } from "react-router-dom";
import { INoteItem } from "../types";

interface INoteItemProps {
  item: INoteItem;
}

export const NoteItem = ({ item }: INoteItemProps) => {
  return (
    <Link className="note__link" to={`/edit-note/${item.id}`}>
      <h4>
        {item.title.length > 40 ? item.title.substring(0, 40)+'...' : item.title}
      </h4>
      <p>{item.date}</p>
    </Link>
  );
};
