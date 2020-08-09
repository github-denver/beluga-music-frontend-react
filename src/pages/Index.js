import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.picture = styled.section``

const audio = new Audio()
audio.src = '/music/a+morning+walk.mp3'

const play = () => {
  const album = document.querySelector('.group_album')
  album.classList.add('active')

  const play = document.querySelector('.button_play')
  play.classList.remove('active')

  const pause = document.querySelector('.button_pause')
  pause.classList.add('active')

  pause.focus()

  audio.play()
}

const pause = () => {
  const album = document.querySelector('.group_album')
  album.classList.remove('active')

  const play = document.querySelector('.button_play')
  play.classList.add('active')

  const pause = document.querySelector('.button_pause')
  pause.classList.remove('active')

  play.focus()

  audio.pause()
}

const muted = () => {
  const mute = document.querySelector('.button_mute')
  mute.classList.toggle('disabled')

  mute.querySelector('.icon_global').textContent = audio.muted ? '소리 끄기' : '소리 켜기'

  audio.muted = !audio.muted
}

audio.ontimeupdate = function () {
  const progress = document.querySelector('.progress_current')

  // const loaded = (100 * audio.buffered.end(0)) / audio.duration

  const played = (100 * audio.currentTime) / audio.duration

  progress.style.width = Math.floor(played) + '%'
}

const Index = () => {
  return (
    <>
      <div className="outer_cell">
        <div className="inner_cell">
          <Styled.picture className="area_album">
            <div className="group_album">
              <div className="inner_album">
                <div className="box_album">
                  <img src="/images/common/image_album.png" alt="" className="image_album" />
                </div>

                <div className="group_record">
                  <div className="box_record">
                    <img src="/images/common/image_record.png" alt="" className="image_record" />
                  </div>
                </div>
              </div>
            </div>

            <div className="group_player">
              <div className="inner_player">
                <strong className="text_album">[Lineage OST] Legacy Vol. 1 - 33 아침산책 (A Morning Walk)</strong>

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
                  <button type="button" className="button_global button_common button_play active" onClick={play}>
                    <span className="icon_global icon_player">재생</span>
                  </button>

                  <button type="button" className="button_global button_common button_pause" onClick={pause}>
                    <span className="icon_global icon_player">일시정지</span>
                  </button>

                  <button type="button" className="button_global button_common button_previous">
                    <span className="icon_global icon_player">이전 곡 듣기</span>
                  </button>

                  <button type="button" className="button_global button_common button_next">
                    <span className="icon_global icon_player">다음 곡 듣기</span>
                  </button>
                </div>
              </div>
            </div>
          </Styled.picture>
        </div>
      </div>
    </>
  )
}

export default Index
