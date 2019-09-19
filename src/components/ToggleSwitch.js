import React from 'react'
import PropTypes from 'prop-types'

import style from '../sass/main.scss'

const ToggleSwitch = props => (
  <label className={style.switch}>
    <input
      type="checkbox"
      onClick={props.onClickHandler}
    />
    <span
      className={
        `${style.slider} ${style.round}`
      }
    ></span>
  </label>
)

export default ToggleSwitch

ToggleSwitch.proptypes = {
  onClickHandler: PropTypes.func.isRequired
}
