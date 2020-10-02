import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.album = styled.div``

const Album = (props) => {
  const { attribute } = props
  console.log('components → [Album.js] → attribute: ', attribute)
  console.log('')

  if (attribute.error) {
    if (attribute.error.response && attribute.error.response.status === 404) {
      console.group('components → [Album.js]')
      console.log('존재하지 않는 포스트입니다.')
      console.groupEnd()

      return <p>존재하지 않는 포스트입니다.</p>
    }

    console.group('components → [Album.js]')
    console.log('에러가 발생했어요!')
    console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (attribute.loading || !attribute.list) {
    console.group('components → [Album.js]')
    console.log('읽어들이는 중이거나 아직 포스트 데이터가 존재하지 않을 때')
    console.groupEnd()

    return <p>읽어들이는 중이거나 아직 포스트 데이터가 존재하지 않습니다.</p>
  }

  if (!attribute.list) {
    console.group('components → [Album.js]')
    console.log('포스트 목록이 존재하지 않을 때')
    console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <div className="area_album">
      <div className="group_album">
        <div className="inner_album">
          <div className="box_album">
            <img src={`/images/common/${attribute.list.thumbnail}`} alt="" className="image_album" />
          </div>

          {attribute.record && (
            <div className="group_record">
              <div className="box_record">
                <img src={`/images/common/${attribute.list.files}`} alt="" className="image_record" />
              </div>
            </div>
          )}
        </div>
      </div>

      {props.children}
    </div>
  )
}

export default Album
