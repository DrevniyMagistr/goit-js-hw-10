const URL = 'https://restcountries.com/v3.1/name';

export const fetchCountries = name => {
  return fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`).then(response => {
    if (!response) {
      return res.json().then(error => Promise.reject(error));
    }
    return response.json();
  });
};
