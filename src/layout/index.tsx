import React from 'react'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'

export const SidebarLayout = ({children}) => {
	// const [state, setState] = React.useState({boardTitle: ''})

	//show different content to facilitator and participants
	return (
		<div className={classNames('sidebar')}>
			{children}
			<div className={classNames('sidebar__footer')}>
				<div className="icon icon-arrow-right"></div>
			</div>
		</div>
	)
}