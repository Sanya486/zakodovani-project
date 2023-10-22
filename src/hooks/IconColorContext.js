import { createContext, useContext, useState } from 'react';

const IconColorContext = createContext();

export function IconColorProvider({ children }) {
	const [logoIconColor, setLogoIconColor] = useState('#e6533c');

	return (
		<IconColorContext.Provider value={{ logoIconColor, setLogoIconColor }}>
			{children}
		</IconColorContext.Provider>
	);
}

export function useIconColor() {
	return useContext(IconColorContext);
}
