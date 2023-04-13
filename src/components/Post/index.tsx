import deleteImg from '../../assets/delete.svg'
import editImg from '../../assets/edit.svg'

import style from './style.module.css'

export function Post() {
  return (
    <li className={style.postItem}>
      <section className={style.postHeader}>
        <h4 className={style.postTitle}>Titulo da postagem</h4>
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
            @Username
          </span>
          <span className={style.howLongAgo}>
            25 minutos atrás
          </span>
        </div>
        <article className={style.postContent}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ullam vero ea, numquam laboriosam odit provident nisi eos, quisquam exercitationem iure eius consequatur earum asperiores distinctio dolorum dolorem tempore illum.</p>
        </article>
      </section>
    </li>
  )
}