import React from 'react';
import { NavLink } from 'react-router-dom';
import styleAside from'./Aside.module.css';
/*
css-module - робить унікальним клас. 
щоб використовувати css-module треба до css дописать module 
!приклад  style.module.css
Наступний крок - треба виконати імпорт в файл де находяться класи з style.css
!приклад імпорта - import newStyle from './style.modules.css';
після цього створився обєкт newStyle з класами , цей обєкт ми вставляємо замість класа, який находився в файлі style.css і заміняємо його на 
!приклад {newStyle.item} - замість item вказуємо той клас який був записаний у style.css 
==============================
NavLink - замінює контент без перезагрузки  використовується замість тега а

*/

const Aside = () => {
	return (
		<aside className={styleAside.sidebar}>
		<nav className={styleAside.nav}>
			<ul className={styleAside.items}>
					<li className={styleAside.item}><NavLink to='/profile'
						activeClassName={styleAside.active}>Profile</NavLink></li>
				<li className={styleAside.item}><NavLink activeClassName={styleAside.active} to='/messages'>Massiges</NavLink></li>
				<li className={styleAside.item}><NavLink activeClassName={styleAside.active} to='/news'>News</NavLink></li>
					<li className={styleAside.item}><NavLink activeClassName={styleAside.active} to='/music'>Music</NavLink></li>
					<br />
					<li className={styleAside.item}><NavLink activeClassName={styleAside.active} to='/users'>Find users</NavLink></li>
				<br />
				<li className={styleAside.item}><NavLink activeClassName={styleAside.active} to='/settings'>Settings</NavLink></li>
			</ul>
		</nav>
	</aside>

	);
}

export default Aside;