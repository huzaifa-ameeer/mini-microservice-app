import React from 'react'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center p-5'>
      <h3 className='text-3xl font-semibold'>Blogs</h3>
      <CreatePost/>
      <hr />
      <PostList/>
      </div>
  )
}

export default App