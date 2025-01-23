import styled from 'styled-components'
import { Color } from '../../style'

export const EstiloCard = styled.div`
  width: 100%;
  max-height: max-content;

  img {
    width: 100%;
    max-height: 215px;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`

export const EstiloTitulo = styled.div`
  display: block;
  margin: 10px 0px 12px 0px;

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
    border-color: rgb(239, 255, 14);
    color: rgb(239, 255, 14);
  }
  .bootstrap {
    border-color: rgb(87, 27, 184);
    color: rgb(87, 27, 184);
  }
  .react {
    border-color: rgb(45, 171, 255);
    color: rgb(45, 171, 255);
  }
  .typescript {
    border-color: rgb(8, 3, 255);
    color: rgb(8, 3, 255);
  }
  .html {
    border-color: rgb(184, 85, 27);
    color: rgb(184, 85, 27);
  }
  .tailwindcss {
    border-color: rgb(57, 159, 177);
    color: rgb(57, 159, 177);
  }
  .bootstrap {
    border-color: rgb(87, 27, 184);
    color: rgb(87, 27, 184);
  }
  .css {
    border-color: rgb(21, 82, 248);
    color: rgb(0, 64, 241);
  }
  .django {
    border-color: rgb(207, 93, 0);
    color: rgb(207, 93, 0);
  }
  .styled-components {
    border-color: rgb(0, 222, 238);
    color: rgb(0, 222, 238);
  }
  .tailwindcss {
    border-color: rgb(87, 27, 184);
    color: rgb(87, 27, 184);
  }
  .mysql {
    border-color: rgb(87, 27, 184);
    color: rgb(87, 27, 184);
  }
`

export const Estiloframeworks = styled.span`
  padding: 3px 5px;
  border: solid 3px white;
  border-radius: 8px;
  background: rgb(0, 0, 0);
  box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  font-size: 18px;
  font-weight: semibold;
`
