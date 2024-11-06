import styled from 'styled-components'

export const EstiloBotao = styled.button`
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;

  border: none;
  // background: linear-gradient(to bottom, #ff6827 0%, #be430d 100%);
  background-color: transparent;
  border: solid 2px #be430d;
  color: #be430d;
  padding: 0.8em 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  & span {
    display: block;
    margin-left: 0.4em;
    transition: all 0.3s;
  }

  & svg {
    width: 18px;
    height: 18px;
    fill: white;
    transition: all 0.3s;
  }

  & .svg-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #be430d;
    margin-right: 0.5em;
    transition: all 0.3s;
  }

  &:hover .svg-wrapper {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &:hover svg {
    transform: rotate(45deg);
  }
`
