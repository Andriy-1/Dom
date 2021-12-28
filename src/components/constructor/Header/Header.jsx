import React from 'react';
// import '../css/Header.css'
import StyleHeader from './Header.module.css';


const Header = () => {
	return (
		<header className={StyleHeader.header}>
			<a href="/localhost:3000" >
			<img src="./home.svg" className={StyleHeader.img} alt="logo"/>
			<span className={StyleHeader.logo}>Dom</span>
			</a>
		</header>
	);
}

export default Header;