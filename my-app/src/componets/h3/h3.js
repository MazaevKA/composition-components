import styles from './h3.module.css';

export const H3 = ({title, color}) => {
  return (
      <h3 className={`${styles.title} ${styles[color]}`}>{title}:</h3>
    );
};
