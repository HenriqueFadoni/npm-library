import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from '../sass/main.scss'

const InputField = props => {
  const { name = 'inputField', placeholder } = props

  return (
    <input
      type="text"
      className={style.inputField}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
      required
    />
  );
}

export default InputField

InputField.proptypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired
}
