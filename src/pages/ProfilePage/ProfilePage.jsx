import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import TitlePage from 'components/TitlePage/TitlePage';
import User from 'components/User/User';
import UserCard from 'components/UserCard/UserCard';
import UserForm from 'components/UserForm/UserForm';
import React from 'react';
import css from './ProfilePage.module.scss';
// import PropTypes from 'prop-types'

const ProfilePage = () => {
  return (
    <div className={css.container}>
      <div className={css.flexCont}>
        <div className={css.rightCont}>
          <TitlePage block className={`${css.title} `}>Profile Settings</TitlePage>
          <User />
          <UserCard />
          <LogoutBtn profile className={`${css.iconForProfile} ${css.logoutBtnProfile}`} />
        </div>
        <div className={css.leftCont}>
        <TitlePage none className= {`${css.title} `}>Profile Settings</TitlePage>
          <UserForm />
          
        </div>
      </div>
      ;
    </div>
  );
};
// radio-buttons, input for calendar, dekstop - title,

// ProfilePage.propTypes = {

// }

export default ProfilePage;
