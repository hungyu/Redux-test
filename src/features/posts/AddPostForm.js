import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postAdded } from './postsSlice';

const AddPostForm = props => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const dispatch = useDispatch();

	const onTitleChanged = e => setTitle(e.target.value);
	const onContentChanged = e => setContent(e.target.value);
	const onSaveButtonClicked = e => {

		if (title && content) {
			dispatch(
				postAdded(title, content)
			)
		}
	}


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
				<label htmlFor=""></label>
				<textarea name="post-content" id="post-content" value={content} onChange={onContentChanged}></textarea>
				<button type="button" onClick={onSaveButtonClicked}>
					Save Posts
				</button>
			</form>
		</section>
	)
}

export default AddPostForm