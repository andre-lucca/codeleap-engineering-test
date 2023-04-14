import deleteImg from '../../assets/delete.svg'
import editImg from '../../assets/edit.svg'

import style from './style.module.css'

export function Post({ postData, onDeleteScreenStatusChange, onEditScreenStatusChange }) {
  const postUsername = postData.username.replaceAll(' ', '')
  const localUserName = localStorage.getItem('username')
  const formattedUsername = postUsername.includes('@') ? postUsername : `@${postUsername}`

  const getHowLongAgo = () => {
    const currentTimestamp = new Date().getTime()
    const oldTimestamp = new Date(postData.created_datetime).getTime()
    const howLongAgoInSeconds = (currentTimestamp - oldTimestamp) / 1000
    const howLongAgoInMinutes = howLongAgoInSeconds / 60
    const howLongAgoInHours = howLongAgoInMinutes / 60
    const relativeTime = new Intl.RelativeTimeFormat('en', {
      localeMatcher: 'best fit',
      numeric: 'auto',
      style: 'long'
    })

    if (howLongAgoInHours < 1) {
      return relativeTime.format(-howLongAgoInMinutes.toFixed(), 'minutes')
    }

    if (howLongAgoInMinutes < 1) {
      return relativeTime.format(-howLongAgoInSeconds.toFixed(), 'seconds')
    }

    return relativeTime.format(-howLongAgoInHours.toFixed(), 'hours')
  }

  const handleEditPost = (postData) => {
    onEditScreenStatusChange(true, postData.id, postData.title, postData.content)
  }

  const handleDeleteButtonClick = (postId) => {
    onDeleteScreenStatusChange(true, postId)
  }

  return (
    <li className={style.postItem}>
      <section className={style.postHeader}>
        <h4 className={style.postTitle}>
          {postData.title}
        </h4>
        {
          localUserName === postUsername && (
            <div className={style.postOptions}>
              <img
                src={deleteImg}
                alt="Delete this post."
                onClick={() => handleDeleteButtonClick(postData.id)}
              />
              <img
                src={editImg}
                alt="Edit this post."
                onClick={() => handleEditPost(postData)}
              />
            </div>
          )
        }
      </section>
      <section className={style.postBody}>
        <div className={style.postInfo}>
          <span className={style.username}>
            {formattedUsername}
          </span>
          <span className={style.howLongAgo}>
            {getHowLongAgo()}
          </span>
        </div>
        <article className={style.postContent}>
          <p>{postData.content}</p>
        </article>
      </section>
    </li>
  )
}