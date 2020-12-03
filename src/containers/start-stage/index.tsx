import * as React from 'react'
import {SidebarLayout} from '../../layout'
import {Pages} from '../pages-container/constants'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'

const StartStage = ({changePage}) => {
  return (
    <SidebarLayout>
        <h1 className="h2">Retro Buddy</h1>
        <div className="widget-description">Planning your next agile retrospective? Start with a checking the mood of the team to get guided experience!</div>
        <button className={classNames('button', 'button-primary')} onClick={() => changePage(Pages.PARTICIPANTS_COUNT_STAGE)}>Start instant retrospective</button>
        <button className={classNames('button', 'button-secondary')} disabled onClick={() => alert('Start retro')}>Plan retrospective for later</button>
    </SidebarLayout>
  )
}

export default StartStage
