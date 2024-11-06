import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { PropsTitle } from './shared/interface/interface'

export const Color = {
  laranja: '#BE430D',
  amarelo: '#DCD620',
  fundo: '#110E32',
  text: 'white'
}

export const Globalcss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;


  }

  ::-webkit-scrollbar {
    display: none;  /* Oculta a barra de rolagem */
  }

  body {
    background-color: ${Color.fundo};
    color: white;
  }
`

export const Title = styled.h1<PropsTitle>`
  font-size: ${(PropsTitle) => PropsTitle.height}px;
  color: ${(PropsTitle) => PropsTitle.color};
  font-weight: ${(PropsTitle) => PropsTitle.bold};
  width: max-content;

  @media (max-width: 697px) {
    font-size: 50px;
  }
`

export const Text = styled.p<PropsTitle>`
  font-size: ${(PropsTitle) => PropsTitle.height}px;
  color: ${(PropsTitle) => PropsTitle.color};
  font-weigth: ${(PropsTitle) => PropsTitle.bold};
`

export const Interface = styled.div`
  max-width: 1224px;
  width: 95%;
  margin: 0 auto;
`

export const ContainerText = styled.div`
  letter-spacing: 1.5px;
  line-height: 25px;
`
