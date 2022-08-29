import Image from "next/image"
import Link from "next/link"

import ButtonWithRingShadow from "../common/ButtonWithRingShadow"

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-row -mt-20">
      <div className="w-7/12 flex items-center">
        <div className="flex flex-col md:px-16 lg:px-24 space-y-8">
          <div className="w-fit flex items-center space-x-4">
            <span className="w-16 h-0 border-2 border-black"></span>
            <h1 className="font-bold text-sm">LEARN LIKE A PILOT</h1>
          </div>
          <h2 className="w-full flex font-bold text-6xl leading-snug">
            Easy Way To Learn Programming
          </h2>
          <h3 className="w-full flex ">
            Learn programming easy and free only in How To Pilot. There are more
            than 50 free classes that you can access anytime and anywhere.
          </h3>
          <ButtonWithRingShadow text="Join Now" />
        </div>
      </div>
      <div className="w-5/12 px-8 py-24">
        <div className="relative w-full h-full">
          <Image src="/assets/images/index/hero/hero-image.svg" layout="fill" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
