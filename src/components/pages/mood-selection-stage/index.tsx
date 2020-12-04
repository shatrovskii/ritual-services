import * as React from 'react'
import {connect} from 'react-redux'
import {SidebarLayout} from 'components/layout'
import {Pages} from 'components/pages-container/constants'
import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'
import EmojiOption from 'components/emotional-scale/emoji-option'
import {EmotionalScale} from 'components/emotional-scale'
import {setPage, setUserMood, setRetroHardness} from 'store/reducers'

const hardnessOptions: EmojiOption[] = [
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

const moodOptions: EmojiOption[] = [
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
		id: 3,
		label: "high-energy",
		img: '🏋‍'
	},
	{
		id: 4,
		label: "excited",
		img: '🤩'
	}];

type Props = {
	setPage: (page: Pages) => {};
	setUserMood: (string) => {};
	setRetroHardness: (string) => {};
};

class MoodSelectionStage extends React.Component<Props> {
	generateRandomTemplates = () => {
		const {setPage} = this.props;
		//fetch templates
		setPage(Pages.RETRO_BUILD_STAGE)
	}

	completeSelectionStage = () => {
		const {setPage} = this.props;
		//get templates by choices
		setPage(Pages.RETRO_BUILD_STAGE)
	}

	selectEmotion = (item) => {
		const {setUserMood} = this.props;
		setUserMood(item)
	}

	selectEase = (item) => {
		const {setRetroHardness} = this.props;
		setRetroHardness(item)
	}

	render() {
		return (
			<SidebarLayout>
				<h1 className="h2">New retrospective</h1>
				<div className="form-group">
					<p className="p-large">How hard are you ready your retro to be?</p>
					<EmotionalScale options={hardnessOptions} onClick={this.selectEmotion}/>
				</div>
				<div className="form-group">
					<p className="p-large">How do you feel today?</p>
					<EmotionalScale options={moodOptions} columnAlign={true} onClick={this.selectEase}/>
				</div>
				<button className={classNames('button', 'button-primary')} onClick={this.completeSelectionStage}>Surprise me!</button>
				<button className={classNames('button', 'button-secondary')} onClick={this.generateRandomTemplates}>I'm done</button>
			</SidebarLayout>
		)
	}
}

export default connect(
	null,
	{
		setPage,
		setUserMood,
		setRetroHardness
	}
)(MoodSelectionStage)

