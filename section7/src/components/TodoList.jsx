import "./TodoList.css";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper"></div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
