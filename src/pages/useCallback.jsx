import React, { useCallback, useState } from 'react'

export const UseCallbackPage = () => {
    const [name, setName] = useState('')
    
    // const onChangeName = (event) =>{
    //     setName(event.target.value)
    // }

    const onChangeName = useCallback((event)=>{
        console.log(name)
        setName(event.target.value)
    },[])

    return (
        <>
            <div className="App">
                <h2 >Bem vindo ao UseCallbackPage</h2>
                <input placeholder='Nome' value={name} onChange={onChangeName} />
            </div>
        </>
    )
}
export default UseCallbackPage