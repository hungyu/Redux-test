import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice';

const AddPostForm = props => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [userId, setUserId] = useState('')

	const dispatch = useDispatch();
	const users = useSelector(state => state.users)

	const onTitleChanged = e => setTitle(e.target.value);
	const onContentChanged = e => setContent(e.target.value);
	const onSaveButtonClicked = e => {
		dispatch(
			postAdded(title, content, userId)
		)
	}

	const onAuthorChanged = e => setUserId(e.target.value)

	const canSave = title && content && userId

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))


	return (
		<section>
			<h2>Add new Posts</h2>
			<form action="">
				<label htmlFor=""></label>
				<input
					type="text"
					id="post-title"
					value={title}
					onChange={onTitleChanged}
				/>
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
				<label htmlFor=""></label>
				<textarea name="post-content" id="post-content" value={content} onChange={onContentChanged}></textarea>
				<button type="button" onClick={onSaveButtonClicked} disabled={!canSave}>
					Save Posts
				</button>
			</form>
		</section>
	)
}

export default AddPostForm