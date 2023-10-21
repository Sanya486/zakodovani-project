import '../../images/svg/sprite.svg';
import css from './LogOutBtn.module.scss';

const LogoutBtn = () => {
	return (
		<button className={css.logoutBtn}>
			Logout
			<svg className={css.icon}>
				<use xlinkHref='#log_out_icon'></use>
			</svg>
		</button>
	);
};

export default LogoutBtn;
