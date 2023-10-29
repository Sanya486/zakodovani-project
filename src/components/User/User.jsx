import React from 'react';
import css from './User.module.scss';
import sprite from '../../images/svg/sprite.svg';
import Subtext from 'components/Subtext/Subtext';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectClient } from 'redux/selectors';
import { fetchUpload } from "../../redux/operations";
import { useDispatch } from 'react-redux';


const User = () => {
  const user = useSelector(selectClient);
  const dispatch = useDispatch();
  console.log(user);
 
  
 

  const handleFileChange = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    dispatch(fetchUpload({avatar: {formData}}));
  };


  return (
    <div className={css.userWrapper}>
      <form className={css.form} onClick={() => document.querySelector('.fileInput').click()}>
        <input
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          className='fileInput'
          hidden
        />
        {user.client.avatar ? (
          <img src={user.client.avatar} className={css.imageSelected} />
        ) : (
          <svg className={css.avatarDefault}>
            <use href={sprite + '#avatar_icon'}></use>
          </svg>
        )}
        <label htmlFor='fileInput'>
          <svg className={css.iconToChooseFile}>
            <use href={sprite + '#check_mark_icon'}></use>
          </svg>
        </label>
      </form>
      <h3 className={css.userName}>{`${user.client.name}`}</h3>
      <Subtext page='userPage' />
    </div>
  );
};

export default User;
