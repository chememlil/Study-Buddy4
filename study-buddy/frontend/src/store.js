import { createStore } from 'redux';

const initialState = {
    user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'LOGOUT':
            return { ...state, user: null };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
