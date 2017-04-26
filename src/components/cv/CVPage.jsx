import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../../actions/cvActions';

class CVPage extends React.Component {
  render() {
    const {cvs} = this.props;
    return (
      <div>
        <h1>CV List</h1>
        {cvs.map((cv, index) => <div key={index}>{cv.name}</div> )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    cvs: state.cvs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cvActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CVPage);