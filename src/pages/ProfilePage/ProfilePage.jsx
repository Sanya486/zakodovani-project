import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import TitlePage from 'components/TitlePage/TitlePage';
import User from 'components/User/User';
import UserCard from 'components/UserCard/UserCard';
import UserForm from 'components/UserForm/UserForm';
import React from 'react';
import css from './ProfilePage.module.scss';

const ProfilePage = () => {
  return (
    <div className={css.container}>
      <div className={css.flexCont}>
        <div className={css.rightCont}>
          <TitlePage marg className={`${css.title} ${css.place}`}>
            Profile Settings
          </TitlePage>
          <User />
          <UserCard />
          <LogoutBtn profile className={`${css.iconForProfile} ${css.logoutBtnProfile}`} />
        </div>
        <div className={css.leftCont}>
          <UserForm />
        </div>
      </div>
      ;
    </div>
  );
};

export default ProfilePage;
