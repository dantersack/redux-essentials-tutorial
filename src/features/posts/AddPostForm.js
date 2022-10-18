import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'

const AddFormPost = () => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    userId: '',
  })
  const users = useSelector((state) => state.users)

  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }

  const canSave =
    Boolean(postData.title) &&
    Boolean(postData.content) &&
    Boolean(postData.userId)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postAdded(postData))
    setPostData({ title: '', content: '' })
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Post Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          value={postData.title}
          onChange={handleOnChange}
        ></input>
        <label htmlFor="author">Post Author:</label>
        <select
          id="author"
          name="userId"
          value={postData.userId}
          onChange={handleOnChange}
        >
          <option value=""></option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={postData.content}
          onChange={handleOnChange}
        ></textarea>
        <button type="submit" onClick={handleSubmit} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddFormPost
