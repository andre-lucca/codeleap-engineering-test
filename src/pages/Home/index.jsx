import { DeleteScreen } from '../../components/DeleteScreen'
import { EditScreen } from '../../components/EditScreen/index.jsx'
import { Post } from '../../components/Post'

import style from './style.module.css'

export function Home() {

  return (
    <div className={style.homeContainer}>
      <header className={style.headerContainer}>
        <h1>CodeLeap Network</h1>
      </header>
      <main className={style.mainContainer}>
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
        <section className="posts">
          <ul className="postList">
          </ul>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
      </main>
      {/* <DeleteScreen /> */}
      {/* <EditScreen /> */}
    </div>
  )
}