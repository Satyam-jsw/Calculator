import React, { useState } from 'react'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Display from './components/Display'
import Button from './components/Button'

const App = () => {

  const [Val, setVal] = useState('');

  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "C", "="];

  const onButtonClicked = (buttonText) => {
    // console.log(buttonText);
    if (buttonText === '=') {
      const result = eval(Val);
      setVal(result);
    } else if (buttonText === 'C') {
      setVal('');
    } else {
      const newValue = Val + buttonText;
      setVal(newValue);
    }
  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.container}>
          <h1> Calculator </h1>
          <Display displayValue={Val} />
          <Button items={buttons} onButtonClicked={(buttonName) => onButtonClicked(buttonName)} />
        </div>
      </div>
    </>
  )
}

export default App