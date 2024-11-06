import { projetosArray } from '../../../shared/interface/interface'
import CardProjetos from '../../CardProjetos/CardProjetos'
import { ContainerProjeto } from './styled'

const TodosProjetos = () => {
  return (
    <ContainerProjeto>
      {projetosArray.map((item, index) => (
        <CardProjetos
          descricao={item.descricao}
          frameworks={item.frameworks}
          github={item.github}
          img={item.img}
          link={item.link}
          title={item.title}
          key={index}
        />
      ))}
    </ContainerProjeto>
  )
}

export default TodosProjetos
