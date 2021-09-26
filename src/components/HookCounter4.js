import React, { useState } from 'react'

const HookCounter4 = () => {
    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([...items, { id: items.length, value: Math.random() * 10 }])
    }

    return (
        <>
            <button onClick={addItems}>Add a number</button>
            <ul>
                {items.map(it => <li key={it.id}>{it.value}</li>)}
            </ul>
        </>
    )
}

export default HookCounter4
