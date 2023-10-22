import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { IconColorProvider } from '../../hooks/IconColorContext';
// import PropTypes from 'prop-types'

const Layout = props => {
	return (
		<IconColorProvider>
			<Header />
			<Outlet />
		</IconColorProvider>
	);
};

// Layout.propTypes = {

// }

export default Layout;
