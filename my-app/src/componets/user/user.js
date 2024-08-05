import styles from "./user.module.css";

export const User = (props) => {
  return (
    <div className={styles.user}>
      <label className={styles.user__label}>Пользователи:</label>
      <div>Имя: {props.name}</div>
      <div>Возраст: {props.age}</div>
      <div>
        <label>Контакты:</label>
        <div>Почта: {props.email}</div>
        <div>Телефон: {props.phone}</div>
      </div>
    </div>
  );
};
