import React from "react";
import {
  addUserPostActionCreate,
  onPostChangeActionCreate,
} from "../../../../redux/profileReducer";
import CreatePosts from "./CreatePosts";

const CreatePostsContainer = (props) => {

  const state = props.store.getState();

const addPost = () => {
    props.store.dispatch(addUserPostActionCreate());
  };

 const onPostChange = (text) => {
    const action = onPostChangeActionCreate(text);
    props.store.dispatch(action);
  };

  return (
    <CreatePosts
	 onPostChange={onPostChange}
      addPost={addPost}
      newPostText={state.ProfilePage.newPostText}
    />
  );
};

export default CreatePostsContainer;
