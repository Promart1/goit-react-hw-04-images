import axios from 'axios';

const KEY = '35723432-df7b45da1818f873f544fd3bd';
const BASE_URL = 'https://pixabay.com/api/';

export const getImages = async (name, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const data = response.data;
  return data;
};
