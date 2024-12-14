import React, {useState} from 'react';
import './BasicCalculator.css';

const BasicCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [displayExpression, setDisplayExpression] = useState('');
  
  const handleNumberClick = (number) => {
    if (waitingForSecondOperand) {
      setDisplayValue(number);
      setDisplayExpression(`${displayExpression} ${number}`);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? number : displayValue + number);
      setDisplayExpression(displayValue === '0' ? number : `${displayExpression}${number}`);
    }
  };

  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null && !isNaN(inputValue)) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setOperator(nextOperator);
    setWaitingForSecondOperand(true);
    setDisplayExpression(`${displayExpression} ${nextOperator}`);
  };

  const calculate = (first, second, operator) => {
    switch (operator) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '*':
        return first * second;
      case '/':
        return second !== 0 ? first / second : 'Error';
      case '%':
        return first % second;
      default:
        return second;
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
    setDisplayExpression('');
  };

  const handleEqualClick = () => {
    if (operator && firstOperand !== null) {
      const result = calculate(firstOperand, parseFloat(displayValue), operator);
      setDisplayValue(String(result));
      setDisplayExpression(`${displayExpression} = ${result}`);
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  console.log({ firstOperand, operator, displayValue });

  return (
    <div className="calculator">
      <div className="display">{displayExpression || displayValue}</div>
      <div className="buttons">
        <button className="btn clear" onClick={handleClear} >C</button>
        <button className="btn" onClick={() => handleOperatorClick('%')}>%</button>
        <button className="btn" onClick={() => handleOperatorClick('/')}>/</button>

        <button className="btn" onClick={() => handleNumberClick('7')}>7</button>
        <button className="btn" onClick={() => handleNumberClick('8')}>8</button>
        <button className="btn" onClick={() => handleNumberClick('9')}>9</button>
        <button className="btn" onClick={() => handleOperatorClick('*')}>*</button>

        <button className="btn" onClick={() => handleNumberClick('4')}>4</button>
        <button className="btn" onClick={() => handleNumberClick('5')}>5</button>
        <button className="btn" onClick={() => handleNumberClick('6')}>6</button>
        <button className="btn" onClick={() => handleOperatorClick('-')}>-</button>

        <button className="btn" onClick={() => handleNumberClick('1')}>1</button>
        <button className="btn" onClick={() => handleNumberClick('2')}>2</button>
        <button className="btn" onClick={() => handleNumberClick('3')}>3</button>
        <button className="btn" onClick={() => handleOperatorClick('+')}>+</button>

        <button className="btn" onClick={() => handleNumberClick('.')}>.</button>
        <button className="btn" onClick={() => handleNumberClick('0')}>0</button>

        <button className="btn equal" onClick={handleEqualClick}>=</button>

        
        {/* <button className="btn">.</button> */}
      </div>
    </div>
  );
};

export default BasicCalculator;
