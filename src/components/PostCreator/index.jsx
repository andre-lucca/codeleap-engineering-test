import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/postAction.js'

import style from './style.module.css'

export function PostCreator() {
  const storeDispatch = useDispatch()
  const localUserName = localStorage.getItem('username')
  const [inputData, setInputData] = useState({
    postTitleInput: '',
    postContentInput: ''
  })
  const isCreateButtonDisabled = !inputData.postTitleInput || !inputData.postContentInput

  const handleInputDataChange = ({ target }) => {
    setInputData({ ...inputData, [target.name]: target.value })
  }

  const handleCreatePost = () => {
    const newPost = {
      username: localUserName,
      title: inputData.postTitleInput,
      content: inputData.postContentInput
    }
    storeDispatch(createPost(newPost))
    setInputData({
      postTitleInput: '',
      postContentInput: ''
    })
  }
  return (
    <section className={style.postCreator}>
      <h3>What's on your mind?</h3>
      <label>
        Title
        <input
          className={style.postTitleInput}
          name="postTitleInput"
          type="text"
          placeholder="Hello world"
          value={inputData.postTitleInput}
          onChange={handleInputDataChange}
        />
      </label>
      <label>
        Content
        <textarea
          className={style.postContentInput}
          name="postContentInput"
          placeholder="Content here"
          value={inputData.postContentInput}
          onChange={handleInputDataChange}
        />
      </label>
      <button
        disabled={isCreateButtonDisabled}
        onClick={handleCreatePost}
      >
        Create
      </button>
    </section>
  )
}