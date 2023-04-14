import React, { useState } from 'react';
import { usersInfo } from '../data/userInfo';

export default function Main() {
  // I see atleast three different componenets here, can you try to break it down
  const [search, setSearch] = useState('');

  const filteredUsers = usersInfo.filter((item) =>
    search.toLowerCase() === '' ? item : // you can use "item" instead of true
      item.firstName.toLowerCase().startsWith(search.toLowerCase()) || // remember that you are searching for a name, meaning the search value has to be the begiining of the name, startsWith is more effective than includes at this point
      item.lastName.toLowerCase().startsWith(search.toLowerCase()) 
    // item.id.toString().toLowerCase().includes(search.toLowerCase())
    // item.title.toString().toLowerCase().includes(search.toLowerCase())
  );


  const renderUsers = filteredUsers.map((user, index) => {
    const usersInfo = `${user.title}. ${user.firstName}. ${user.lastName}`;
    return (
      <div className='userBlock' key={index}>
        <div className='displayPicture'>
          <img src={user.picture} alt='' />
        </div>
        <div className='userDetails'>
          <p>{user.id}</p>
          <p className='userProfile'>{usersInfo}</p>
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
