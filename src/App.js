import React, {useState} from 'react'
import Form from './Form'
import List from './List'

// これをList.jsに各項を挿入する。
const App = ()=>{
        const [todo,setTodos] = useState(
        [
            {note:"起きる"},
            {note:"ご飯を食べる"},
            {note:"お風呂に入る"},
            {note:"寝る"}
        ])
        console.log(todo)
        const todosAction = todo.map(action=>action.note)
        console.log(todosAction)
        
        return(
            // <React.Fragment>
            <>
            <Form setTodos={setTodos} todo={todo}/>
            <List todo={todosAction}/>
            </>
            /* <React.Fragment/> */
    )
}

export default App