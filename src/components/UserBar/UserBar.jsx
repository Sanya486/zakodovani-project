import sprite from '../../images/svg/sprite.svg';
import css from './UserBar.module.scss';

const UserBar = () => {
	return (
		<ul className={css.userBarWrapper}>
			<li className={css.settingsItem}>
				<svg className={css.settingsIcon}>
					<use href={sprite + '#settings_icon'}></use>
				</svg>
			</li>
			<li className={css.avatarItem}>
				<svg className={css.avatarIcon}>
					<use href={sprite + '#avatar_icon'}></use>
				</svg>
			</li>
		</ul>
	);
};

export default UserBar;
