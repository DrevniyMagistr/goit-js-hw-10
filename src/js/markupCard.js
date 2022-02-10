import listOfCountries from '../templates/countriesList.hbs';
import countryCard from '../templates/countryCard.hbs';
import { refs } from './getRefs';
import { infoMessage } from './api/serviceMessage';

export const onReset = () => {
  refs.aboutCountry.textContent = '';
  refs.listCountry.textContent = '';
};

export const onMarkupCards = country => {
  onReset();

  const sumCountries = country.length;

  if (sumCountries > 10) {
    infoMessage();
  }
  if (sumCountries > 2 && sumCountries < 10) {
    refs.listCountry.insertAdjacentHTML('beforeend', listOfCountries(country));
  }
  if (sumCountries === 1) {
    refs.aboutCountry.insertAdjacentHTML('beforeend', countryCard(country));
  }
};
