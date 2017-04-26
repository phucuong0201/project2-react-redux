import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import UserForm from './UserForm';
import { browserHistory } from 'react-router';

class ManageUserPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, this.props.user),
      errors: {}
    }
    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);

  }

  updateUserState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user})
  }

  saveUser(event) {
    event.preventDefault();
    this.props.actions.saveUser(this.state.user);
    browserHistory.push("/users");
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <UserForm
          groups={this.props.groups}
          user={this.state.user}
          onSave={this.saveUser}
          onChange={this.updateUserState}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const userId = parseInt(ownProps.params.id, 10);

  let user = {
    username: "", name: "", email: "", gender: "",
    password: "", phonenumber: "", groupname: "", lock: "", status: ""
  }

  if (userId) {
    user = state.users.find(user => user.id === userId);
  }

  const groupsFormattedForDropDown = state.groups.map(group => {
    return {
      value: group.id,
      text: group.name
    };
  });

  return {
    user: user,
    groups: groupsFormattedForDropDown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);