import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as actions from '../../store/actions/index';

class Data extends React.Component {
  state = {
    loading: true,
    person: []
  };

  async componentDidMount() {
    const url = "https://anapioficeandfire.com/api/characters/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const dataArr = data.map(res => <li key={res.name}>{data}</li>)
    this.setState({person: dataArr} , {loading: false });
    console.log(this.state);
  }

  
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        {/* <div>{this.state.person.aliases[0]}</div> */}
        <div>{this.state.person}</div>
        {/* <div>{this.state.person.name.last}</div>
        <img alt="" src={this.state.person.picture.large} /> */}
      </div>
    );
  }
}

export default Data;