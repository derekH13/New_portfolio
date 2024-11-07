import styled from 'styled-components'
import { Color } from '../../../style'

type props = {
  text: string
}

export const NavStyle = styled.div`
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  top: 35%;
  right: 20px;
  z-index: 100;
  padding: 12px 8px;

  @media (max-width: 697px){
    top: auto;
    bottom: 12px;
    width: 90%;
    margin: 0 auto;
    right: 20px;
    left: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 28px;

    @media (max-width: 697px){
      flex-direction: row;
      justify-content: center;
    }


      svg {
        height: 42px;
        width: 42px;
        border-radius: 10px;
        padding: 6px;
        cursor: pointer;
        transition: all 0.2s ease;

        &.active {
          background-color: ${Color.laranja};
        }

        &:hover {
          background-color: ${Color.laranja};
        }
      }
    }
  }
`
export const StyleLi = styled.li<props>`
  list-style: none;

      &:hover {
        &::after {
          content: '${(props) => props.text}';
          position: absolute;
          right: 180%;
          transform: translateX(50%);
          background-color: ${Color.laranja};
          color: black;
          padding: 5px;
          border-radius: 5px;
          font-size: 16px;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
`
