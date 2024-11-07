import styled from 'styled-components'
import { Color } from '../../../../style'

type props = {
  text: string
}

export const EstiloWindown = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 2000;

  .modalSocial {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    height: 400px;
    max-width: 400px;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .fechar {
      position: absolute;
      top: 12px;
      right: 12px;
      cursor: pointer;
    }

    ul {
      display: flex;
      gap: 20px;


      }
    }
  }
`

export const LiStyle = styled.div<props>`
  list-style: none;

  &:hover {
    fill: ${Color.laranja};

    &::after {
      content: '${(props) => props.text}';
      position: absolute;
      background-color: ${Color.laranja};
      color: black;
      padding: 5px;
      top: 124px;
      transform: translateX(-50px);
      border-radius: 5px;
      font-size: 16px;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }
  }

  svg {
    width: 50px;
    cursor: pointer;

    &:hover {
      fill: ${Color.laranja};
    }
  }
`
