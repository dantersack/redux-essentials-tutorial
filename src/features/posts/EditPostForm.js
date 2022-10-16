import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postUpdated } from './postsSlice'

const EditPostForm = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  const [postData, setPostData] = useState({
    title: post.title,
    content: post.content,
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const handleOnChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      postUpdated({
        id: postId,
        updatedTitle: postData.title,
        updatedContent: postData.content,
      })
    )
    history.push(`/posts/${postId}`)
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Post Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          value={postData.title}
          onChange={handleOnChange}
        ></input>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={postData.content}
          onChange={handleOnChange}
        ></textarea>
        <button type="submit" onClick={handleSubmit}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default EditPostForm
