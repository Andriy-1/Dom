import React from 'react';
import StylePost from'./Post.module.css';

const Post = (props) => {

	return (
		<div className={StylePost.content__commant}>
					<img className={StylePost.img2} src="https://www.drhair.in/wp-content/uploads/2016/09/user-icon-6.png" alt="avatar" />
			<span className={StylePost.content__text}>{props.massage} |</span>
			<span className={StylePost.content__text}>{ props.like } like</span>
				</div>
	)
}

export default Post;