import { Color, Globalcss, Interface, Title } from '../../../style'

import './certificado.css'
import { StyledTitulo } from '../Home/styled'
import Curso from '../../Component/Curso/Curso'
import { arrayCertificado } from '../../../shared/interface/interface'
import Navegation from '../../Component/Navegation/Navegation'

import { motion } from 'framer-motion'

const Certificado = () => {
  return (
    <section className="certificado">
      <Navegation pagina="cursos" />
      <Globalcss />
      <Interface>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <StyledTitulo>
            <Title bold={700} color={Color.laranja} height={60}>
              <span>h1</span>
              Cursos
              <span>h1</span>
            </Title>
          </StyledTitulo>
        </motion.div>
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
