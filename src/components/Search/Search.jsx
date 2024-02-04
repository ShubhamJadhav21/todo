import React, { useState } from 'react';
import style from './Search.module.css';
import { CiSearch } from 'react-icons/ci';

export default function Search({ placeholder, value, onChange }) {
  const [searchActive, setSearchActive] = useState(false);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };

  const handleInputBlur = () => {
    setSearchActive(false);
  };

  return (
    <div className={style.wrapper}>
      <div
        className={`${style.search_wrapper} ${searchActive ? style.active : ''}`}
        onClick={handleSearchClick}
      >
        <span><CiSearch/></span>
        <input
          className={style.search_input}
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleInputBlur} 
        />
      </div>
    </div>
  );
}
