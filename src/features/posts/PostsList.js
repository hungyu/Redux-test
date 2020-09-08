import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo';

const PostsList = () => {
	const posts = useSelector(state => state.posts);

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <TimeAgo timestamp={post.date}/>
      <PostAuthor userId={post.user} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ))

	return (
		<section>
			<h2>Posts</h2>
			{renderedPosts}
		</section>
	)
}

export default PostsList