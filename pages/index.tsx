import type { NextPage } from "next"

import Navbar from "../components/common/Navbar"
import HeroSection from "../components/index/HeroSection"

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  )
}

export default Home
