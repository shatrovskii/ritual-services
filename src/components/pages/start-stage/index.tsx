import * as React from 'react'
import {SidebarLayout} from 'components/layout'
import {Pages} from 'components/pages-container/constants'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'
import {initBoard, updateBoard} from "../../../datastorage/datastore";
import {Person, RetroBoard, StageType} from "../../../datastorage";

type Props = {
    changePage: (page: Pages) => {};
};

export class StartStage extends React.Component<Props> {
    async startRetro() {
        this.props.changePage(Pages.PARTICIPANTS_COUNT_STAGE)

        const initiator: Person = {
            miroUserId: await miro.currentUser.getId()
        }
        const board: RetroBoard = {
            activeRitual: {
                stage: StageType.RETRO_BUILD,
                name: 'Retrospective',
                date:  new Date().toDateString(),
                initiator: initiator,
                participants: [initiator]
            }
        }
        await updateBoard(board)
    }

    render() {
        return (
            <SidebarLayout>
                <h1 className="h2">Retro Buddy</h1>
                <div className="widget-description">Planning your next agile retrospective? Start with a checking the mood of the team to get guided experience!</div>
                <button className={classNames('button', 'button-primary')} onClick={() => this.startRetro()}>Start instant retrospective</button>
                <button className={classNames('button', 'button-secondary')} disabled onClick={() => alert('Start retro')}>Plan retrospective for later</button>
            </SidebarLayout>
        )
    }
}
