import React, {Component} from 'react'
import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'

export class FormatSelectionComponent extends Component {
	render() {
		return (
			<div>
				<h1 className="h1">Choose retro format</h1>
				<button className={classNames('button', 'button-primary')} onClick={() => console.log('Click!')}>Click</button>
			</div>
		)
	}
}

