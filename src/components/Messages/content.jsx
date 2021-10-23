import React from "react";
import Message from './content/message/message';
import Users from "./content/users/user";
import './content.css'

const Content = (props) => {
	return (
      <div>
{/* <h3 className="block__title">Dialogs</h3> */}
		<div className='block__col'>
				<Users users={ props.users}/>
				<Message
					dispatch = {props.dispatch}
					newMessageText ={props.newMessageText}
					messages={props.messages} />
		</div>
		</div>
	);
};

export default Content;
