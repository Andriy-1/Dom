import React from "react";
import './message.css'

const Message = () => {
	return (
		<div className='message'>
			<div className='message__user'>
				<div className='message__iconName'>
					<img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' className='message__icon' />
					<div className='message__name'>Ivan</div>
				</div>
				<div className='message__text'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
			</div>
			</div>
</div>
	);
}

export default Message;