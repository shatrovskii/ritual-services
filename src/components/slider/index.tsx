import * as React from 'react'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'


const SliderItem = ({label, isActive = false}) =>
	<React.Fragment>
		<div className={classNames({'slider-item': true, 'slider-item--active': isActive})}>{label}</div>
	</React.Fragment>

const Slider = ({items, onClick}) => {
	const [selectedItemId, setSelectedItemId] = React.useState(0);

	const handleClick = (item) => {
		setSelectedItemId(item.id)
		onClick && onClick(item.label)
	}

	const isActive = (id: number): boolean => selectedItemId === id

	return (
		<div className="slider-wrapper">
			<div className="slider">
				{items.map((item)=>
					<div className="slider-header" onClick={() => handleClick(item)}>
						<SliderItem label={item.label} isActive={isActive(item.id)}/>
					</div>
				)}
			</div>
		</div>
	)
}


export default Slider
