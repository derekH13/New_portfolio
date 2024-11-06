import { Color, ContainerText, Text } from '../../../style'
import { EstiloCertificado } from './styled'

type Props = {
  nome: string
  instituicao: string
  descricao: string
}

const Curso = ({ nome, instituicao, descricao }: Props) => {
  return (
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
        <Text bold={400} color={Color.text} height={18}>
          <h1>
            <span>Descrição: </span>
          </h1>
          {descricao}
        </Text>
      </ContainerText>
    </EstiloCertificado>
  )
}

export default Curso
