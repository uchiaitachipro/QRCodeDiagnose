import { combineReducers } from 'redux';

import login from './login/index';

const reducers = {
    login
};

export default combineReducers(reducers);