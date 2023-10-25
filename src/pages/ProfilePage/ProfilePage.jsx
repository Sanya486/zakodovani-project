import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import TitlePage from 'components/TitlePage/TitlePage';
import User from 'components/User/User';
import UserCard from 'components/UserCard/UserCard';
import UserForm from 'components/UserForm/UserForm';
import React from 'react';
import css from './ProfilePage.module.scss'
// import PropTypes from 'prop-types'

const ProfilePage = () => {
  return <div >
    <TitlePage>Profile Settings</TitlePage>
    <User/>
    <UserCard/>
    <LogoutBtn classes={css.logoutBtn}/>
    <UserForm/>
  </div>;
};

// ProfilePage.propTypes = {

// }

export default ProfilePage;
