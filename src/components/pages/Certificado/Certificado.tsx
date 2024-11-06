import { Color, Globalcss, Interface, Title } from '../../../style'
import './certificado.css'
import { StyledTitulo } from '../Home/styled'
import Curso from '../../Component/Curso/Curso'
import { arrayCertificado } from '../../../shared/interface/interface'
import Navegation from '../../Component/Navegation/Navegation'

const Certificado = () => {
  return (
    <section className="certificado">
      <Navegation pagina="cursos" />
      <Globalcss />
      <Interface>
        <StyledTitulo>
          <Title bold={700} color={Color.laranja} height={60}>
            <span>h1</span>
            Cursos
            <span>h1</span>
          </Title>
        </StyledTitulo>

        <div className="Container">
          {arrayCertificado.map((item, index) => (
            <Curso
              descricao={item.descricao}
              instituicao={item.instituicao}
              nome={item.nome}
              key={index}
            />
          ))}
        </div>
      </Interface>
    </section>
  )
}

export default Certificado
