import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import TitlePage from 'components/TitlePage/TitlePage';
import User from 'components/User/User';
import UserCard from 'components/UserCard/UserCard';
import UserForm from 'components/UserForm/UserForm';
import React from 'react';
import css from './ProfilePage.module.scss';
import Container from 'components/Container/Container';
// import PropTypes from 'prop-types'

const ProfilePage = () => {
  
  return (<Container>
     <TitlePage>Profile Settings</TitlePage>
      <div className={css.flexCont}>
        <div className={css.rightCont}>
         
          <User />
          <UserCard  />
          <LogoutBtn profile className={`${css.iconForProfile} ${css.logoutBtnProfile}`} />
        </div>
        <div className={css.leftCont}>
        
          <UserForm  />
          
        </div>
      </div>
      ;
  </Container>
    
  );
};


// ProfilePage.propTypes = {

// }

export default ProfilePage;
