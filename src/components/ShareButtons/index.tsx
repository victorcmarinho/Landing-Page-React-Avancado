import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

import * as S from './styles'

const ShareButtons = () => (
  <S.Wrapper>
    <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
      <FaFacebook />
    </a>

    <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter">
      <FaTwitter />
    </a>
  </S.Wrapper>
)

export default ShareButtons
