import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addToDo } from "../store";
import ToDo from "../components/ToDo";

function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    dispatch(addToDo(text));
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

export default Home;
