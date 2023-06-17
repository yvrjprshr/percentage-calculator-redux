import {createStore} from 'redux';
import reducerFunction from '../reducers/reducerFunction';

const store = createStore(reducerFunction);

export default store;