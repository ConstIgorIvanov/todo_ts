import { ITodo } from '../../types/data';

import styles from './todolistitem.module.scss';

interface TodoListItemProps {
  todo: ITodo;
  handleTodo: (id: number) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, handleTodo }) => {
  return (
    <div className={styles.elem} key={todo.id}>
      <div className={styles.id}>{todo.id}</div>
      <div className={styles.title}>{todo.title}</div>
      <input type="checkbox" checked={todo.completed} onChange={() => handleTodo(todo.id)}></input>
    </div>
  );
};

export { TodoListItem };
