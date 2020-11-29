import React, { useState } from 'react'
import Child from './Child'
function Parent() {
    const [state, setState] = useState(null)
    return (
        <div>
            <div>Parent state value:{state}</div>
            <div>Parent:<input type='text' value={state} placeholder="parent class" onChange={(e) => setState(e.target.value)} /></div>
            <div><Child setState={setState} /></div>
        </div>
    )
}

export default Parent
