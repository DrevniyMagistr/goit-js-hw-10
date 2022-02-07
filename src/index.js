import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  listCountry: document.querySelector('.country-list'),
  aboutCountry: document.querySelector('.country-info'),
};


const onSearchCounty = (e) => {
  e.preventDefault();
  let inputResult = e.target.value.trim();
};


refs.input.addEventListener('input', debounce(onSearchCounty), DEBOUNCE_DELAY);

