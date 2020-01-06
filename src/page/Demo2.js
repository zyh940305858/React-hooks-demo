// userEffect()

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index(){
    useEffect(() => {
        console.log("首页")
        return () => {
            console.log('老弟你走了！')
        }
    },[])
    return <h2>赵宇航</h2>
}

function List(){
    useEffect(() => {
        console.log("列表")
    })
    return <h2>List</h2>
}

function Demo2(){
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)
        return () => {
            console.log("================================")
        }
    }, [ count ])
    return (
        <div>
            <p>当前的count为：{ count }</p>
            <button onClick={() => setCount( count+1 )}>count++</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={ Index } />
                <Route path="/list/" component={ List } />
            </Router>
        </div>
    )
}

export default Demo2