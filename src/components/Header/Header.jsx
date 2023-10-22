import Logo from 'components/Logo/Logo';
import { useIconColor } from '../../hooks/IconColorContext';

function Header() {
	const { logoIconColor } = useIconColor();

	return (
		<div>
			<Logo logoIconColor={logoIconColor} />
		</div>
	);
}

// Header.propTypes = {

// }

export default Header;
