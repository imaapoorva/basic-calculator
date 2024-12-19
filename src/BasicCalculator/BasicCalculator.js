import React, { useState, useEffect, useCallback } from 'react';
import './BasicCalculator.css';
import { evaluate } from 'mathjs';

const BasicCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [displayExpression, setDisplayExpression] = useState('');

  // Handle number clicks
  const handleNumberClick = useCallback(
    (number) => {
      // Limit input length to 10 characters
      if (displayValue.length >= 10) return;

      if (waitingForSecondOperand) {
        setDisplayValue(number);
        setWaitingForSecondOperand(false);
      } else {
        // Prevent adding multiple decimal points
        if (number === '.' && displayValue.includes('.')) return;

        setDisplayValue((prev) => (prev === '0' ? number : prev + number));
      }

      // Update the display expression
      setDisplayExpression((prev) => (waitingForSecondOperand ? `${prev} ${number}` : prev + number));
    },
    [displayValue, waitingForSecondOperand]
  );

  // Perform the calculation based on the operator
  const calculate = (first, second, operator) => {
    if (operator === '/' && second === 0) {
      setDisplayValue("Division by zero");
      setDisplayExpression("Cannot divide by zero");
      setTimeout(() => {
        setDisplayValue('0');
        setDisplayExpression('');
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
      }, 2000); // reset after 2 seconds
      return;
    }
  
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
   // Handle clear
   const handleClear = useCallback(() => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
    setDisplayExpression('');
  }, []);

  // Handle operator clicks
  const handleOperatorClick = useCallback(
    (nextOperator) => {
      // Check if the current display ends with an operator
      if (/[+\-*/]$/.test(displayExpression)) {
        // If another operator is pressed immediately, show an error
        setDisplayValue("Invalid input");
        setDisplayExpression("Error");
        setTimeout(() => {
          handleClear();
        }, 2000); // Reset after 2 seconds
        return;
      }
  
      const inputValue = parseFloat(displayValue);
  
      if (firstOperand === null) {
        // If no first operand, set it and update the operator
        setFirstOperand(inputValue);
        setOperator(nextOperator);
        setDisplayExpression(`${inputValue} ${nextOperator}`);
      } else if (operator) {
        // Perform calculation with the current operator and operands
        const result = calculate(firstOperand, inputValue, operator);
        setFirstOperand(result);
        setDisplayValue(String(result));
        setDisplayExpression(`${result} ${nextOperator}`);
      }
  
      setOperator(nextOperator);
      setWaitingForSecondOperand(true);
    },
    [displayValue, displayExpression, firstOperand, operator, handleClear]
  );
  
  

  // Handle equal sign (calculate final result)
  const handleEqualClick = useCallback(() => {
    try {
      // Check for consecutive or trailing operators
      if (/[+\-*/]{2,}/.test(displayExpression) || /[+\-*/]$/.test(displayExpression)) {
        setDisplayValue("Invalid Expression");
        setTimeout(() => {
          handleClear(); // Reset after 2 seconds
        }, 2000);
        return;
      }
  
      // Check for division by zero
      if (displayExpression.includes('/ 0')) {
        setDisplayValue("Cannot divide by zero");
        setTimeout(() => {
          handleClear(); // Reset after 2 seconds
        }, 2000);
        return;
      }
  
      // Evaluate the expression
      const result = evaluate(displayExpression.replace(/[^-()\d/*+.]/g, ''));
  
      setDisplayValue(String(result));
      setDisplayExpression(`${displayExpression} = ${result}`);
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    } catch (error) {
      setDisplayValue('Error');
      setDisplayExpression('Error');
      setTimeout(() => {
        handleClear(); // Reset after 2 seconds
      }, 2000);
    }
  }, [displayExpression, handleClear]);
  

  // Handle backspace
  const handleBackspace = useCallback(() => {
    setDisplayValue((prev) => {
      const updatedValue = prev.length > 1 ? prev.slice(0, -1) : '0';
      setDisplayExpression((expression) => {
        if (expression.endsWith(prev)) {
          return expression.slice(0, -prev.length);
        } else {
          return expression.slice(0, -1);
        }
      });
      return updatedValue;
    });
  }, []);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (!isNaN(key) || key === '.') {
        handleNumberClick(key);
      } else if (['+', '-', '*', '/'].includes(key)) {
        handleOperatorClick(key);
      } else if (key === 'Enter') {
        handleEqualClick();
      } else if (key === 'Backspace') {
        handleBackspace();
      } else if (key.toLowerCase() === 'c') {
        handleClear();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNumberClick, handleOperatorClick, handleEqualClick, handleBackspace, handleClear]);

  return (
    <div className="calculator">
      <div className="display">{displayExpression || displayValue}</div>
      <div className="buttons">
        <button className="btn clear" onClick={handleClear}>
          C
        </button>
        <button className="btn" onClick={handleBackspace}>
          ←
        </button>
        <button className="btn" onClick={() => handleOperatorClick('%')}>
          %
        </button>
        <button className="btn" onClick={() => handleOperatorClick('/')}>
          /
        </button>

        <button className="btn" onClick={() => handleNumberClick('7')}>
          7
        </button>
        <button className="btn" onClick={() => handleNumberClick('8')}>
          8
        </button>
        <button className="btn" onClick={() => handleNumberClick('9')}>
          9
        </button>
        <button className="btn" onClick={() => handleOperatorClick('*')}>
          *
        </button>

        <button className="btn" onClick={() => handleNumberClick('4')}>
          4
        </button>
        <button className="btn" onClick={() => handleNumberClick('5')}>
          5
        </button>
        <button className="btn" onClick={() => handleNumberClick('6')}>
          6
        </button>
        <button className="btn" onClick={() => handleOperatorClick('-')}>
          -
        </button>

        <button className="btn" onClick={() => handleNumberClick('1')}>
          1
        </button>
        <button className="btn" onClick={() => handleNumberClick('2')}>
          2
        </button>
        <button className="btn" onClick={() => handleNumberClick('3')}>
          3
        </button>
        <button className="btn" onClick={() => handleOperatorClick('+')}>
          +
        </button>

        <button className="btn" onClick={() => handleNumberClick('.')}>
          .
        </button>
        <button className="btn" onClick={() => handleNumberClick('0')}>
          0
        </button>
        <button className="btn equal" onClick={handleEqualClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default BasicCalculator;
