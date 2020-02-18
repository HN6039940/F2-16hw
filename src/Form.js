import React from 'react'

const Form = ({setTodos,todo})=>{
    
    let textItem

    const inputValue = (item) =>{
        
        textItem = item.currentTarget.value
        
    }
    
    const handleSubmit = (e) =>{
        
        e.preventDefault()
       
        // const newTodos = todo.slice()
        // newTodos.push("おやすみなさい。")
        
        // 関数を実行した後テキストボックスの値を空白にする。
        setTodos(todo.concat({note:textItem}))
        document.getElementById("Text").value=""

    }
    return(
        <form action="#" onSubmit={handleSubmit}>
            <input id="Text" type="text" value={textItem} onChange={inputValue}></input>
            <button  type="submit">ボタン</button>
        </form>

    )
}

export default Form