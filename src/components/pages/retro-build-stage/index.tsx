import * as React from 'react'
import {connect} from 'react-redux'
import {SidebarLayout} from 'components/layout'
import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'
import {Pages} from 'components/pages-container/constants'
import emoji from 'react-easy-emoji'
import {RitualState} from 'store/reducers'
import FrameworkCard, {FrameworkCardType} from 'components/framework-card'

type Props = {
	changePage: (page: Pages) => {};
	ritual: RitualState;
};

function addTemplate() {
	fetch('https://api.miro.com/v1/boards/o9J_lc14pJ4=/widgets/', {
		'method': 'GET',
		'headers': {
			'authorization': 'Bearer f4b42cbd-33d6-4164-bc9e-dda0797dc1fe'
		}
	})
		.then(response => {
			console.log(response)
		})
		.catch(err => {
			console.error(err)
		})
}

class RetroBuildStage extends React.Component<Props> {
	completeStage = () => {
		addTemplate()
		//this.props.changePage(Pages.EXECUTION_STAGE)
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
					<FrameworkCard title="Genie in a bottle" type={FrameworkCardType.GATHER_DATA}/>
					<FrameworkCard title="Wish granted" type={FrameworkCardType.GENERATE_INSIGHTS}/>
					<FrameworkCard title="Chaos coctail party" type={FrameworkCardType.DECIDE_WHAT_TO_DO}/>
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
