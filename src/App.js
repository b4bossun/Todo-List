import React, { useState } from "react";
import "./App.css"

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }

    // add the todo list here
    setList([...list, newTodo])

    // clear input box
    setInput("");

  };

  const deleteTodo = (id) => {
    // filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList)
  };




  return (
    <>
      <div class="container">
        <h1 class="todo">Todo List</h1>
        <section class="searchAndClick">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}

          />
          <button onClick={() => addTodo(input)}>Add</button>
        </section>

        <ul class="list">
          {list.map((todo) => (
            <li className="li" key={todo.id}>
              {todo.todo}
              <button className='listbutton' onClick={() => deleteTodo(todo.id)}> Done </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
