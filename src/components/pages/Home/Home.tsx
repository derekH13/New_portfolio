import { Color, Globalcss, Interface, Text, Title } from '../../../style'
import React from 'react'
import { motion } from 'framer-motion'

import Button from '../../Component/Button/Button'
import Navegation from '../../Component/Navegation/Navegation'
import './Home.css'

import { EstyledTitulo, Styledtexto } from './styled'

const Home = () => {
  return (
    <section className="Home">
      <Navegation pagina="" />
      <Globalcss />
      <Interface>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="imagem__eu"
        >
          <img src="./assets/eu.png" alt="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          <EstyledTitulo>
            <Title color={Color.laranja} height={60} bold={700}>
              Desenvolvedor
            </Title>
            <Title color={Color.text} height={60} bold={700}>
              Full Stack
              <span>h1</span>
            </Title>
          </EstyledTitulo>

          <Styledtexto>
            <Text bold={300} color={Color.text} height={18}>
              Minha paixão pela área de TI surgiu ainda na faculdade, onde, além
              de aprofundar meus estudos, descobri um amor pelo desenvolvimento
              de sistemas. Desde jovem, sempre gostei de resolver problemas, e
              essa habilidade se transformou em uma verdadeira motivação para
              seguir evoluindo na tecnologia.
            </Text>
          </Styledtexto>
          <a
            href="/assets/Curiculo..docx"
            download="nome-do-arquivo"
            style={{ textDecoration: 'none' }}
          >
            <Button>CURICULO</Button>
          </a>
        </motion.div>
      </Interface>
    </section>
  )
}

export default Home
