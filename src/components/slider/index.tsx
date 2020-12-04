import * as React from 'react'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'

type SliderItemProps = {
	label: string,
	isActive?: boolean
}

type SliderProps = {
	items: Array<{id: number, label: string}>,
	onClick: (string) => void,
	initialValueId?: number | null
}
const SliderItem = ({label, isActive = false}: SliderItemProps) =>
	<React.Fragment>
		<div className={classNames({'slider-item': true, 'slider-item--active': isActive})}>{label}</div>
	</React.Fragment>

const Slider = ({items, onClick, initialValueId = null}: SliderProps) => {
	const [selectedItemId, setSelectedItemId] = React.useState(initialValueId || items[0].id);

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
