import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import LogInPage from './components/login/LogInPage';
import AboutPage from './components/about/AboutPage';
import TeacherPage from './components/teachers/TeacherPage';
import TopicsPage from './components/topics/TopicsPage';
import UsersPage from './components/users/UsersPage';
import ManageUserPage from './components/users/ManageUserPage';
import NotFound from './components/not-found/NotFound';
import CVPage from './components/cv/CVPage';

export default  (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/teachers" component={TeacherPage}/>
    <Route path="/topics" component={TopicsPage}/>
    <Route path="/users" component={UsersPage}/>
    <Route path="/cvs" component={CVPage}/>
    <Route path="/user" component={ManageUserPage}/>
    <Route path="/user/:id" component={ManageUserPage}/>
    <Route path="/login" component={LogInPage}/>
    <Route path="*" component={NotFound}/>
  </Route>
);

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}