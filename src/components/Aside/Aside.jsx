import React from "react";
import styleAside from "./Aside.module.css";
import { asideLink } from "./AsideLink";

const Aside = () => {
  return (
    <aside className={styleAside.sidebar}>
      <nav className={styleAside.nav}>
        <ul className={styleAside.items}>
          {asideLink("/profile", "Profile")}
          {asideLink("/messages", "Message")}
          {asideLink("/news", "News")}
          {asideLink("/Music", "Music")}
          {asideLink("/users", "Users")}
          {asideLink("/settings", "Settings")}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
