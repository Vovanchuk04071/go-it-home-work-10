import React from 'react';
import Profile from './Component/Profile';
import user from './user.json';
console.log(user);

const App = () => (
  <ul>
    <li>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </li>
  </ul>
);

export default App;
