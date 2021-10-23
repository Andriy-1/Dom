import React from 'react';
import StylePost from'./Post.module.css';

const Post = (props) => {

	return (
		<div className={StylePost.content__commant}>
					<img className={StylePost.img2} src="https://scontent.fifo3-1.fna.fbcdn.net/v/t1.6435-9/41980759_105690230398190_6468212999654998016_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7eNhNWXf8Y8AX_fOOXX&_nc_ht=scontent.fifo3-1.fna&oh=a19492b75617bfd8a139723fa58893e9&oe=61883A34" alt="avatar" />
			<span className={StylePost.content__text}>{props.massage} |</span>
			<span className={StylePost.content__text}>{ props.like } like</span>
				</div>
	)
}

export default Post;