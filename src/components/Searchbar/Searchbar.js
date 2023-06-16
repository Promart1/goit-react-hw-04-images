import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  // state = {
  //   name: '',
  // };

  const [name, setName] = useState('');

  const handleInput = event => {
    setName(event.currentTarget.value.toLowerCase().trim());
  };
  const reset = () => {
    setName('');
  };
  const handleSubmit = event => {
    event.preventDefault();
    // const { name } = this.state;
    onSubmit(name);
    reset();
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <FiSearch />
        </button>

        <input
          onChange={handleInput}
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
