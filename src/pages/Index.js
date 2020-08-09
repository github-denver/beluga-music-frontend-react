import React from 'react'
import styled from 'styled-components'
import Music from '../containers/Music'

const Styled = {}

Styled.picture = styled.section``

const Index = () => {
  return (
    <>
      <div className="outer_cell">
        <div className="inner_cell">
          <Music />
        </div>
      </div>
    </>
  )
}

export default Index
