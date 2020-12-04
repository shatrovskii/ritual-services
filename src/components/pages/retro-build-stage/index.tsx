import * as React from 'react'
import {connect} from 'react-redux'
import {SidebarLayout} from 'components/layout'
import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'
import {Pages} from 'components/pages-container/constants'
import emoji from 'react-easy-emoji'
import {RitualState, setPage} from 'store/reducers'

type Props = {
	changePage: (page: Pages) => {};
	ritual: RitualState;
}

export class RetroBuildStage extends React.Component<Props> {
	completeStage = () => {
		this.props.changePage(Pages.EXECUTION_STAGE)
	}

	render() {
		return (
			<SidebarLayout>
				<h1 className="h2">New retrospective</h1>
				<p className="p-large">Awesome! Your team's choice:</p>
				<p className="p-large">
          <span>
            <span>Ease:</span>{emoji(`${this.props.ritual.ease?.img}`)}
          </span>
			<span>
				<span>Mood:</span>{emoji(`${this.props.ritual.mood?.img}`)}
			</span>
				</p>
				<button
					className={classNames('button', 'button-primary')}
					onClick={this.completeStage}
				>
					Let's go
				</button>
			</SidebarLayout>
		)
	}
}

const mapStateToProps = state => ({
	ritual: state.ritual
})

export default connect(
	mapStateToProps,
	{
		setPage
	}
)(RetroBuildStage)
