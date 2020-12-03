import * as React from 'react'
import {SidebarLayout} from '../../layout'
import {Pages} from '../pages-container/constants'
import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'
import {EmotionalScale} from '../../components/emotional-scale'

const hardnessOptions = [
	{
		id: 0,
		label: "easy",
		img: '😏'
	},
	{
		id: 1,
		label: "whatever",
		img: '🙃'
	},
	{
		id: 2,
		label: "hard",
		img: '😖'
	}];

const moodOptions = [
	{
		id: 0,
		label: "overwhelmed",
		img: '🙇‍'
	},
	{
		id: 1,
		label: "low-energy",
		img: '😴'
	},
	{
		id: 2,
		label: "balanced",
		img: '🧘‍'
	},
	{
		id: 2,
		label: "high-energy",
		img: '🏋‍'
	},
	{
		id: 2,
		label: "excited",
		img: '🤩'
	}];

export class MoodSelectionStage extends React.Component {
	generateRandomTemplates = () => {
		const {changePage} = this.props;
		//fetch templates
		changePage(Pages.RETRO_BUILD_STAGE)
	}

	completeSelectionStage = () => {
		const {changePage} = this.props;
		//get templates by choices
		changePage(Pages.RETRO_BUILD_STAGE)
	}

	render() {
		console.log('123')
		return (
			<SidebarLayout>
				<h1 className="h2">New retrospective</h1>
				<div className="form-group">
					<p className="p-large">How hard are you ready your retro to be?</p>
					<EmotionalScale options={hardnessOptions}/>
				</div>
				<div className="form-group">
					<p className="p-large">How do you feel today?</p>
					<EmotionalScale options={moodOptions} columnAlign={true}/>
				</div>
				<button className={classNames('button', 'button-primary')} onClick={this.completeSelectionStage}>Surprise me!</button>
				<button className={classNames('button', 'button-secondary')} onClick={this.generateRandomTemplates}>I'm done</button>
			</SidebarLayout>
		)
	}
}

