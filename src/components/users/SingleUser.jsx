import React from 'react';
import { Link } from 'react-router';
import './single-user.css';

const SingleUser = ({user}) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={require('./img_avatar2.png')} alt="Avatar"/>
          <h4><Link to={'/user/' + user.id}>{user.username}</Link></h4>
          <p>{user.email}</p>
      </div>
    </div>
  )
}

export default SingleUser;