import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Detail() {
  const toDos = useSelector((state) => state);
  //클릭된 리스트의 아이디값을 가져옴
  const id = useParams().id;

  //아이디 같은것을 찾아냄
  const toDoText = toDos.find((toDo) => toDo.id === parseInt(id));
  console.log(toDos.id);

  console.log(toDoText.id);
  console.log(toDoText.text);

  return (
    <>
      <h1>{toDoText.text}</h1>
      Created at : {toDoText.id}
    </>
  );
}
