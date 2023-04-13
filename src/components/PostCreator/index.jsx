import style from './style.module.css'

export function PostCreator() {
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
        />
      </label>
      <label>
        Content
        <textarea
          className={style.postContentInput}
          name="postContentInput"
          placeholder="Content here"
        />
      </label>
      <button>Create</button>
    </section>
  )
}