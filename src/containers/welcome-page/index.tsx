import React from 'react'
import {SidebarLayout} from '../../layout'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'

const WelcomePage = () => {
  return (
    <SidebarLayout>
        <h1 className="h1">Retro Buddy</h1>
        <div className="widget-description">Planning your next agile retrospective? Start with a checking the mood of the team to get guided experience!</div>
        <button className={classNames('button', 'button-primary')} onClick={() => alert('Start retro')}>Start instant retrospective</button>
        <button className={classNames('button', 'button-secondary')} onClick={() => alert('Start retro')}>Plan retrospective for later</button>
    </SidebarLayout>
  )
}

export default WelcomePage
