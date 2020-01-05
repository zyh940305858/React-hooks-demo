// 单状态数据管理

import React, { useState } from 'react';

// React hooks 纯函数式编程
function Demo0(){
    const [ count, setCount ] = useState(0);
    return (
        <div>
            <p>You clicked { count } times </p>
            <button onClick={()=>setCount(count+1)} >Click me</button>
        </div>
    )
}

// class类形式
// class Demo0 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }
//     render() {
//         return (
//             <div>
//                 <p>count:{ this.state.count }</p>
//                 <button onClick={this.addfn.bind(this)}>add count</button>
//             </div>
//         );
//     }
//     addfn(){
//         this.setState({
//             count:this.state.count+1
//         })
//     }
// }

export default Demo0;