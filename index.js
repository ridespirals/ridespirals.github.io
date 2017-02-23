import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'

// const App = React.createClass({
//     render() {
//         return <div>hello from react (but the bad one)</div>
//     }
// })

render(<App />, document.getElementById('app'))