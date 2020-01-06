import React, { useState, createContext, useContext } from 'react'

const CountContext = createContext()

function Counter(){
    let count = useContext(CountContext)
    return <h2>{ count }</h2>
}

function Demo3(){

    const [ count, setCount ] = useState(0)

    return (
        <div>
            <p>Me Click Count = ${ count }</p>
            <button onClick={ () => setCount( count + 1 ) }>count++</button>
            <CountContext.Provider value={ count }>
                <Counter></Counter>
            </CountContext.Provider>
        </div>
    )
}


export default Demo3