import { Color, Title } from '../../style'
import { ContainerFramerks, EstiloCard, EstiloTitulo } from './styled'
import { Estiloframeworks } from './styled'

type Props = {
  img: string
  title: string
  descricao: string
  frameworks: string[]
  link: string
  github: string
}

const CardProjetos = ({
  img,
  title,
  descricao,
  frameworks,
  link,
  github
}: Props) => {
  return (
    <EstiloCard className="card">
      <img src={img} alt="" />
      <EstiloTitulo>
        <h1>
          <span>h4</span>
          <span className="meio">{title}</span>
          <span>h4</span>
        </h1>
      </EstiloTitulo>
      <ContainerFramerks>
        {frameworks.map((item, index) => (
          <Estiloframeworks className={item} key={index}>
            {item}
          </Estiloframeworks>
        ))}
      </ContainerFramerks>
    </EstiloCard>
  )
}

export default CardProjetos
