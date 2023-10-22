import { InfoItem } from 'components/InfoItem/InfoItem';
import Logo from 'components/Logo/Logo';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
// import PropTypes from 'prop-types'

const WelcomePage = props => {
	return (
		<div>
			<Logo />
			<LogoutBtn />
			<InfoItem name='Daily calorie intake' value='2000' variant='1' />
		</div>
	);
};

// WelcomePage.propTypes = {

// }

export default WelcomePage;
