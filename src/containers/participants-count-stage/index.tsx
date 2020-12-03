import * as React from 'react'
import {SidebarLayout} from '../../layout'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'
import {Person} from "../../models";
import {DataStore} from "@aws-amplify/datastore";

export class ParticipantsCountStage extends React.Component {
	render() {
		return (
			<SidebarLayout>
				<h1 className="h2">Choose retro format</h1>
				<button className={classNames('button', 'button-primary')} onClick={this.handleCreateClick}>Create</button>
				<button className={classNames('button', 'button-primary')} onClick={this.handleReadClick}>Read</button>
			</SidebarLayout>
		)
	}

	async handleCreateClick() {
		await DataStore.save(new Person({
			miroUserId: 123
		}))
	}

	async handleReadClick() {
		let persons = await DataStore.query(Person)
		console.log(persons)
	}
}

