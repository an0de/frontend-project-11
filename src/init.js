import 'bootstrap';
import yup from 'yup';
import i18next from 'i18next';
import axios from 'axios';
import onChange from 'on-change';
import initRender from './render.js';
import elements from './elements.js';

export default () => {
  const initState = {};
  const i18nextInstance = i18next.createInstance();
  i18nextInstance.init();
  const render = initRender(elements, i18nextInstance);
  const watchedState = onChange(initState, render);
}
