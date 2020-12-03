import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'

import {Pages, setPage} from '../../store/reducers'
import WelcomePage from '../welcome-page'
import {FormatSelectionComponent} from '../format-selection'

class PagesContainer extends Component {
	getPage = (type) => {
		const containers = new Map([
			[Pages.WELCOME_PAGE, <WelcomePage />],
			[Pages.GENERAL_SETTINGS, <FormatSelectionComponent />],
			// [Pages.GENERAL_SETTINGS, <FormatSelectionComponent />],
			// [Pages.GENERAL_SETTINGS, <FormatSelectionComponent />],
			// [Pages.GENERAL_SETTINGS, <FormatSelectionComponent />],
		]);

		return containers.get(type) || null;
	};

	render() {
		const {currentPage} = this.props;

		return (
			<Fragment>{this.getPage(currentPage)}</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	currentPage: state.currentPage
})

const mapDispatchToProps = {setPage}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PagesContainer)

