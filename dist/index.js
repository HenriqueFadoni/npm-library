'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

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

var css = "*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%;\n  font-weight: 300; }\n\na,\nbutton {\n  outline: none;\n  cursor: pointer; }\n\n.main_writer__2CpC1 {\n  color: blue;\n  margin: 2rem; }\n\n.main_invalidfield__3-0lV,\n.main_inputfield__GRrnu {\n  font-size: 1rem;\n  border: none;\n  padding: 1rem;\n  outline: none; }\n\n.main_inputfield__GRrnu {\n  color: black;\n  background-color: white; }\n\n.main_invalidfield__3-0lV {\n  color: white;\n  background-color: #ad2323; }\n";
var style = { "writer": "main_writer__2CpC1", "invalidfield": "main_invalidfield__3-0lV", "inputfield": "main_inputfield__GRrnu" };
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
        return React__default.createElement('input', {
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
        return React__default.createElement('input', {
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
}(React.Component);

InputField.proptypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  addStyle: PropTypes.object,
  getContent: PropTypes.func.isRequired,
  isRequired: PropTypes.bool
};

exports.InputField = InputField;
//# sourceMappingURL=index.js.map
