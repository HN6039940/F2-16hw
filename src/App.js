import React from 'react'
import Form from './Form'
import List from './List'

// これをList.jsに各項を挿入する。
const todo =[
    "起きる",
    "ご飯を食べる",
    "お風呂に入る",
    "寝る"
]
    const App = ()=>{
        return(
            // <React.Fragment>
            <>
            <Form/>
            <List todo={todo}/>
            </>
            /* <React.Fragment/> */
    )
}
export default App