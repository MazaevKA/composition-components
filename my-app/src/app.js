import {useState} from 'react';
import styles from './app.module.css';

const Counter = ({value, setValue}) => {
  return (
    <>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>+ 1</button>
    </>
  )
}
export const App = () => {
  const [value, setValue] = useState(0);

  return (
      <div className={StyleSheet.app}>
        <label>Счёткчик:</label>
        <Counter value={value} setValue={setValue} />
      </div>
  )
}
