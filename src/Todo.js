import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [list, setList] = useState([]);
  const [toDo, setToDo] = useState("");

  const generateId = () => {
    if (list && list.length > 0) {
      return Math.max(...list.map((t) => t.id)) + 1;
    } else {
      return 1;
    }
  };

  const createNewToDoItem = () => {
    //validate todo
    if (!toDo) {
      alert("Please enter a todo!");
      return;
    }
    const newId = generateId();
    const newToDo = { id: newId, text: toDo, completed: false };
    setList([...list, newToDo]);
    setToDo("");
  };

  const handleInput = (e) => {
    setToDo(e.target.value);
  };

  const Completed = (id) => {
    const yourNextList = [...list];
    var newList = list.filter((item) => item.id == id);
    newList[0].completed = true;
    setList(yourNextList);
  };
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="ToDo">
      <h1 className="ToDo-Header">ToDo List</h1>
      <div className="ToDoInput">
        <input
          type="text"
          value={toDo}
          onChange={handleInput}
          placeholder="Enter new task"
        />
        <button className="ToDo-Add" onClick={createNewToDoItem}>
          Add
        </button>
      </div>
      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {list.map((item) => {
            return (
              <div className="ToDoItem">
                <p
                  className={
                    item.completed ? "ToDoItem-Text checked" : "ToDoItem-Text"
                  }
                >
                  {item.text}
                </p>
                <button
                  className="ToDoItem-Delete"
                  onClick={() => Completed(item.id)}
                >
                  completed
                </button>
                <button
                  className="ToDoItem-Delete"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
