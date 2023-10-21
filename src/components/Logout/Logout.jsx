import '../../images/svg/sprite.svg';
import css from './Logout.module.scss';

const Logout = () => {
	return (
		<button className={css.logoutBtn}>
			Logout
			<svg className={css.icon}>
				<use xlinkHref='#log_out_icon'></use>
			</svg>
		</button>
	);
};

export default Logout;
