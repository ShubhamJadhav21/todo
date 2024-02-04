import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import style from './Todo.module.css';
import Search from '../components/Search/Search';

export default function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  function getInput(e) {
    setInputValue(e.target.value);
  }

  function getList() {
    if (!inputValue.trim()) {
      return;
    }
    setTodos((preTodos) => [...preTodos, inputValue]);
    setInputValue('');
  }

  function handleSearch(value) {
    setSearchValue(value);
  }

  const filteredTodos = todos.filter((todo) =>
    todo.toLowerCase().includes(searchValue.toLowerCase())
  );
  function Delete(index){
    const updatedTodos = todos.filter((currentTodo,ele)=>ele!==index)
    setTodos(updatedTodos)

  }

  return (
    <div className={style.wrapper}>
      <div className={style.todo}>
        <div>
          <Search
            placeholder="Search your todo"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
        <div className={style.inputContainer}>
          <input
            className={style.todo_input}
            type="text"
            placeholder="Enter Todo"
            value={inputValue}
            onChange={getInput}
          />
          <button className={style.ad_btn} onClick={getList}>
            Add
          </button>
        </div>
        <div>
          {filteredTodos.map((todo, index) => (
            <div key={index} className={style.todo_list}>
              {todo}
              <div className={style.icons_container}>
                <span>
                  <MdDelete onClick={()=>Delete(index)}/>
                </span>
                <span>
                  <MdEdit />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
