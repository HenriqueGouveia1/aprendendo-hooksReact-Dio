import React, { useState } from 'react'

export const UseStatePage = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="App">
                <h2 >Bem vindo ao UseStatePage</h2>
                <p>{count}</p>
                <button onClick={() => setCount(count+1)}>MAI</button>
                <button onClick={() => setCount(count-1)}>MENO</button>
            </div>
        </>
    )

}
export default UseStatePage