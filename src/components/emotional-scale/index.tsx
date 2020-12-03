import * as React from 'react'
import emoji from 'react-easy-emoji'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'


export const EmotionalScale = ({options = [], columnAlign = false}) => {
	return <div className={classNames({'emotional-scale': true, 'emotional-scale--column': columnAlign})} >
		{options.map(option =>
			<div className="emotional-scale__item">
				{emoji(`${option.img}`)}
				<div className="emotional-scale__item-label">{option.label}</div>
			</div>)}
	</div>
}