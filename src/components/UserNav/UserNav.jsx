import { NavLink } from 'react-router-dom';
import css from './UserNav.module.scss';

const UserNav = () => {
	return (
		<div>
			<nav>
				<NavLink to='/diary' className={css.NavLink}>
					Diary
				</NavLink>
				<NavLink to='/products' className={css.NavLink}>
					Products
				</NavLink>
				<NavLink to='/exercises' className={css.NavLink}>
					Exercises
				</NavLink>
			</nav>
		</div>
	);
};

export default UserNav;
