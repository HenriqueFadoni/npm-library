import React from 'react';
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

var css = "*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%;\n  font-weight: 300; }\n\na,\nbutton {\n  outline: none;\n  cursor: pointer; }\n\n.main_writer__2CpC1 {\n  color: blue;\n  margin: 2rem; }\n\n.main_inputField__rQbh9 {\n  color: black;\n  font-size: 2rem;\n  background-color: white;\n  border-radius: 1rem;\n  border: 1px solid black;\n  padding: 1rem;\n  outline: none; }\n";
var style = { "writer": "main_writer__2CpC1", "inputField": "main_inputField__rQbh9" };
styleInject(css);

var InputField = function InputField(props) {
  var _props$name = props.name,
      name = _props$name === undefined ? 'inputField' : _props$name,
      placeholder = props.placeholder;


  return React.createElement('input', {
    type: 'text',
    className: style.inputField,
    name: name,
    placeholder: placeholder,
    value: value,
    onChange: onChangeHandler,
    required: true
  });
};

InputField.proptypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired
};

export { InputField };
//# sourceMappingURL=index.es.js.map
