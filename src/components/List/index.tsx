import styles from "./list.module.scss";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return (
    <div className={styles.list}>
      {props.items.map(props.renderItem)}
    </div>
  );
}

export { List };
