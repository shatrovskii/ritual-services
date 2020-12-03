export const Pages = {
	WELCOME_PAGE : 'welcome_page', //видит фасилитатор
	GENERAL_SETTINGS : 'general_settings',//видит фасилитатор
	OTHER_SETTINGS : 'other_settings',
	SUGGESTED_TEMPLATES : 'suggestes_templates',//видит фасилитатор
	SHOW_TIME : 'show_time',
	VOTING : 'voting',
	ACTIONS : 'actions',
}

// export enum Pages  {
// 	WELCOME_PAGE = 'welcome_page', //видит фасилитатор
// 	GENERAL_SETTINGS = 'general_settings',//видит фасилитатор
// 	OTHER_SETTINGS = 'other_settings',
// 	SUGGESTED_TEMPLATES = 'suggestes_templates',//видит фасилитатор
// 	SHOW_TIME = 'show_time',
// 	VOTING = 'voting',
// 	ACTIONS = 'actions',
// }


const initialState = {
	currentPage: Pages.WELCOME_PAGE
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
