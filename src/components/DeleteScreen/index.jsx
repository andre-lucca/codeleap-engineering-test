import { useDispatch } from 'react-redux'
import { deletePost } from '../../actions/postAction'

import style from './style.module.css'

export function DeleteScreen({ status, onStatusChange }) {
  const storeDispatch = useDispatch()

  const handleCancelButtonClick = () => {
    onChangeStatus(false, null)
  }

  const handleDeletePost = (postId) => {
    storeDispatch(deletePost(postId))
    onStatusChange(false, null)
  }

  return (
    <dialog className={style.deleteScreenContainer} open={status.isActive}>
      <div className={style.deleteDialog}>
        <h3>Are you sure you want to delete this item?</h3>
        <div>
          <button
            className={style.cancelDeleteButton}
            onClick={handleCancelButtonClick}
          >
            Cancel
          </button>
          <button
            className={style.confirmDeleteButton}
            onClick={() => handleDeletePost(status.postIdToDelete)}
          >
            Delete
          </button>
        </div>
      </div>
    </dialog>
  )
}