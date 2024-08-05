import {H3} from "../h3/h3";
import {Contacts} from '../contacts/contacts';
import styles from "./user.module.css";


export const User = ({name, age, ...contacts}) => {
  return (
    <div className={styles.user}>
      <H3 color={'blue'}>Пользователи:</H3>
      <div>Имя: {name}</div>
      <div>Возраст: {age}</div>
      <Contacts {...contacts} />
    </div>
  );
};
