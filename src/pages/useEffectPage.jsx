import React, { useEffect, useState } from 'react'

export const UseEffectPage = () => {
    const [name, setName] = useState('')
    
    useEffect(()=>{
        console.log(name)
    },[name])

    return (
        <>
            <div className="App">
                <h2 >Bem vindo ao UseEffectPage</h2>
                <input placeholder='Nome' value={name} onChange={(event)=>setName(event.target.value)} />
            </div>
        </>
    )

}
export default UseEffectPage