import React from 'react'

export default React.createClass({
    componentDidMount() {
        console.log(`Hello from App module! I mounted!`)
    },
    render() {
        return (
            <div>hi from React. get over it!</div>
        )
    }
})