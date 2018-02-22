import createStore from "redux-zero";

const initialState = {
	episodes: null,
	index: null
};

const store = createStore(initialState);

export default store;