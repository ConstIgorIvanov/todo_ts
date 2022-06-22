import { IStats } from '../../types/data';

import styles from './stats.module.scss';

const Stats: React.FC<IStats> = ({ all, completed, percent, notCompleted }) => {
  return (
    <div className={styles.stats}>
      <div className={styles.stats__elem}>STATS: </div>
      <div className={styles.stats__elem}>all: {all}</div>
      <div className={styles.stats__elem}>completed: {completed}</div>
      <div className={styles.stats__elem}>not completed: {notCompleted}</div>
      <div className={styles.stats__elem}>percent completed: {percent} %</div>
    </div>
  );
};

export { Stats };
