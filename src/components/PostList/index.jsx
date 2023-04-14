import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsAsync } from '../../actions/postAction.js'

import { DeleteScreen } from '../../components/DeleteScreen'
import { EditScreen } from '../../components/EditScreen/'
import { Post } from '../../components/Post'

export function PostList() {
  const storeDispatch = useDispatch()
  const posts = useSelector(posts => posts)
  const [editScreenStatus, setEditScreenStatus] = useState({
    isActive: false,
    postIdToChange: null,
    postTitleToChange: null,
    postContentToChange: null
  })
  const [deleteScreenStatus, setDeleteScreenStatus] = useState({
    isActive: false,
    postIdToDelete: null
  })

  const changeEditScreenStatus = (
    isActive = false,
    postIdToChange = null,
    postTitleToChange = null,
    postContentToChange = null
  ) => {
    setEditScreenStatus({
      isActive,
      postIdToChange,
      postTitleToChange,
      postContentToChange
    })
  }

  const changeDeleteScreenStatus = (isActive = false, postIdToDelete = null) => {
    setDeleteScreenStatus({
      isActive: isActive,
      postIdToDelete
    })
  }

  useEffect(() => {
    storeDispatch(getPostsAsync())
  }, [])

  return (
    <section>
      <ul>
        {
          posts.map((postData) => (
            <Post
              key={postData.id}
              postData={postData}
              onDeleteScreenStatusChange={changeDeleteScreenStatus}
              onEditScreenStatusChange={changeEditScreenStatus}
            />))
        }
      </ul>
      <EditScreen
        status={editScreenStatus}
        onStatusChange={changeEditScreenStatus}
      />
      <DeleteScreen
        status={deleteScreenStatus}
        onStatusChange={changeDeleteScreenStatus}
      />
    </section>
  )
}