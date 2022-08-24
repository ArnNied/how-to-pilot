import type { NextPage } from "next"

import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"
import AboutUsSection from "../components/index/AboutUsSection"
import HeroSection from "../components/index/HeroSection"
import OurCourseSection from "../components/index/OurCourseSection"
import TrustedSection from "../components/index/TrustedSection"
import WhyUsSection from "../components/index/WhyUsSection"

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <OurCourseSection />
      <WhyUsSection />
      <AboutUsSection />
      <Footer />
    </>
  )
}

export default Home
