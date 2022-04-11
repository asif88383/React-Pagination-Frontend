import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])
  const { loading, data } = useFetch()

  useEffect(() => {
    if(loading){
      return setFollowers(data[page])
    }
  }, [loading, page])

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if(nextPage > data.length - 1){
        nextPage = 0
      }
      return nextPage
    })
  }

  return (

  )
}

export default App
