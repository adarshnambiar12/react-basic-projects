import React from 'react'
import { use } from 'react';
import { useParams } from 'react-router';

const User = () => {

  const {username} = useParams();
  const user = username.charAt(0).toUpperCase() + username.slice(1);

  return (
    <div className='container'>
      Welcome {user}
    </div>
  )
}

export default User;
