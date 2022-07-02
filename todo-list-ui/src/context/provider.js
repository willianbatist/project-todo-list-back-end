import PropTypes from 'prop-types';
import Context from './context';
import React, { useState } from 'react';

export default function Provider({ children }) {
  const [values, setValues] = useState({ status: 'Pendente' });

  const handleValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  };

  const disableButton = (values) => {
    if (values.task && values.task.length > 1) {
      return false;
    }
    return true;
  };

  const context = {
    handleValues,
    values,
    disableButton,
  };
  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};