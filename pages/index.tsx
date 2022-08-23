import type { NextPage } from "next"

import Navbar from "../components/common/Navbar"
import HeroSection from "../components/index/HeroSection"
import OurCourseSection from "../components/index/OurCourseSection"
import TrustedSection from "../components/index/TrustedSection"

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <OurCourseSection />
    </>
  )
}

export default Home
