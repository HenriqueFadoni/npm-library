import React from 'react'
import PropTypes from 'prop-types'

import style from '../sass/main.scss'

const Button = props => {
  const {
    btnType = "button", 
    btnText, 
    onClickHandler
  } = props

  return (
    <button
      type={btnType}
      className={style.button}
      onClick={onClickHandler}
    >
      {btnText}
    </button>
  )
}

export default Button

Button.proptypes = {
  btnType: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
}
