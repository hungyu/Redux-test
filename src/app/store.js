import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import postsSlice from '../features/posts/postsSlice';
import userSlice from '../features/users/userSlice';
import notificationsSlice from '../features/notifications/notificationsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
    users: userSlice,
    notifications: notificationsSlice
  },
});
