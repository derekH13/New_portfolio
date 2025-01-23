import './Projetos.css'
import { motion } from 'framer-motion'

import { Color, Globalcss, Interface, Title } from '../../../style'
import { StyledTitulo } from '../Home/styled'
import TodosProjetos from '../../containers/TodosProjetos/TodosProjetos'
import Navegation from '../../Component/Navegation/Navegation'

const Projetos = () => {
  return (
    <>
      <section className="Projetos">
        <Globalcss />
        <Interface>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <StyledTitulo>
              <Title height={60} bold={700} color={Color.laranja}>
                <span>h1</span>
                Projetos
                <span>h1</span>
              </Title>
            </StyledTitulo>
          </motion.div>
          <TodosProjetos />
        </Interface>
      </section>
    </>
  )
}

export default Projetos
