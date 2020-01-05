// 多状态数据管理

import React, { useState } from 'react'

function Demo1(){
    const [ age, setAge ] = useState(19)
    const [ sex, setSex ] = useState('男')
    const [ work ] = useState('前端工程师')
    return (
        <div>
            <p>赵宇航年龄 { age } 岁，性别：{ sex }，工作： { work }</p>
            <button onClick={() => setAge(age+1)} >年龄++</button>
            <button onClick={() => sex === '女' ? setSex('男') : setSex('女')} >性别切换</button>
        </div>
    )
}

export default Demo1;