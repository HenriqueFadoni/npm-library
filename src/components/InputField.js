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
    this.props.getContent(newValue)
  }

  render() {
    const {
      name = 'inputField',
      placeholder,
      addStyle,
      isRequired = 'false'
    } = this.props
    const {
      value,
      isIncomplete
    } = this.state

    if (isRequired) {
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
    } else {
      return (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          style={addStyle}
          className={style.inputfield}
          onChange={this.onChangeHandler}
          value={value}
        />
      )
    }
  }
}

export default InputField

InputField.proptypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  addStyle: PropTypes.object,
  getContent: PropTypes.func.isRequired,
  isRequired: PropTypes.bool
}
