import styles from './contacts.module.css';
import {H3} from "../h3/h3";

export const Contacts = ({email, phone}) => {
  return (
    <div className={styles.contacts}>
      <H3 color={'green'}>Контакты:</H3>

      <div className={styles.item}>
        <p className={styles.item_heading}>Почта:</p>
        <a className={styles.item_email} href={'mailto:' + 'ivan@mail.ru'}>{email}</a>
      </div>

      <div className={styles.item}>
        <p className={styles.item_heading}>Телефон:</p>
        <a className={styles.item_phone} href={'tel:' + '+7(999)-999-99-99'}>{phone}</a>
      </div>
    </div>
  )
}
