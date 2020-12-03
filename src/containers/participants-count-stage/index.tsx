import * as React from 'react'
import {SidebarLayout} from '../../layout'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'
import {Person} from "../../models";
import {API, graphqlOperation, Amplify} from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import Slider from '../../components/slider'

const timeOptions = [
	{
		id: 0,
		label: "5-30"
	},
	{
		id: 1,
		label: "30-60"
	},
	{
		id: 2,
		label: "60-120"
	},
	{
		id: 3,
		label: "120+"
	}];

const groupSizeOptions = [
	{
		id: 0,
		label: "2-10"
	},
	{
		id: 1,
		label: "10-40"
	},
	{
		id: 2,
		label: "40+"
	}];

export class ParticipantsCountStage extends React.Component {
    render() {
        return (
		<SidebarLayout>
			<h1 className="h2">New retrospective</h1>
			<div className="form-group">
				<label>Name</label>
				<input className="input" type="text" placeholder="Enter something"/>
			</div>
			<div className="form-group">
				<label>Time frame (min)</label>
				<Slider items={timeOptions}/>
			</div>
			<div className="form-group">
				<label>Group size</label>
				<Slider items={groupSizeOptions}/>
			</div>
			<button className={classNames('button', 'button-primary')} onClick={() => console.log('Click!')}>Start and summon everyone</button>
            <button className={classNames('button', 'button-primary')} onClick={this.handleCreateClick}>Create
            </button>
            <button className={classNames('button', 'button-primary')} onClick={this.handleReadClick}>Read</button>
            <button className={classNames('button', 'button-secondary')}
                    onClick={this.handleCreateClickGraphQL}>Create Graph
            </button>
            <button className={classNames('button', 'button-secondary')} onClick={this.handleReadClickGraphQL}>Read
                Graph
            </button>
		</SidebarLayout>
        )
    }

    async handleCreateClick() {
        const person = await Amplify.DataStore.save(new Person({
            miroUserId: 985678
        }), (person) => person.miroUserId('ne', 0))
        console.log('created person: ', person)
    }

    async handleReadClick() {
        let persons = await Amplify.DataStore.query(Person)
        console.log('retrieved persons: ', persons)
    }

    async handleCreateClickGraphQL() {
        const person = await API.graphql(graphqlOperation(mutations.createPerson, {
                input: new Person({
                        miroUserId: 1234321
                    })
        }))
        console.log('created person: ', person)
    }

    async handleReadClickGraphQL() {
        let persons = await API.graphql(graphqlOperation(queries.listPersons))
        console.log('retrieved persons: ', persons)
    }
}

