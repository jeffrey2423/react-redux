import React from 'react'

export default function Counter() {

    const [count, setCount] = React.useState(0);

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

// SIEMPRE SE DEBERIA USAR .jsx POR CONVENCION, no pasa nada si se usa .js