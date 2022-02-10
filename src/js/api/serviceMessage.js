import { Notify } from 'notiflix';

export const wrongMessage = () => {
  Notify.failure('Oops, there is no country with that name');
};
export const infoMessage = () =>
  Notify.info('Too many matches found. Please enter a more specific name');
