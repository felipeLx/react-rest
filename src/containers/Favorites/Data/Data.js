import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const post = React.memo(props => {
  
    useEffect(() => {
        props.getData();
    });

    return (
      <ul>
        {this.props.data.map(el => (
          <li key={el.name}>{el.name}</li>
        ))}
      </ul>
    );
});

function mapStateToProps(state) {
  return {
    data: state.remoteData.slice(0, 20)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(post);