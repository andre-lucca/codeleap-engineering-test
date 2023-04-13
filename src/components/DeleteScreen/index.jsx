import style from './style.module.css'

export function DeleteScreen() {
  return (
    <dialog className={style.deleteScreenContainer}>
      <div className={style.deleteDialog}>
        <h3>Are you sure you want to delete this item?</h3>
        <div>
          <button className={style.cancelDeleteButton}>
            Cancel
          </button>
          <button className={style.confirmDeleteButton}>
            Delete
          </button>
        </div>
      </div>
    </dialog>
  )
}