import React, { useReducer } from 'react'

function Demo4() {
    const [ count,  dispatch ] = useReducer((state, action)=>{
        switch(action){
            case 'add':
                    return state+1
            case 'sub':
                   return state-1
            default:
                return state
        }
    },0)

    return (
        <div>
            <h2>当前值 { count }</h2>
            <button onClick={()=>{dispatch('add')}}>Add</button>
            <button onClick={()=>{dispatch('sub')}}>Sub</button>
        </div>
    )
}


export default Demo4

// js实现Reducer
// function countReducer(state, action){
//     switch(action.type){
//         case 'add':
//             return state+1
//         case 'sub':
//             return state-1
//         default:
//             return state
//     }
// }