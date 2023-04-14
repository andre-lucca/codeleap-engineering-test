import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editPost } from '../../actions/postAction'

import style from './style.module.css'

export function EditScreen({ status, onStatusChange }) {
  const storeDispatch = useDispatch()
  const [inputData, setInputData] = useState({
    postTitleInput: '',
    postContentInput: ''
  })

  const handleInputDataChange = ({ target }) => {
    setInputData({ ...inputData, [target.name]: target.value })
  }

  const handleEditPost = () => {
    const isTheSameTitle = status.postTitleToChange === inputData.postTitleInput
    const isTheSameContent = status.postContentToChange === inputData.postContentInput

    if (isTheSameTitle && isTheSameContent) {
      handleCancelButtonClick()
    }

    const postDataToChange = {
      id: status.postIdToChange,
      title: inputData.postTitleInput,
      content: inputData.postContentInput
    }

    storeDispatch(editPost(postDataToChange))
    onStatusChange(false)
    setInputData({
      postTitleInput: '',
      postContentInput: ''
    })
  }

  const handleCancelButtonClick = () => {
    onStatusChange(false)
    setInputData({
      postTitleInput: '',
      postContentInput: ''
    })
  }

  return (
    <dialog className={style.editScreenContainer} open={status.isActive}>
      <div className={style.editDialog}>
        <h3>Edit item</h3>
        <label>
          Title
          <input
            className={style.editPostTitleInput}
            type="text"
            name="postTitleInput"
            value={inputData.postTitleInput}
            onChange={handleInputDataChange}
          />
        </label>
        <label>
          Content
          <textarea
            className={style.editPostContentInput}
            name="postContentInput"
            value={inputData.postContentInput}
            onChange={handleInputDataChange}
          />
        </label>
        <div>
          <button
            className={style.cancelEditButton}
            onClick={handleCancelButtonClick}
          >
            Cancel
          </button>
          <button
            className={style.confirmEditButton}
            onClick={handleEditPost}
            disabled={!inputData.postTitleInput.trim() && !inputData.postContentInput.trim()}
          >
            Save
          </button>
        </div>
      </div>
    </dialog>
  )
}
