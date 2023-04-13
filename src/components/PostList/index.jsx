import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsAsync } from '../../actions/postAction.js'

import { Post } from '../../components/Post'

export function PostList() {
  const storeDispatch = useDispatch()
  const posts = useSelector(posts => posts)

  useEffect(() => {
    storeDispatch(getPostsAsync())
  }, [])

  return (
    <section>
      <ul>
        {
          posts.map(({ id: postId, ...postData }) => (
            <Post
              key={postId}
              postData={postData}
            />))
        }
      </ul>
    </section>
  )
}