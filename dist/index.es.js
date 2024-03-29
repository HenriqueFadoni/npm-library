import React, { Component } from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%;\n  font-weight: 300; }\n\na,\nbutton {\n  outline: none;\n  cursor: pointer; }\n\n.main_writer__2CpC1 {\n  color: blue;\n  margin: 2rem; }\n\n.main_invalidfield__3-0lV,\n.main_inputfield__GRrnu {\n  font-size: 1rem;\n  border: none;\n  padding: 1rem;\n  outline: none; }\n\n.main_inputfield__GRrnu {\n  color: black;\n  background-color: white; }\n\n.main_invalidfield__3-0lV {\n  color: white;\n  background-color: #f44336; }\n\n.main_switch__28bDE {\n  position: relative;\n  display: inline-block;\n  width: 6rem;\n  height: 3.4rem; }\n  .main_switch__28bDE input {\n    opacity: 0;\n    width: 0;\n    height: 0; }\n\n.main_slider__2c0J1 {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s; }\n  .main_slider__2c0J1:before {\n    position: absolute;\n    content: \"\";\n    height: 2.4rem;\n    width: 2.6rem;\n    left: 0.4rem;\n    bottom: 0.4rem;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s; }\n\n.main_slider__2c0J1.main_round__2danK {\n  border-radius: 3.4rem; }\n  .main_slider__2c0J1.main_round__2danK:before {\n    border-radius: 50%; }\n\ninput:checked + .main_slider__2c0J1 {\n  background-color: #2196f3; }\n\ninput:focus + .main_slider__2c0J1 {\n  box-shadow: 0 0 1px #2196f3; }\n\ninput:checked + .main_slider__2c0J1:before {\n  -webkit-transform: translateX(2.6rem);\n  -ms-transform: translateX(2.6rem);\n  transform: translateX(2.6rem); }\n\n.main_notice__3oic2,\n.main_alert__1z5rd {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 2rem;\n  color: white; }\n\n.main_alert__1z5rd {\n  background-color: #f44336; }\n\n.main_notice__3oic2 {\n  background-color: #d48f35; }\n\n.main_content__Rps7w {\n  display: inherit;\n  align-items: center;\n  font-size: 1.2rem; }\n\n.main_closebtn__2IBcD {\n  line-height: 2rem;\n  font-weight: bold;\n  font-size: 2.2rem;\n  color: white;\n  margin-left: 1.5rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s; }\n  .main_closebtn__2IBcD:hover {\n    color: black; }\n\n.main_button__33J0q {\n  padding: 1rem;\n  font-size: 1.4rem;\n  color: #2196f3;\n  border: 0.4rem solid #2196f3;\n  transition: transform 0.2s ease-in;\n  -webkit-transition: transform 0.2s ease-in;\n  -moz-transition: transform 0.2s ease-in; }\n  .main_button__33J0q:hover {\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1); }\n  .main_button__33J0q:active {\n    transform: scale(0.9);\n    -webkit-transform: scale(0.9);\n    -moz-transform: scale(0.9); }\n";
var style = { "writer": "main_writer__2CpC1", "invalidfield": "main_invalidfield__3-0lV", "inputfield": "main_inputfield__GRrnu", "switch": "main_switch__28bDE", "slider": "main_slider__2c0J1", "round": "main_round__2danK", "notice": "main_notice__3oic2", "alert": "main_alert__1z5rd", "content": "main_content__Rps7w", "closebtn": "main_closebtn__2IBcD", "button": "main_button__33J0q" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var InputField = function (_Component) {
  inherits(InputField, _Component);

  function InputField() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, InputField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = InputField.__proto__ || Object.getPrototypeOf(InputField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      isIncomplete: false
    }, _this.onChangeHandler = function (event) {
      var newValue = event.target.value;

      if (newValue.trim() === '') {
        _this.setState({ isIncomplete: true });
      } else {
        _this.setState({ isIncomplete: false });
      }

      _this.setState({ value: newValue });
      _this.props.getContent(newValue);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(InputField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$name = _props.name,
          name = _props$name === undefined ? 'inputField' : _props$name,
          placeholder = _props.placeholder,
          addStyle = _props.addStyle,
          _props$isRequired = _props.isRequired,
          isRequired = _props$isRequired === undefined ? 'false' : _props$isRequired;
      var _state = this.state,
          value = _state.value,
          isIncomplete = _state.isIncomplete;


      if (isRequired) {
        return React.createElement('input', {
          type: 'text',
          name: name,
          placeholder: placeholder,
          style: addStyle,
          className: isIncomplete ? style.invalidfield : style.inputfield,
          onChange: this.onChangeHandler,
          value: value,
          required: true
        });
      } else {
        return React.createElement('input', {
          type: 'text',
          name: name,
          placeholder: placeholder,
          style: addStyle,
          className: style.inputfield,
          onChange: this.onChangeHandler,
          value: value
        });
      }
    }
  }]);
  return InputField;
}(Component);

