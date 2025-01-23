import { Color, ContainerText, Text } from '../../../style'
import { EstiloCertificado } from './styled'

import { motion } from 'framer-motion'

type Props = {
  nome: string
  instituicao: string
  descricao: string
}

const Curso = ({ nome, instituicao, descricao }: Props) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.9 }}
    >
      <EstiloCertificado>
        <h1>
          <span>Nome do Curso: </span>
          {nome}
        </h1>
        <h1>
          <span>Instituição: </span>
          {instituicao}
        </h1>
        <ContainerText>
          <Text bold={200} color={Color.text} height={18}>
            <h1>
              <span>Descrição: </span>
            </h1>
            {descricao}
          </Text>
        </ContainerText>
      </EstiloCertificado>
    </motion.div>
  )
}

export default Curso
