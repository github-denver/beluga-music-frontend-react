import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { musicRead } from '../modules/music/read'
import Album from '../components/Album'
import Player from '../components/Player'

const Result = () => {
  const [number, setNumber] = useState(1)

  const decrease = () => {
    setNumber((number) => {
      const result = number - 1
      console.log('decrease result: ', result)

      return result
    })
  }

  const increase = () => {
    setNumber((number) => {
      const result = number + 1
      console.log('increase result: ', result)

      return result
    })
  }

  const { loading, list, error } = useSelector(({ loading, musicRead }) => {
    const data = {}

    if (musicRead.read) {
      data.musicRead = musicRead.read.result[0]
    }

    return {
      loading: loading['music/MUSIC_READ'],
      list: data.musicRead,
      error: musicRead.error
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(musicRead({ category: 'music', number }))

    return () => {
      console.log('useEffect(() => { return () => { .. } }')
    }
  }, [dispatch, number])

  return (
    <Album attribute={{ record: true, loading: loading, list: list, error: error }}>
      <Player attribute={{ loading: loading, list: list, error: error, event: { increase: increase, decrease: decrease } }} />
    </Album>
  )
}

export default Result
