import React from 'react';
import StyleComment from'./Comment.module.css';

const Comment = (props) => {
	return (
		<div className={StyleComment.content__commant}>
					<img className={StyleComment.img2} src="https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="avatar" />
			<span className={StyleComment.content__text}>{props.massage} |</span>
			<span className={StyleComment.content__text}>{ props.like } like</span>
				</div>
	)
}

export default Comment;