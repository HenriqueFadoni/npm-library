import React from 'react'
import PropTypes from 'prop-types'

import '../sass/main.scss'

const InputField = props => {
  const { name = 'inputField', placeholder } = props

  return (
    <input
      type="text"
      className="inputfield"
      name={name}
      placeholder={placeholder}
      required
    />
  );
}

export default InputField

InputField.proptypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired
}
