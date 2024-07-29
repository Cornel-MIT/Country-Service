import axios from 'axios';

// const BASE_URL = 'https://restcountries.com/v3.1';

const API_URL = 'https://restcountries.com/v3.1';

// export const getAllCountries = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/all`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching countries:', error);
//     throw error;
//   }
// };

const getAllCountries = () => {
  return axios.get(`${API_URL}/all`);
};

const getCountriesByRegion = (region) => {
  return axios.get(`${API_URL}/region/${region}`);
};

const getCountry = (countryName) =>{
  return axios.get(`${API_URL}/name/${countryName}`)
}

export default {
  getAllCountries,
  getCountriesByRegion,
  getCountry
};
