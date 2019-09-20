import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from '../sass/main.scss'

class Alert extends Component {
  state = {
    isClosed: false
  }

  onClickHandler = () => {
    this.setState({ isClosed: true })
  }

  render() {
    const { isClosed } = this.state
    const { alertText } = this.props

    return (
      <div
        style={
          isClosed
            ? { display: "none" }
            : null
        }
        className={style.alert}
      >
        <div className={style.content}>
          <h3>{alertText}</h3>
        </div>
        <span
          className={style.closebtn}
          onClick={this.onClickHandler}
        >&times;</span>
      </div>
    )
  }
}

export default Alert

Alert.proptypes = {
  alertText: PropTypes.string.isRequired
}
