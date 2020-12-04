import * as React from 'react'
import {connect} from 'react-redux'
import {SidebarLayout} from 'components/layout'
import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'
import {Pages} from 'components/pages-container/constants'
import emoji from 'react-easy-emoji'
import {RitualState} from 'store/reducers'
import FrameworkCard from 'components/framework-card'

type Props = {
	changePage: (page: Pages) => {};
	ritual: RitualState;
};

class RetroBuildStage extends React.Component<Props> {
	completeStage = () => {
		this.props.changePage(Pages.EXECUTION_STAGE)
	}

	render() {
		return (
			<SidebarLayout>
				<h1 className="h2">New retrospective</h1>
				<p className="p-large">Awesome! Your team's choice:</p>
				<p className="p-large">
          	<span className="column-50">
        		<span>Ease:</span>
        	  	<span>{emoji(`${this.props.ritual.ease?.img}`)}</span>
          	</span>
					<span className="column-50">
        		<span>Mood:</span>
        		<span>{emoji(`${this.props.ritual.mood?.img}`)}</span>
        	</span>
				</p>
				<p className="framework-list">
					<FrameworkCard description="Genie in a bottle"/>
					<FrameworkCard description="Wish granted"/>
					<FrameworkCard description="Chaos coctail party"/>
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

const mapStateToProps = state => {
	return {
		ritual: state.ritual
	}
}

export default connect(mapStateToProps)(RetroBuildStage)
