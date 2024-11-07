import { Color, Title } from '../../style'
import { ContainerFramerks, EstiloCard, EstiloTitulo } from './styled'
import { Estiloframeworks } from './styled'

import { motion } from 'framer-motion'

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
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.9 }}
    >
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
    </motion.div>
  )
}

export default CardProjetos
