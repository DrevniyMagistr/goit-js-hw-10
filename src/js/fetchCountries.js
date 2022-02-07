const URL = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;


export function fetchCountries(name) {
  return fetch(URL).then(response => response.json());
}
