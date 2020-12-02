import React from 'react'
import {SidebarLayout} from '../layout'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'

const WelcomePage = () => {
    // const [state, setState] = React.useState({boardTitle: ''})

    //show different content to facilitator and participants
  return (
    <SidebarLayout>
        <h1 className="h1">Retro wizard</h1>
        <button className={classNames('button', 'button-primary')} onClick={() => alert('Start retro')}>Start retro</button>
    </SidebarLayout>
  )
}

export default WelcomePage
