import React, { useEffect } from "react";
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import * as actions from '../../store/actions/index';

const Data = props => {
  const {onRequestApiData} = props;

  useEffect(() =>  {
    onRequestApiData();
  }, [onRequestApiData]);
  
    return (
      <ul>
        {props.data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
}

const mapStateToProps = state => {
  return {
    data: state.data.slice(0,10) 
  }
};

const mapDispatchToProps = dispatch => {
  return {
  onRequestApiData: () => dispatch( actions.requestApiData())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
