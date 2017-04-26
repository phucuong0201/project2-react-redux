import React from 'react';
import SingleUser from './SingleUser';

const UserList = ({users}) => {
  return (
    <div className="col-md-8 col-md-offset-2">
      {users.map(user => <SingleUser key={user.id} user={user} />)}
    </div>
  )
}

export default UserList;