import "./TodoItem.css";
import { memo } from "react";

function TodoItem({ id, isDone, createdDate, content, onUpdate, onDelete }) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClcickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} type="checkbox" cheched={isDone} />
      <div className="content">{content}</div>
      <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
      <button onClick={onClcickDeleteButton}>삭제</button>
    </div>
  );
}

export default memo(TodoItem);
