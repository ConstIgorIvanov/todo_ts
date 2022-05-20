import styles from "./buttonsgroup.module.scss";

interface ButtonsGroupProps {
  value: string;
  setValue: (e: string) => void;
  addTodo: () => void;
}

const ButtonsGroup: React.FC<ButtonsGroupProps> = ({ value, setValue, addTodo }) => {
  return (
    <div className={styles.buttons}>
      <input
        className={styles.buttons__input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        className={styles.buttons__btn}
        onClick={() => addTodo()}
      >
        Добавить todo
      </button>
    </div>
  );
};

export { ButtonsGroup };
