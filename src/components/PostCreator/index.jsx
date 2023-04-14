import { useState } from 'react'

import style from './style.module.css'

export function PostCreator() {
  const [inputData, setInputData] = useState({
    postTitleInput: '',
    postContentInput: ''
  })
  const isCreateButtonDisabled = !inputData.postTitleInput || !inputData.postContentInput

  const handleInputDataChange = ({ target }) => {
    setInputData({ ...inputData, [target.name]: target.value })
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
      <button disabled={isCreateButtonDisabled}>Create</button>
    </section>
  )
}