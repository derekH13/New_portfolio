import './Projetos.css'
import { Color, Globalcss, Interface, Title } from '../../../style'
import { StyledTitulo } from '../Home/styled'
import TodosProjetos from '../../containers/TodosProjetos/TodosProjetos'
import Navegation from '../../Component/Navegation/Navegation'

const Projetos = () => {
  return (
    <section className="Projetos">
      <Navegation pagina="projetos" />
      <Globalcss />
      <Interface>
        <StyledTitulo>
          <Title height={60} bold={700} color={Color.laranja}>
            <span>h1</span>
            Projetos
            <span>h1</span>
          </Title>
        </StyledTitulo>
        <TodosProjetos />
      </Interface>
    </section>
  )
}

export default Projetos
