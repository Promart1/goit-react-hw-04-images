import React from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { useState } from 'react';

export const ImageGalleryItem = ({ smallImg, description, bigImg }) => {
  // state = {
  //   showModal: false,
  // };
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // const { smallImg, description, bigImg } = this.props;
  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItemIimage}
        src={smallImg}
        alt={description}
        onClick={openModal}
      />
      {showModal && <Modal onClose={closeModal} url={bigImg} />}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
};
