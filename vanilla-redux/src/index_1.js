//Vanila-redux
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

//오타 생기면 error로 알려주니까 정의
const ADD = "ADD";
const MINUS = "MINUS";

//reducer는 data를 변경하는 함수!!! function!
const countModifier = (count = 0, action) => {
  //modify state
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

//store은 data를 담는 곳
const countStore = createStore(countModifier);
const onChange = () => {
  number.innerText = countStore.getState();
  console.log(countStore.getState());
};
countStore.subscribe(onChange);

console.log(countStore.getState());

// dispatch는 reducer에게 메세지를 보내는 방법
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
