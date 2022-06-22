import React from 'react';

import { FilterButtons } from '../FilterButtons';
import { List } from '../List';
import { Stats } from '../Stats';
import { TodoListItem } from '../TodoListItem';
import { ButtonsGroup } from '../ButtonsGroup';
import { ITodo } from '../../types/data';

import useTodo from '../../hook/useTodo';

import styles from './app.module.scss';

const App: React.FC = () => {
  const [value, setValue] = React.useState('');
  const [todos, setTodo] = useTodo();
  const [filteredTodo, setFilteredTodo] = React.useState<ITodo[]>([]);

  React.useEffect(() => {
    if (todos) setFilteredTodo(todos);
  }, [todos]);

  const addTodo = () => {
    if (value !== '') {
      setTodo((prev) => [...prev, { id: todos.length + 1, title: value, completed: false }]);
    }
    setValue('');
  };

  const filterTodo = (title: string) => {
    if (title === 'all') setFilteredTodo(todos);
    if (title === 'completed') setFilteredTodo(todos.filter((todo) => todo.completed));
    if (title === 'not completed') setFilteredTodo(todos.filter((todo) => !todo.completed));
  };

  const handleTodo = (id: number) => {
    setFilteredTodo((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  return (
    <div className={styles.container}>
      <Stats
        all={todos.length}
        completed={todos.filter((todo) => todo.completed).length}
        notCompleted={todos.filter((todo) => !todo.completed).length}
        percent={Math.ceil(
          (todos.filter((todo) => todo.completed).length * 100) / todos.length || 0,
        )}
      />
      <ButtonsGroup value={value} setValue={setValue} addTodo={addTodo} />
      <List
        items={filteredTodo}
        renderItem={(todo) => <TodoListItem key={todo.id} todo={todo} handleTodo={handleTodo} />}
      />
      <FilterButtons filterTodo={filterTodo} />
    </div>
  );
};

export { App };
