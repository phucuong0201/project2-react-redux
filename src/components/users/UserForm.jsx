import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const UserForm = ({user, groups, onChange, onSave}) => {

  let gender = "";
  (user.gender === 1) ? gender = "Male" : gender = "Female";

  return(
    <form>
      <h1>Manage Users</h1>
      <TextInput
        name="username"
        label="username"
        value={user.username}
        onChange={onChange}
      />

      <TextInput
        name="name"
        label="Name"
        value={user.name}
        onChange={onChange}
      />

      <TextInput
        name="email"
        label="Email"
        value={user.email}
        onChange={onChange}
      />

      <TextInput
        name="password"
        label="Password"
        value={user.password}
        onChange={onChange}
      />

      <TextInput
        name="phonenumber"
        label="Phone Number"
        value={user.phonenumber}
        onChange={onChange}
      />

      <TextInput
        name="gender"
        label="Gender"
        value={gender}
        onChange={onChange}
      />

      <SelectInput
        name="groupname"
        label="groups"
        value={groups.id}
        defaultOption="Select Groups"
        options={groups}
        onChange={onChange}
      />

      <input type="submit"
             value="Submit"
             className="btn btn-primary"
             onClick={onSave}
      />
    </form>
  )
}

export default UserForm;
