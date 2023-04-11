import React, { useState } from 'react';
import { usersInfo } from '../data/userInfo';

export default function Main() {
  const [search, setSearch] = useState('');

  const filteredUsers = usersInfo.filter((item) =>
    search.toLowerCase() === '' ? true : item.firstName.toLowerCase().includes(search.toLowerCase())
  );

  const renderUsers = filteredUsers.map((user, index) => {
    const usersList = `${user.title}. ${user.firstName}. ${user.lastName}`;
    return (
      <div className='userBlock' key={index}>
        <div className='displayPicture'>
          <img src={user.picture} alt='' />
        </div>
        <div className='userDetails'>
          <p>{user.id}</p>
          <p className='userProfile'>{usersList}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <input
        type='search'
        placeholder='Search by name...'
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='userBlockSection'>{renderUsers}</div>
    </div>
  );
}
