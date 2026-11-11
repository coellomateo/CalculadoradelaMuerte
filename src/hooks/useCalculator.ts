import { useState } from 'react';
import { Vibration } from 'react-native';

export function useCalculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const triggerHaptic = () => {
    try {
      Vibration.vibrate(35);
    } catch (e) {}
  };

  const clearAll = () => {
    triggerHaptic();
    setDisplay('0');
    setExpression('');
  };

  const clearEntry = () => {
    triggerHaptic();
    setDisplay('0');
  };

  const backspace = () => {
    triggerHaptic();
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const inputDigit = (digit: string) => {
    triggerHaptic();
    setDisplay(display === '0' ? digit : display + digit);
  };

  const inputDecimal = () => {
    triggerHaptic();
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const toggleSign = () => {
    triggerHaptic();
    if (display === '0') return;
    setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display);
  };

  const performOperation = (nextOperator: string) => {
    triggerHaptic();

    let current = display.trim();
    const lastChar = current.slice(-1);

    if (['+', '-', '×', '÷'].includes(lastChar)) {
      current = current.slice(0, -1).trim();
    }

    setDisplay(current + ' ' + nextOperator + ' ');
  };

  const handleScientific = (func: string) => {
    triggerHaptic();
    if (func === '(' || func === ')') {
      setDisplay(display === '0' ? func : display + func);
      return;
    }

    const current = parseFloat(display);
    let result = current;

    switch (func) {
      case 'square': result = current * current; break;
      case 'sqrt':
        if (current < 0) { setDisplay('Error'); return; }
        result = Math.sqrt(current);
        break;
      case 'reciprocal':
        if (current === 0) { setDisplay('Error'); return; }
        result = 1 / current;
        break;
    }

    setDisplay(String(parseFloat(result.toFixed(8))));
  };

  const handlePercent = () => {
    triggerHaptic();
    const current = parseFloat(display);
    setDisplay(String(current / 100));
  };

  const handleEqual = () => {
    triggerHaptic();

    if (!display) return;

    let fullExpressionText = display.trim();

    // Si la ecuación termina en un operador (ej. "69 - 25 +"), le quita el signo sobrante del final antes de calcular
    const lastChar = fullExpressionText.slice(-1);
    if (['+', '-', '×', '÷'].includes(lastChar)) {
      fullExpressionText = fullExpressionText.slice(0, -1).trim();
    }

    try {
      const sanitizedExpression = fullExpressionText
        .replace(/×/g, '*')
        .replace(/÷/g, '/');

      const result = evaluateMathExpression(sanitizedExpression);

      if (!isFinite(result)) {
        setDisplay('Error');
        setExpression('');
        return;
      }

      const formattedResult = String(parseFloat(result.toFixed(8)));

      setExpression(`${fullExpressionText} =`);
      setDisplay(formattedResult);
    } catch (e) {
      setDisplay('Error');
    }
  };

  const evaluateMathExpression = (expr: string) => {
    const tokens = expr.trim().split(/\s+/);
    if (tokens.length === 0) return 0;

    let total = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const op = tokens[i];
      const nextNum = parseFloat(tokens[i + 1]);

      if (isNaN(nextNum)) break;

      switch (op) {
        case '+': total += nextNum; break;
        case '-': total -= nextNum; break;
        case '*': total *= nextNum; break;
        case '/': 
          if (nextNum === 0) throw new Error('Division by zero');
          total /= nextNum; 
          break;
      }
    }
    return total;
  };

  return {
    display,
    expression,
    inputDigit,
    inputDecimal,
    performOperation,
    clearAll,
    clearEntry,
    backspace,
    handleEqual,
    handleScientific,
    toggleSign,
    handlePercent,
  };
}