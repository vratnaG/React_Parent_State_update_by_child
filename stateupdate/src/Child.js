import React from 'react'

function Child(props) {
    return (
        <div>
            <div>Child:<input type='text' value={props.state} placeholder="child class" onChange={(e) => props.setState(e.target.value)} /></div>
        </div>
    )
}

export default Child
