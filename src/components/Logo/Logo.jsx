import sprite from '../../images/svg/sprite.svg';
import css from './Logo.module.scss';

const Logo = logoIconColor => {
	return (
		<div className={css.logoWrapper}>
			<svg className={css[logoIconColor]}>
				<use href={sprite + '#logo_icon'}></use>
			</svg>
			<svg className={css.logoText}>
				<use href={sprite + '#logo_text'}></use>
			</svg>
		</div>
	);
};

export default Logo;
