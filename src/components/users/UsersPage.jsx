import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import UserList from './UserList';

class UsersPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.redirectToCreateUserPage = this.redirectToCreateUserPage.bind(this);
  }

  redirectToCreateUserPage() {
    browserHistory.push("/user");
  }

  render() {
    const {users} = this.props;
    return(
      <div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1>Users List</h1>
            <button className="btn btn-inverse"
                    onClick={this.redirectToCreateUserPage}>Add User</button>
          </div>
        </div>
        <br/>
        <UserList users={users}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users //LEFT: WHAT WE WANT IN THIS COMPONENT; RIGHT: WHAT IN ROOT REDUCER
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);