import React from "react";
import { deleteToDo } from "../store";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";

export default function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>❌</button>
    </li>
  );
}
