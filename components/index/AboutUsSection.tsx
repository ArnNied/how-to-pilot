import Image from "next/image"
import Link from "next/link"

const AboutUsSection = () => {
  return (
    <div className="flex flex-row items-center px-32 py-16 space-x-12">
      <div className="w-5/12 flex flex-col space-y-4">
        <h2 className="text-sm text-black text-opacity-50">About Us</h2>
        <h3 className="font-bold text-3xl">About Us</h3>
        <div className="flex flex-col space-y-4">
          <p>
            We were founded in 2022, our focus is to provide the best material
            so that users can learn comfortably and easily understand. How To
            Pilot makes all classes free so that all people in the community
            have the opportunity to learn.
          </p>
          <Link href="#">
            <a className="w-fit px-4 py-2 hover:bg-tertiary-orange font-semibold border-2 border-secondary-base rounded box-shadow-on-hover-br">
              Learn More
            </a>
          </Link>
        </div>
      </div>
      <div className="w-7/12 flex items-center">
        <div className="relative w-full h-96">
          <Image
            src="/assets/images/index/about-us/about-us-image.svg"
            layout="fill"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection
