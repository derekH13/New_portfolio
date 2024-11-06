import styled from 'styled-components'
import { Color } from '../../style'

export const EstiloCard = styled.div`
  width: 100%;
  max-height: max-content;

  img {
    width: 100%;
    max-height: 260px;
    height: 100%;
    border-radius: 15px;
  }
`

export const EstiloTitulo = styled.div`
  display: block;
  margin: 8px 0px;

  h1 {
    .meio {
      color: ${Color.laranja};
      margin: 0px 10px;
      font-family: 'Inter', sans-serif;
      font-size: 25px;
      font-weight: 700;
    }

    span {
      color: ${Color.amarelo};
      font-family: 'Leckerli One', cursive;
    }
  }
`

export const ContainerFramerks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;

  .javascript {
    border-color: rgb(174, 184, 27);
    color: rgb(174, 184, 27);
  }
  .bootstrap {
    border-color: rgb(87, 27, 184);
    color: rgb(87, 27, 184);
  }
  .react {
    border-color: rgb(27, 108, 184);
    color: rgb(27, 108, 184);
  }
  .typescript {
    border-color: rgb(30, 27, 184);
    color: rgb(30, 27, 184);
  }
  .html {
    border-color: rgb(184, 85, 27);
    color: rgb(184, 85, 27);
  }
  .tailwindcss {
    border-color: rgb(255, 255, 255);
    color: rgb(255, 255, 255);
  }
  .bootstrap {
    border-color: rgb(87, 27, 184);
    color: rgb(87, 27, 184);
  }
`

export const Estiloframeworks = styled.span`
  padding: 3px 5px;
  border: solid 2px white;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.15);
  box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  font-size: 18px;
`
