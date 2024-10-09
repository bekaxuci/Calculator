import './App.css';
import React, {useState} from 'react';

function App() {
  const [input, setInput] = useState ('')

  const alhacerclick = (value) =>{
      setInput ( input + value)
  }

  const botonborrar = () => {
    setInput('')
  }

  const botonCalcular = () =>{
    try{
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error')
    }
  }

  return (
    <div className="calculator">
    <input type="text" value={input} readOnly />
    <div className="button-container">
      <button onClick={() => alhacerclick('1')}>1</button>
      <button onClick={() => alhacerclick('2')}>2</button>
      <button onClick={() => alhacerclick('3')}>3</button>
      <button onClick={() => alhacerclick('+')}>+</button>
      <button onClick={() => alhacerclick('4')}>4</button>
      <button onClick={() => alhacerclick('5')}>5</button>
      <button onClick={() => alhacerclick('6')}>6</button>
      <button onClick={() => alhacerclick('-')}>-</button>
      <button onClick={() => alhacerclick('7')}>7</button>
      <button onClick={() => alhacerclick('8')}>8</button>
      <button onClick={() => alhacerclick('9')}>9</button>
      <button onClick={() => alhacerclick('*')}>*</button>
      <button onClick={() => alhacerclick('0')}>0</button>
      <button onClick={() => alhacerclick('.')}>,</button>
      <button onClick={botonCalcular}>=</button>
      <button onClick={() => alhacerclick('/')}>/</button>
      <button onClick={botonborrar}>C</button>
    </div>
  </div>
  );
}

export default App;
