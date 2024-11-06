import { Color, Globalcss, Interface, Text, Title } from '../../../style'
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
        <div className="imagem__eu">
          <img src="./assets/eu.png" alt="" />
        </div>

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
            de aprofundar meus estudos, descobri um amor pelo desenvolvimento de
            sistemas. Desde jovem, sempre gostei de resolver problemas, e essa
            habilidade se transformou em uma verdadeira motivação para seguir
            evoluindo na tecnologia.
          </Text>
        </Styledtexto>
        <Button>CURICULO</Button>
      </Interface>
    </section>
  )
}

export default Home
