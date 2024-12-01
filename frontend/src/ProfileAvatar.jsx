import React from 'react';

const ProfileAvatar = ({ seed }) => {
  const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?style=circle&&size=250&&seed=${seed}`;

  return <img src={avatarUrl} alt="User Avatar" />;
};

export default ProfileAvatar;