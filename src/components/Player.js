import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.player = styled.div``

const Player = (props) => {
  const { attribute } = props
  console.log('components → [Player.js] → attribute: ', attribute)
  console.log('')

  if (attribute.error) {
    if (attribute.error.response && attribute.error.response.status === 404) {
      console.group('components → [Player.js]')
      console.log('존재하지 않는 포스트입니다.')
      console.groupEnd()

      return <p>존재하지 않는 포스트입니다.</p>
    }

    console.group('components → [Player.js]')
    console.log('에러가 발생했어요!')
    console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (attribute.loading || !attribute.list) {
    console.group('components → [Player.js]')
    console.log('읽어들이는 중이거나 아직 포스트 데이터가 존재하지 않을 때')
    console.groupEnd()

    return <p>읽어들이는 중이거나 아직 포스트 데이터가 존재하지 않습니다.</p>
  }

  if (!attribute.list) {
    console.group('components → [Player.js]')
    console.log('포스트 목록이 존재하지 않을 때')
    console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  let audio = new Audio()
  audio.src = `/music/${attribute.list.upload2}`
  console.log('components → [Player.js] → audio: ', audio)

  const album = document.querySelector('.group_album')
  const play = document.querySelector('.button_play')
  const pause = document.querySelector('.button_pause')
  const mute = document.querySelector('.button_mute')
  const progress = document.querySelector('.progress_current')

  const played = () => {
    album.classList.add('active')
    play.classList.remove('active')
    pause.classList.add('active')

    pause.focus()

    audio.play()
  }

  const paused = () => {
    album.classList.remove('active')
    play.classList.add('active')
    pause.classList.remove('active')

    play.focus()

    audio.pause()
  }

  const muted = () => {
    mute.classList.toggle('disabled')

    mute.querySelector('.icon_global').textContent = audio.muted ? '소리 끄기' : '소리 켜기'

    audio.muted = !audio.muted
  }

  audio.ontimeupdate = function () {
    const progress = document.querySelector('.progress_current')

    // const loaded = (100 * audio.buffered.end(0)) / audio.duration
    // console.log('components → [Player.js] → loaded: ', loaded)

    const played = (100 * audio.currentTime) / audio.duration
    console.log('components → [Player.js] → played: ', played)
    console.log('')

    // progress.style.width = Math.floor(played) + '%'
    progress.style.width = played + '%'
  }

  audio.onended = function () {
    album.classList.remove('active')
    play.classList.add('active')
    pause.classList.remove('active')

    progress.removeAttribute('style')

    play.focus()
  }

  const previous = () => {
    album.classList.remove('active')
    play.classList.add('active')
    pause.classList.remove('active')

    play.focus()

    audio.pause()

    attribute.event.decrease()
  }

  const next = () => {
    album.classList.remove('active')
    play.classList.add('active')
    pause.classList.remove('active')

    play.focus()

    audio.pause()

    attribute.event.increase()
  }

  return (
    <div className="group_player">
      <div className="inner_player">
        <strong className="text_album">{attribute.list.subject}</strong>

        <div className="group_progress">
          <div className="progress_display">
            <span className="progress_current"></span>
          </div>

          <div className="text_display">
            <span className="text_current">00:00</span>
            <span className="text_separator">/</span>
            <span className="text_duration">00:00</span>
          </div>
        </div>

        <div className="group_volume">
          <button type="button" className="button_global button_volume button_mute" onClick={muted}>
            <span className="icon_global icon_player">소리 끄기</span>
          </button>

          <div className="slider_volume">
            <div className="slider_handle invisible">100%</div>
          </div>
        </div>

        <div className="group_button">
          <button type="button" className="button_global button_common button_play active" onClick={played}>
            <span className="icon_global icon_player">재생</span>
          </button>

          <button type="button" className="button_global button_common button_pause" onClick={paused}>
            <span className="icon_global icon_player">일시정지</span>
          </button>

          <button type="button" className="button_global button_common button_previous" onClick={previous}>
            <span className="icon_global icon_player">이전 곡 듣기</span>
          </button>

          <button type="button" className="button_global button_common button_next" onClick={next}>
            <span className="icon_global icon_player">다음 곡 듣기</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Player
