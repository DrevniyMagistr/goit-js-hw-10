import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { onMarkupCards, onReset } from './js/markupCard';
import { refs } from './js/getRefs';
import { wrongMessage } from './js/api/serviceMessage';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const onSearchCounty = e => {
  e.preventDefault();
  const inputResult = e.target.value.trim();

  fetchCountries(inputResult)
    .then(onMarkupCards)
    .catch(error => {
      wrongMessage();
      onReset();
    });

  if (!inputResult) {
    onReset();
    return;
  }
};

refs.input.addEventListener('input', debounce(onSearchCounty, DEBOUNCE_DELAY));
