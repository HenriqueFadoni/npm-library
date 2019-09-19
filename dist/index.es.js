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

var css = "*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%;\n  font-weight: 300; }\n\na,\nbutton {\n  outline: none;\n  cursor: pointer; }\n";
styleInject(css);

var InputField = function InputField(props) {
  var _props$name = props.name,
      name = _props$name === undefined ? 'inputField' : _props$name,
      placeholder = props.placeholder;


  return React.createElement('input', {
    type: 'text',
    className: 'inputfield',
    name: name,
    placeholder: placeholder,
    required: true
  });
};

InputField.proptypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired
};

export { InputField };
//# sourceMappingURL=index.es.js.map
