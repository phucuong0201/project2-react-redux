import React from 'react';
import { Link } from 'react-router';
import './not-found.css';

const NotFound = () => {
  return(
    <div className="wrap">
      <div className="logo">
        <h1>404</h1>
        <p>Error occured! - File not Found</p>
        <div className="sub">
          <p><Link to="/">Back to Home</Link></p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;