import React from 'react'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'

export const SidebarLayout = ({children}) => {
	return (
		<div className={classNames('sidebar')}>
			{children}
			<div className={classNames('sidebar__footer')}>
				<div className="icon icon-arrow-right"></div>
			</div>
		</div>
	)
}