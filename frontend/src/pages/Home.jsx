import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopFreelancer from '../components/TopFreelancer'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopFreelancer />
      <Banner />
    </div>
  )
}

export default Home