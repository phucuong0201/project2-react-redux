import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { loadUsers } from './actions/userActions';
import { loadTopics } from './actions/topicActions';
import { loadGroups } from './actions/groupActions';
import { loadCvs } from './actions/cvActions';
import { loadTeachers } from './actions/teacherActions';

const store = configureStore();
store.dispatch(loadUsers());
store.dispatch(loadTopics());
store.dispatch(loadCvs());
store.dispatch(loadGroups());
store.dispatch(loadTeachers());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
