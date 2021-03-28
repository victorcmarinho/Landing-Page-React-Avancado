import React from 'react'

import Container from 'components/Container'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <p>
        Desenvolvido por <a href="#">Fulano </a>e<a href="#"> Fulano</a>
      </p>
      <p>
        Design por <a href="#">Fulano</a>
      </p>
    </Container>
  </S.Wrapper>
)

export default Footer
