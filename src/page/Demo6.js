import React, { useState, useMemo } from 'react';

function Demo6() {
    const [ xiaohong, setXiaohong ] = useState('小红在待客状态');
    const [ xiaofang, setXiaofang ] = useState('小芳在待客状态');

    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setXiaofang(new Date().getTime())}}>小芳</button>
            <ChildComponent name={xiaohong} >{xiaofang}</ChildComponent>
        </>
    )
}

function ChildComponent({name, children}){

    function changeXiaohong(){
        console.log(1)
         return name +',小红向我们走来'
    }

    //useMemo  解决重复渲染   只有点击小红才渲染
    const actionXiaohong = useMemo(()=>{changeXiaohong(name)} , [name])

    return (
        <>
            <div>{children}</div>
            <div>{actionXiaohong}</div>
        </>
    )
}

export default Demo6