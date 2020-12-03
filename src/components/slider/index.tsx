import * as React from 'react'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'


const SliderItem = ({label, isActive = false}) =>
	<React.Fragment>
		<div className={classNames({'slider-item': true, 'slider-item--active': isActive})}>{label}</div>
		{isActive && <div className="slider-indicator" /> }
	</React.Fragment>

const Slider = ({items}) => {
	const [selectedItemId, setSelectedItemId] = React.useState(0);
	const selectItem = (id: number) => {
		console.log('id=', id)
		setSelectedItemId(id)
	}

	const isActive = (id: number): boolean => selectedItemId === id

	return (
		<div className="slider-wrapper">
			<div className="slider">
				{items.map(({id,label})=>
					<div className="slider-header" onClick={() => selectItem(id)}>
						<SliderItem label={label} isActive={isActive(id)}/>
					</div>
				)}
			</div>
		</div>
	)
}


export default Slider
