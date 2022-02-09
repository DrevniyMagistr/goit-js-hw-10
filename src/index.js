import { fetchCountries } from './js/fetchCountries';
import { onMarkupCards, onReset } from './js/markupCard';
import { refs } from './js/getRefs';
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const onSearchCounty = e => {
  e.preventDefault();
  let inputResult = e.target.value.trim();

  fetchCountries(inputResult)
    .then(onMarkupCards)
    .catch(Notify.failure('Oops, there is no country with that name'));

  if (!inputResult) {
    onReset();
  }
};

refs.input.addEventListener('input', debounce(onSearchCounty, DEBOUNCE_DELAY));
