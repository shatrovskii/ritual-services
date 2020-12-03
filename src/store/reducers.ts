export const Pages = {
	START_STAGE : 'start_stage',
	PARTICIPANTS_COUNT_STAGE : 'participants_count_stage',
	MOOD_SELECTION_STAGE : 'mood_selection_stage',
	RETRO_BUILD_STAGE : 'retro_build_stage',
	EXECUTION_STAGE : 'execution_stage',
	FEEDBACK_STAGE : 'feedback_stage',
}

const initialState = {
	currentPage: Pages.START_STAGE
};

//action creators
export const setPage = (payload) => ({
	type: 'SET_PAGE',
	payload
});


export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PAGE':
			return {...state, currentPage: action.payload};
		default: return state;
	}
}
