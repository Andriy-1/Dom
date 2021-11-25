import React from 'react';
import StylePost from'./Post.module.css';

const Post = (props) => {

	return (
		<div className={StylePost.content__commant}>
					<img className={StylePost.img2} src="https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg" alt="avatar" />
			<span className={StylePost.content__text}>{props.massage} |</span>
			<span className={StylePost.content__text}>{ props.like } like</span>
				</div>
	)
}

export default Post;