import * as React from 'react'
import {connect} from 'react-redux'

import {Pages, setPage} from '../../store/reducers'
import StartStage from '../start-stage'
import {ParticipantsCountStage} from '../participants-count-stage'

class PagesContainer extends React.Component {
	changePage = (value) => {
		const {setPage} = this.props;
		setPage(value);
	}
	getPage = (type) => {
		const containers = new Map([
			[Pages.START_STAGE, <StartStage changePage={this.changePage}/>],
			[Pages.PARTICIPANTS_COUNT_STAGE, <ParticipantsCountStage />],
			// [Pages.GENERAL_SETTINGS, <FormatSelectionComponent />],
			// [Pages.GENERAL_SETTINGS, <FormatSelectionComponent />],
			// [Pages.GENERAL_SETTINGS, <FormatSelectionComponent />],
		]);

		return containers.get(type) || null;
	};

	render() {
		const {currentPage} = this.props;

		return (
			<React.Fragment>{this.getPage(currentPage)}</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	currentPage: state.currentPage
})

export default connect(
	mapStateToProps,
	{
		setPage
	}
)(PagesContainer)

