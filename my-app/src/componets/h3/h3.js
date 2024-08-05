import styles from './h3.module.css';

export const H3 = ({color, children}) => {
  return (
      <h3 className={`${styles.title} ${styles[color]}`}>{children}</h3>
    );
};
