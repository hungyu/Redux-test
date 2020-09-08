import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import postsSlice from '../features/posts/postsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
  },
});
