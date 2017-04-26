import React from 'react';
import TextInput from '../common/TextInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';

import './login-page.css';

class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {username: '', password: ''}};
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  }

  render() {
    return(
      <div className="login-page">
        <div className="col-md-6 col-md-offset-3">
          <h1>Login</h1>
          <form>
            < TextInput
              name="username"
              label="Username"
              value={this.state.credentials.username}
              onChange={this.onChange}/>

            <div className="form-group">
              <label>Password</label>
              <div className="field">
                < input
                  className="form-control"
                  name="password"
                  label="password"
                  type="password"
                  value={this.state.credentials.password}
                  onChange={this.onChange}/>
              </div>
            </div>

            < input
              type="submit"
              className="btn btn-primary"
              onClick={this.onSave}/>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(LogInPage);