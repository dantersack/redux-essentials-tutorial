import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { postAdded } from './postsSlice'

const AddFormPost = () => {
  const [postData, setPostData] = useState({ title: '', content: '' })

  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      postAdded({
        id: nanoid(),
        title: postData.title,
        content: postData.content,
      })
    )
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

export default AddFormPost
