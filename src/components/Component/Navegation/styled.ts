import styled from 'styled-components'
import { Color } from '../../../style'

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

  ul {
    display: flex;
    flex-direction: column;
    gap: 28px;

    li {
      list-style: none;

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
