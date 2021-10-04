import React from 'react';
import StylePost from './Posts.module.css';


const Post = () => {
	return (
		
		<div className={StylePost.content__block}>
          <h3 className={StylePost.content__posts}>My posts</h3>
			<textarea
				col
            autocomplete="off"
            placeholder="your news..."
            type="text"
            className={StylePost.content__input}
          />
          <button type="submit" class={StylePost.content__btn}>
            Send
          </button>
        </div>
	)
}

export default Post;