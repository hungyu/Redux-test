import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()
  const onEmojiClicked = (name) => dispatch(
    reactionAdded({
      postId: post.id,
      reaction: name
    })
  )

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={onEmojiClicked.bind(this, name)}
      >
        {emoji} {post.reactions[name] || 0}
      </button>
    )
  })

  return <div>{reactionButtons}</div>
}
export default ReactionButtons