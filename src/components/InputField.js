import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from '../sass/main.scss'

class InputField extends Component {
  state = {
    value: '',
    isIncomplete: false
  }

  onChangeHandler = event => {
    const newValue = event.target.value
    if (newValue.trim() === '') {
      this.setState({ isIncomplete: true })
    } else {
      this.setState({ isIncomplete: false })
    }
    this.setState({ value: newValue })
  }

  render() {
    const { name = 'inputField', placeholder, addStyle} = this.props
    const { value, isIncomplete } = this.state

    return (
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        style={addStyle}
        className={
          isIncomplete
            ? style.invalidfield
            : style.inputfield
        }
        onChange={this.onChangeHandler}
        value={value}
        required
      />
    )
  }
}

export default InputField

InputField.proptypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  addStyle: PropTypes.object
}
