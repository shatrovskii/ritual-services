import {Pages} from '../containers/pages-container/constants'

const initialState = {
	currentPage: Pages.START_STAGE
};

//action creators
export const setPage = (payload) => ({
	type: 'SET_PAGE',
	payload
});

//middlewares
export const test = () => (
	dispatch,
	getState
) => {
	dispatch();
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PAGE':
			return {...state, currentPage: action.payload};
		default: return state;
	}
}
