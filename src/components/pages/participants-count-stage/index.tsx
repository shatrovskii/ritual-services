import * as React from "react";
import {connect} from 'react-redux'
import { SidebarLayout } from "components/layout";

import classNames from "classnames";
import "mirotone/dist/styles.css";
import "./styles.less";
import { Person } from "models";
import { API, graphqlOperation, Amplify } from "aws-amplify";
import * as queries from "graphql/queries";
import * as mutations from "graphql/mutations";
import Slider from "components/slider";
import { Pages } from "components/pages-container/constants";
import {setPage, setGroupSize, setRitualTime} from 'store/reducers'

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
  }
];

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
  }
];

type Props = {
    setPage: (page: Pages) => {};
    setGroupSize: (string) => {};
    setRitualTime: (string) => {};
};

class ParticipantsCountStage extends React.Component<Props> {
    state = {
        groupSize: null,
        availableTime: null,
        name: ''
    }

    handleSelect = item => {
        console.log("handle select", item);
    };

  handleSubmit = () => {
      const {setPage, setGroupSize, setRitualTime} = this.props

      setGroupSize(this.state.groupSize);
      setRitualTime(this.state.availableTime);
      setPage(Pages.MOOD_SELECTION_STAGE);
  }

  render() {
    return (
      <SidebarLayout>
        <h1 className="h2">New retrospective</h1>
        <div className="form-group">
          <label>Name</label>
          <input className="input" type="text" placeholder="Enter something"
                 value={ this.state.name }
                 onChange={ (e) => this.setState({name: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Time frame (min)</label>
          <Slider items={timeOptions} onClick={this.handleSelect} initialValueId={0}/>
        </div>
        <div className="form-group">
          <label>Group size</label>
          <Slider items={groupSizeOptions} onClick={this.handleSelect} initialValueId={0}/>
        </div>
        <button
          className={classNames("button", "button-primary")}
          onClick={this.handleSubmit}
        >
          Start and summon everyone
        </button>
      </SidebarLayout>
    );
  }

  // async handleCreateClick() {
  //   const person = await Amplify.DataStore.save(
  //     new Person({
  //       miroUserId: 985678
  //     }),
  //     person => person.miroUserId("ne", 0)
  //   );
  //   console.log("created person: ", person);
  // }

  // async handleReadClick() {
  //   let persons = await Amplify.DataStore.query(Person);
  //   console.log("retrieved persons: ", persons);
  // }
  //
  // async handleCreateClickGraphQL() {
  //   const person = await API.graphql(
  //     graphqlOperation(mutations.createPerson, {
  //       input: new Person({
  //         miroUserId: 1234321
  //       })
  //     })
  //   );
  //   console.log("created person: ", person);
  // }
  //
  // async handleReadClickGraphQL() {
  //   let persons = await API.graphql(graphqlOperation(queries.listPersons));
  //   console.log("retrieved persons: ", persons);
  // }
}


export default connect(
    null,
    {
        setPage,
        setGroupSize,
        setRitualTime
    }
)(ParticipantsCountStage)