InputField.proptypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  addStyle: PropTypes.object,
  getContent: PropTypes.func.isRequired,
  isRequired: PropTypes.bool
};

var ToggleSwitch = function ToggleSwitch(props) {
  return React.createElement(
    'label',
    { className: style.switch },
    React.createElement('input', {
      type: 'checkbox',
      onClick: props.onClickHandler
    }),
    React.createElement('span', {
      className: style.slider + ' ' + style.round
    })
  );
};

ToggleSwitch.proptypes = {
  onClickHandler: PropTypes.func.isRequired
};

var Alert = function (_Component) {
  inherits(Alert, _Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isClosed: false
    }, _this.onClickHandler = function () {
      return _this.setState({ isClosed: true });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Alert, [{
    key: 'render',
    value: function render() {
      var isClosed = this.state.isClosed;
      var alertText = this.props.alertText;


      return React.createElement(
        'div',
        {
          style: isClosed ? { display: "none" } : null,
          className: style.alert
        },
        React.createElement(
          'div',
          { className: style.content },
          React.createElement(
            'h3',
            null,
            alertText
          )
        ),
        React.createElement(
          'span',
          {
            className: style.closebtn,
            onClick: this.onClickHandler
          },
          '\xD7'
        )
      );
    }
  }]);
  return Alert;
}(Component);

Alert.proptypes = {
  alertText: PropTypes.string.isRequired
};

var Notice = function (_Component) {
  inherits(Notice, _Component);

  function Notice() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Notice);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Notice.__proto__ || Object.getPrototypeOf(Notice)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isClosed: false
    }, _this.onClickHandler = function () {
      return _this.setState({ isClosed: true });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Notice, [{
    key: 'render',
    value: function render() {
      var isClosed = this.state.isClosed;
      var noticeText = this.props.noticeText;


      return React.createElement(
        'div',
        {
          style: isClosed ? { display: "none" } : null,
          className: style.notice
        },
        React.createElement(
          'div',
          { className: style.content },
          React.createElement(
            'h3',
            null,
            noticeText
          )
        ),
        React.createElement(
          'span',
          {
            className: style.closebtn,
            onClick: this.onClickHandler
          },
          '\xD7'
        )
      );
    }
  }]);
  return Notice;
}(Component);

Notice.proptypes = {
  noticeText: PropTypes.string.isRequired
};

var Button = function Button(props) {
  var _props$btnType = props.btnType,
      btnType = _props$btnType === undefined ? "button" : _props$btnType,
      btnText = props.btnText,
      onClickHandler = props.onClickHandler;


  return React.createElement(
    'button',
    {
      type: btnType,
      className: style.button,
      onClick: onClickHandler
    },
    btnText
  );
};

Button.proptypes = {
  btnType: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export { InputField, ToggleSwitch, Alert, Notice, Button };
//# sourceMappingURL=index.es.js.map
