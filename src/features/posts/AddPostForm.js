import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { unwrapResult } from '@reduxjs/toolkit'

import { addNewPost } from './postsSlice'
import {
  selectAllUsers
} from '../users/userSlice'


const AddPostForm = props => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [userId, setUserId] = useState('')
	const [addRequestStatus, setAddRequestStatus] = useState('idle')

	const dispatch = useDispatch();
	const users = useSelector(selectAllUsers)

	const onTitleChanged = e => setTitle(e.target.value);
	const onContentChanged = e => setContent(e.target.value);
	const onAuthorChanged = e => setUserId(e.target.value)

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        const resultAction = await dispatch(
          addNewPost({ title, content, user: userId })
        )
        unwrapResult(resultAction)
        setTitle('')
        setContent('')
        setUserId('')
      } catch (err) {
        console.error('Failed to save the post: ', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

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
				<button type="button" onClick={onSavePostClicked} disabled={!canSave}>
					Save Posts
				</button>
			</form>
		</section>
	)
}

export default AddPostForm