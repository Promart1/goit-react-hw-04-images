import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from '../ImageGallery/ImageGallery.module.css';
export function ImageGallery({ images }) {
  return (
    <ul className={css.imageGallery}>
      {images &&
        images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              smallImg={image.webformatURL}
              description={image.tags}
              bigImg={image.largeImageURL}
            />
          );
        })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
