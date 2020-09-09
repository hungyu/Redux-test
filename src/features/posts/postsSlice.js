import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client'

const initialState = {
	posts: [],
	status: 'idle',
	error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.posts
})


const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.posts.push(action.payload)
			},
			prepare(title, content, userId) {
				return {
					payload: {
						id: nanoid(),
						date: new Date().toISOString(),
						title,
						content,
						user: userId
					}
				}
			}
		},
		postUpdated(state, action) {
			const { id, title, content } = action.payload
			const existingPost = state.posts.find(post => post.id === id)

      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
		},
		reactionAdded(state, action) {
			console.log(state)
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find(post => post.id === postId)
      if (existingPost) {
      	if (existingPost.reactions[reaction]){
      		existingPost.reactions[reaction]++
      	} else{
      		existingPost.reactions[reaction] = 1
      	}
      }
		}
	},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.posts = state.posts.concat(action.payload)
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
});


export const { postAdded, postUpdated, reactionAdded } = postSlice.actions;
export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id === postId)

export default postSlice.reducer;
