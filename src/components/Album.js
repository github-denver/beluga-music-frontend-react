import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.album = styled.div``

const Album = (props) => {
  const { attribute } = props

  return (
    <div className="area_album">
      <div className="group_album">
        <div className="inner_album">
          <div className="box_album">
            <img src="/images/common/image_album.png" alt="" className="image_album" />
          </div>

          {attribute.record && (
            <div className="group_record">
              <div className="box_record">
                <img src="/images/common/image_record.png" alt="" className="image_record" />
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
