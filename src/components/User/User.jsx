import React from 'react';
import css from './User.module.scss';
import sprite from '../../images/svg/sprite.svg';
import Subtext from 'components/Subtext/Subtext';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectClient, selectAvatar } from 'redux/selectors';
import { fetchUpload } from "../../redux/operations";
import { useDispatch } from 'react-redux';


const User = () => {
  const user = useSelector(selectClient);
  const avatar = useSelector(selectAvatar);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    dispatch(fetchUpload(formData));
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
        {avatar ? (
          <img src={avatar} className={css.imageSelected} />
        ) : (
          <svg className={css.avatarDefault}>
            <use href={sprite + '#avatar_icon'}></use>
          </svg>
        )}
        <label htmlFor='fileInput'>
          <span className={css.iconBackground}></span>
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
