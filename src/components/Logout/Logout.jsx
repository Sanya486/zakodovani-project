import '../../images/svg/sprite.svg';
import css from './Logout.module.scss';

const Logout = () => {
	return (
		<div className={css.logoutWrapper}>
			<p>Logout</p>
			<svg className={css.icon}>
				<use xlinkHref='#log_out_icon'></use>
			</svg>
		</div>
	);
};

export default Logout;
