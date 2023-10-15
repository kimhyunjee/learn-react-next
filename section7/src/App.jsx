import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "react 공부",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "기타치기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);

  return (
    <>
      <div className="App">
        <Header />
        <TodoEditor />
        <TodoList />
      </div>
    </>
  );
}

export default App;
