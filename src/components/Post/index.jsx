import deleteImg from '../../assets/delete.svg'
import editImg from '../../assets/edit.svg'

import style from './style.module.css'

export function Post({ postData }) {
  return (
    <li className={style.postItem}>
      <section className={style.postHeader}>
        <h4 className={style.postTitle}>
          {postData.title}
        </h4>
        <div className={style.postOptions}>
          <img
            src={deleteImg}
            alt="Delete this post."
          />
          <img src={editImg}
            alt="Edit this post."
          />
        </div>
      </section>
      <section className={style.postBody}>
        <div className={style.postInfo}>
          <span className={style.username}>
            @{postData.username.trim().replace(' ', '')}
          </span>
          <span className={style.howLongAgo}>
            25 minutos atrás
          </span>
        </div>
        <article className={style.postContent}>
          <p>{postData.content}</p>
        </article>
      </section>
    </li>
  )
}