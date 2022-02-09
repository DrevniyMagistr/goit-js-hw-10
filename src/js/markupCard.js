import listOfCountries from '../templates/countriesList.hbs';
import countryCard from '../templates/countryCard.hbs';
import { refs } from './getRefs';
import { Notify } from 'notiflix';

export const onReset = () => {
  refs.aboutCountry.textContent = '';
  refs.listCountry.textContent = '';
};

const infoMessage = () => Notify.info('Too many matches found. Please enter a more specific name');

export const onMarkupCards = country => {
  onReset();
  const markupList = refs.listCountry.insertAdjacentHTML('beforeend', listOfCountries(country));
  const markupCard = refs.aboutCountry.insertAdjacentHTML('beforeend', countryCard(country));

  const sumCountries = country.length;

  if (sumCountries >= 10) {
    infoMessage();
  }
  if (sumCountries > 2 && sumCountries < 10) {
    markupList;
  }
  if (sumCountries === 1) {
    markupCard;
  }
};
