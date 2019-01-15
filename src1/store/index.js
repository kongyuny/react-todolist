import { createStore } from 'redux';
import reduer from './reduer.js';

const store = createStore(reduer);

export default store;