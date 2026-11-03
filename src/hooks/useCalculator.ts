import { useState } from 'react';

export function useCalculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [history, setHistory] = useState(''); // Estado para la bitácora de operaciones

  const handleNumber = (num: string) => {
    if (waitingForSecondOperand) {
      setDisplayValue(num);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? num : displayValue + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplayValue('0.');
      setWaitingForSecondOperand(false);
      return;
    }
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
    setHistory('');
  };

  const handleBackspace = () => {
    if (waitingForSecondOperand) return;
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue('0');
    }
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setFirstOperand(result);
      setDisplayValue(String(result));
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
    setHistory(`${displayValue} ${nextOperator}`);
  };

  const handleScientific = (func: string) => {
    const current = parseFloat(displayValue);
    let result = current;
    let label = '';

    if (func === 'sqrt') {
      result = current >= 0 ? Math.sqrt(current) : 0;
      label = `√(${current})`;
    } else if (func === 'fraction') {
      result = current !== 0 ? 1 / current : 0;
      label = `1/(${current})`;
    } else if (func === 'square') {
      result = current * current;
      label = `sqr(${current})`;
    }

    setDisplayValue(String(result));
    setHistory(label);
    setWaitingForSecondOperand(true);
  };

  const calculate = (first: number, second: number, op: string) => {
    switch (op) {
      case '+': return first + second;
      case '-': return first - second;
      case '×': return first * second;
      case '÷': return second !== 0 ? first / second : 0;
      case '%': return (first * second) / 100;
      default: return second;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(displayValue);

    if (operator && firstOperand !== null) {
      const result = calculate(firstOperand, inputValue, operator);
      setHistory(`${firstOperand} ${operator} ${inputValue} =`);
      setDisplayValue(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  return {
    displayValue,
    history,
    handleNumber,
    handleDecimal,
    handleClear,
    handleBackspace,
    handleOperator,
    handleScientific,
    handleEquals,
  };
}