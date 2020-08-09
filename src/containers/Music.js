import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { playlist } from '../modules/playlist'
import Album from '../components/Album'
import Player from '../components/Player'

const Result = () => {
  const { loading, list, error } = useSelector(({ loading, playlist }) => {
    const data = {}

    if (playlist.playlist) {
      data.playlist = playlist.playlist.result[0]
    }

    return {
      loading: loading['playlist/PLAYLIST'],
      list: data.playlist,
      error: playlist.error
    }
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(playlist({ category: 'music', number: 1 }))
  }, [dispatch])

  return (
    <Album attribute={{ record: true, loading: loading, list: list, error: error }}>
      <Player attribute={{ loading: loading, list: list, error: error }} />
    </Album>
  )
}

export default Result
