import React from 'react';
// import '../css/Header.css'
import StyleHeader from './Header.module.css';

const Header = () => {
	return (
		<header className={StyleHeader.header}>

			<img className={StyleHeader.img} src="https://w7.pngwing.com/pngs/974/748/png-transparent-logo-house-dream-color-light-small-house-blue-computer-network-angle.png" />
		</header>
	);
}

export default Header;