import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '@/logic/calculate';
import Style from '@/styles/Calculator.module.scss';

function Screen(props) {
  const { value } = props;
  return (
    <div className={Style.screen}>
      {value}
    </div>
  );
}

function Keypad(props) {
  const {
    calculatorObject,
    updateCalculatorObject,
  } = props;
  const keys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const buttonClicked = (e) => {
    const buttonName = e.target.innerText;
    const result = calculate(calculatorObject, buttonName);
    updateCalculatorObject(result);
  };

  return (
    <div className={Style.keypad}>
      {keys.map((key, index) => (
        <button key={`keypad-btn-${index + 1}`} type="button" className={Style['keypad-button']} onClick={buttonClicked}>
          {key}
        </button>
      ))}
    </div>
  );
}

function Calculator() {
  const [calculatorObject, updateCalculatorObject] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { next, total } = calculatorObject;
  return (
    <div className={Style.calculator}>
      <Screen value={next || total || '0'} />
      <Keypad
        calculatorObject={calculatorObject}
        updateCalculatorObject={updateCalculatorObject}
      />
    </div>
  );
}

Screen.propTypes = {
  value: PropTypes.string.isRequired,
};

Keypad.propTypes = {
  calculatorObject: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  updateCalculatorObject: PropTypes.func.isRequired,
};

export default Calculator;
