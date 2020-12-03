import React, {Component} from 'react'
import {SidebarLayout} from '../../layout'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'

export class FormatSelectionComponent extends Component {
	render() {
		return (
			<SidebarLayout>
				<h1 className="h1">Choose retro format</h1>
				<button className={classNames('button', 'button-primary')} onClick={() => console.log('Click!')}>Click</button>
			</SidebarLayout>
		)
	}
}

