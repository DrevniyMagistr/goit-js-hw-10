import {settings} from './api/settings';
const { apiUrl, requestParam } = settings;

export const fetchCountries = name => {
  return fetch(`${apiUrl}/name/${name}?fields=${requestParam}`).then(response => {
    if (!response.ok) {
      return response.json().then(error => Promise.reject(error));
    }
    return response.json();
  });
};
