import * as React from 'react'
import {SidebarLayout} from '../../layout'

import classNames from 'classnames'
import 'mirotone/dist/styles.css'
import './styles.less'
import {Person} from "../../models";
import {API, graphqlOperation, Amplify} from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";

export class ParticipantsCountStage extends React.Component {
    render() {
        return (
            <SidebarLayout>
                <h1 className="h2">Choose Retro Format</h1>
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

