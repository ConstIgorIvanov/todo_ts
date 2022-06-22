import styles from './filterbuttons.module.scss';

interface FilterButtonsProps {
  filterTodo: (title: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filterTodo }) => {
  return (
    <div className={styles.filter}>
      <button className={styles.btn} onClick={() => filterTodo('all')}>
        All
      </button>
      <button className={styles.btn} onClick={() => filterTodo('completed')}>
        Completed
      </button>
      <button className={styles.btn} onClick={() => filterTodo('not completed')}>
        Not completed
      </button>
    </div>
  );
};

export { FilterButtons };
