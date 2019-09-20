# Employ Fadoni Now

> A small Library of Components

[![NPM](https://img.shields.io/npm/v/realdigital.svg)](https://www.npmjs.com/package/realdigital) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save employ-fadoni-now
```

## Usage

```jsx
import React, { Component } from 'react'

import Button from 'employ-fadoni-now'

class Example extends Component {
  render () {
    return (
      <Button 
        btnText="text"
        onClickHandler={(event) console.log(event)}
      />
    )
  }
}
```

## Components Requirements

### Alert 
- alertText [Required] (**String**): Text that will be inputed in the Alert

### Button
- btnType [Optional] (**String**): Type of the button (submit, reset, **button** = default)
- btnText [Required] (**String**): Text inside the button
- onClickHandler [Required] (**Function**): Action triggered after click

### InputField
- name [Optional] (**String**): Name of the Input (**inputField** = default)
- placeholder [Required] (**String**): PlaceHolder inside the inputField
- addStyle [Optional] (**Object**): Object containing additional styling (**null** = default)
- getContent [Required] (**Function**): Function triggered after user change
- isRequired [Optional] (**Boolean**): To set a Field as required (**false** = default)

### Notice 
- noticeText [Required] (**String**): Text that will be inputed in the Notice

### ToggleSwitch
- onClickHandler [Required] (**Function**): Action triggered after click

## License

MIT © [Henrique Fadoni](https://github.com/HenriqueFadoni)
