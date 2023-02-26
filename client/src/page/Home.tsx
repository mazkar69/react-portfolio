import React from 'react'
import SliderPrimary from '../component/blog/SliderPrimary'
import Contact from '../component/home/contact/Contact'
import Counter from '../component/home/counter/Counter'
import Footer from '../component/home/footer/Footer'
import Hero from '../component/home/hero/Hero'
import ParellEffect from '../component/home/parellEffect/ParellEffect'
import Project from '../component/home/project/Project'
import Skill from '../component/home/skill/Skill'
import { useGlobalContext } from '../context'

const Home = () => {

  const {trandingPost} = useGlobalContext();

  return (
    <>

      <Hero/>
      <SliderPrimary posts={trandingPost} tag="Latest" />
      <Skill/>
      <Counter/>
      <Project/>
      <ParellEffect/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home