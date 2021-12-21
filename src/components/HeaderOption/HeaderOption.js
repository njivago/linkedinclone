import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function HeaderOption({ avatar, title, Icon, onClick }) {
  const user = useSelector(selectUser);
  let url = '';
  if (user) {
    if (user.photoURL !== null) url = user.photoURL;
  }

  return (
    <div onClick={onClick} className="header-option">
      {Icon && <Icon className="header-option__icon" />}
      {avatar && (
        <Avatar src={url} className="header-option__icon">
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="header-option__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
