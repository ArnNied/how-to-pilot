import type { NextPage } from "next"

import AboutUsSection from "../components/index/AboutUsSection"
import HeroSection from "../components/index/HeroSection"
import OurCourseSection from "../components/index/OurCourseSection"
import TrustedSection from "../components/index/TrustedSection"
import WhyUsSection from "../components/index/WhyUsSection"

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <OurCourseSection />
      <WhyUsSection />
      <AboutUsSection />
    </>
  )
}

export default Home
