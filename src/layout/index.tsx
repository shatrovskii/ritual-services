import * as React from 'react'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'

export const SidebarLayout = ({children}) => {
	return (
		<div className={classNames('layout')}>
			{children}
			<div className={classNames('layout__footer')}>
				<div className="icon icon-arrow-right" />
			</div>
		</div>
	)
}