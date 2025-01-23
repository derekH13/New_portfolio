import React from 'react'
import Home from '../Home/Home'
import Projetos from '../Projetos/Projetos'
import Certificado from '../Certificado/Certificado'
import Carousel from '../../Component/CarrouselInfinito/CarrouselInfinito'
import ModalSocial from '../../containers/TodosProjetos/ModalSocial/ModalSocial'

const Dashboard = () => {
  return (
    <section>
      <Home />
      <Carousel />
      <Projetos />
      <Certificado />
      <ModalSocial />
    </section>
  )
}

export default Dashboard
