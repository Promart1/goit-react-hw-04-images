import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import * as GetImg from '../service/getImg';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

import css from './App.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
// import { Modal } from './Modal/Modal';

export const App = () => {
  // state = {
  //   images: [],
  //   name: '',
  //   page: 1,
  //   isEmpty: true,
  //   isVisible: false,
  //   error: null,
  //   isLoading: false,
  //   showModal: false,
  //   selectedImage: null,
  // };

  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // if (name && page > 1) {
    //   getPhoto(name, page);
    // }
    getPhoto(name, page);
  }, [name, page]);

  const onSubmit = value => {
    setImages([]);
    setName(value);
    setPage(1);
    setIsEmpty(true);
    setIsVisible(false);
    setError(null);
  };

  const getPhoto = async (name, page) => {
    if (!name) {
      return;
    }
    setIsLoading(true);
    try {
      const { hits, totalHits } = await GetImg.getImages(name, page);
      if (hits === 0) {
        setIsEmpty(true);
      }
      setImages(prevImages => [...prevImages, ...hits]);
      setIsEmpty(false);
      setIsVisible(Math.ceil(totalHits / 12));
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // const { images, isEmpty, isVisible, error, isLoading } = this.state;

  return (
    <div className={css.app}>
      <Searchbar onSubmit={onSubmit} />
      {isEmpty && <p className={css.text}>Sorry, there are no images...</p>}
      {error && <p className={css.text}>Sorry, {error}</p>}
      <ImageGallery images={images} />
      {isVisible && (isLoading ? <Loader /> : <Button onClick={onLoadMore} />)}
    </div>
  );
};
