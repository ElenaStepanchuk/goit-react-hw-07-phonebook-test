import axios from 'axios';
export const TrendingFilms = async page => {
  return await axios.get(`https://627e6e64271f386ceff80667.mockapi.io/`);
};
