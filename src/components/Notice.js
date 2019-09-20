import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from '../sass/main.scss'

class Notice extends Component {
  state = {
    isClosed: false
  }

  onClickHandler = () => this.setState({ isClosed: true })

  render() {
    const { isClosed } = this.state
    const { noticeText } = this.props

    return (
      <div
        style={
          isClosed
            ? { display: "none" }
            : null
        }
        className={style.notice}
      >
        <div className={style.content}>
          <h3>{noticeText}</h3>
        </div>
        <span
          className={style.closebtn}
          onClick={this.onClickHandler}
        >&times;</span>
      </div>
    )
  }
}

export default Notice

Notice.proptypes = {
  noticeText: PropTypes.string.isRequired
}
