import React from "react";
import Message from './content/message/message';
import User from "./content/users/user";
import './content.css'

const Content = () => {
	return (
      <div>
<h3 className="block__title">Dialogs</h3>
		<div className='block__col'>
			<User/>
			<Message/>
		</div>
		</div>
	);
};

export default Content;
