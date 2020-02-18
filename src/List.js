import React from 'react'
import Item from './Item'

// mapメソッドを用いてitemを回す
// mapメソッド配列の要素全てに同じ処理をする
const List = ({todo})=>{

    const row = todo.map((x)=><Item todo={x}/>)
    
    return(
        <ul>
            {row}
            {/* <Item todo={todo[0]}/> */}
            {/* <Item todo={todo[1]}/> */}
            {/* <Item todo={todo[2]}/> */}
            {/* <Item todo={todo[3]}/> */}
        </ul>
        )
    }

export default List