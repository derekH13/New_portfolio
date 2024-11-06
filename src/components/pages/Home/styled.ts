import styled from 'styled-components'
import { Color } from '../../../style'

export const StyledTitulo = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  span {
    font-family: 'Leckerli One', cursive;
    color: ${Color.amarelo};
    font-size: 2.2rem;
    margin: 0px 20px;
    font-weight: 400;
  }
`

export const EstyledTitulo = styled.div`
  position: relative;
  width: 100%;

  &::before {
    position: absolute;
    content: 'h1';
    font-size: 2.2rem;
    color: ${Color.amarelo};
    font-family: 'Leckerli One', cursive;
    left: -60px;
    top: 22px;
    font-weight: 400;
  }

  span {
    font-family: 'Leckerli One', cursive;
    color: ${Color.amarelo};
    font-size: 2.2rem;
    margin: 0px 20px;
    font-weight: 400;
  }
`

export const Styledtexto = styled.p`
  margin: 48px 0px;
  line-height: 25px;
  max-width: 550px;
  letter-spacing: 1.5px;
`
