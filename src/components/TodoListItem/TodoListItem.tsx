import styles from "./todolistitem.module.scss";
import { ITodo } from "../../types/data";

interface TodoListItemProps {
  todo: ITodo;
  handleTodo: (id: number) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, handleTodo }) => {
  return (
    <div className={styles.elem} key={todo.id}>
      <div>{todo.id}</div>
      <div>{todo.title}</div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleTodo(todo.id)}
      ></input>
    </div>
  );
};

export { TodoListItem };
