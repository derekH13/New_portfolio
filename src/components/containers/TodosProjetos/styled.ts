import styled from 'styled-components'

export const ContainerProjeto = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 6rem;
  column-gap: 4rem;

  @media (max-width: 660px) {
    margin-top: 60px;
    column-gap: 2rem;
  }
`
