import React from 'react'
import { useState } from 'react'

const Contador = () => {
    const [contador , setContador] = useState(0);

    const Aumentar = () =>{
        setContador(contador + 1)
    }
    const restar = () =>{
        setContador(contador - 1)
    }
    const resetear = () =>{
        setContador(0)
    }


    return (
        <div>
            <h3>Nuestro primer contador</h3> 
            <h2>{contador}</h2>
            <button onClick={Aumentar}>autmentar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={resetear}>Resetear</button>
        </div>
    )
}

export default Contador