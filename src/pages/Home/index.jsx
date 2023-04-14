import { PostCreator } from '../../components/PostCreator'
import { PostList } from '../../components/PostList'
import { reduxStore } from '../../redux/reduxStore.js'
import { Provider as StoreProvider } from 'react-redux'

import style from './style.module.css'

export function Home() {
  return (
    <div className={style.homeContainer}>
      <header className={style.headerContainer}>
        <h1>CodeLeap Network</h1>
      </header>
      <main className={style.mainContainer}>
        <StoreProvider store={reduxStore}>
          <PostCreator />
          <PostList />
        </StoreProvider>
      </main>
    </div>
  )
}