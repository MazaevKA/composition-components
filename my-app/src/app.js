import {User, H3} from './componets'
import styles from './app.module.css';

const getUserFromServer = () => ({
  name: 'Иван',
  age: 25,
  email: 'ivan@mail.ru',
  phone: '+7(999)-999-99-99',
})

export const App = () => {
  const user = getUserFromServer();
	return (
		<div className={styles.app}>
      <H3 color={'red'}>Приложение:</H3>
      <div>Разная информация приложения</div>
      {/* Передача props */}
      {/*<User name={user.name} age={user.age} email={user.email} phone={user.phone} />*/}

      {/* Передача props через спред оператор */}
      <User {...user} />

		</div>
	);
};
