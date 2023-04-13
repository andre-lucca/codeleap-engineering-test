import style from './style.module.css'

export function EditScreen() {
  return (
    <dialog className={style.editScreenContainer}>
      <div className={style.editDialog}>
        <h3>Edit item</h3>
        <label>
          Title
          <input
            className={style.editPostTitleInput}
            type="text"
          />
        </label>
        <label>
          Content
          <textarea
            className={style.editPostContentInput}
          />
        </label>
        <div>
          <button className={style.cancelEditButton}>
            Cancel
          </button>
          <button className={style.confirmEditButton}>
            Save
          </button>
        </div>
      </div>
    </dialog>
  )
}
