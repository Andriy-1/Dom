import React from 'react'
import { NavLink } from "react-router-dom";
import styleAside from "./Aside.module.css";
export const asideLink = (link, text) => {
	return (
		<li className={styleAside.item}>
			<NavLink to={link} activeClassName={styleAside.active}>
				{text}
			</NavLink>
		</li>
	);
};