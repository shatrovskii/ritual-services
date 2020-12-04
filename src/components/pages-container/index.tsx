import * as React from 'react'
import {connect} from 'react-redux'

import {setPage} from 'store/reducers'
import StartStage from 'components/pages/start-stage'
import {ParticipantsCountStage} from 'components/pages/participants-count-stage'
import {Pages} from 'components/pages-container/constants'
import {MoodSelectionStage} from 'components/pages/mood-selection-stage'
import {RetroBuildStage} from 'components/pages/retro-build-stage'

class PagesContainer extends React.Component {
	changePage = (value) => {
		const {setPage} = this.props;
		setPage(value);
	}
	getPage = (type) => {
		const containers = new Map([
			[Pages.START_STAGE, <StartStage changePage={this.changePage}/>],
			[Pages.PARTICIPANTS_COUNT_STAGE, <ParticipantsCountStage changePage={this.changePage}/>],
			[Pages.MOOD_SELECTION_STAGE, <MoodSelectionStage changePage={this.changePage} />],
			[Pages.RETRO_BUILD_STAGE, <RetroBuildStage changePage={this.changePage} />],
			// [Pages.EXECUTION_STAGE, <FormatSelectionComponent />],
			// [Pages.FEEDBACK_STAGE, <FormatSelectionComponent />],
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
