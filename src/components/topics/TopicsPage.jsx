import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as topicActions from '../../actions/topicActions';

class TopicsPage extends React.Component {
  render() {
    const {topics} = this.props;
    return (
      <div>
        <h1>Topic List</h1>
        {topics.map((topic, index) => <div key={index}>{topic.description}</div> )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    topics: state.topics
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(topicActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsPage);