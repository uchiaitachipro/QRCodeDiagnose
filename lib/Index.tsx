import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './Hello'

ReactDOM.render(
    <Hello name="Electron powered by React"/>,
    document.querySelectorAll('.app')[0]
)