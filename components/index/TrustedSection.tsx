import { NextPage } from "next"
import Image from "next/image"

const COMPANIES = [
  {
    key: "discord",
    image: "/assets/images/index/trusted/discord-logo.svg",
  },
  {
    key: "coinbase",
    image: "/assets/images/index/trusted/coinbase-logo.svg",
  },
  {
    key: "spotify",
    image: "/assets/images/index/trusted/spotify-logo.svg",
  },
  {
    key: "github",
    image: "/assets/images/index/trusted/github-logo.svg",
  },
  {
    key: "zoom",
    image: "/assets/images/index/trusted/zoom-logo.svg",
  },
  {
    key: "twitch",
    image: "/assets/images/index/trusted/twitch-logo.svg",
  },
]

const TrustedSection: NextPage = () => {
  return (
    <div className="flex flex-col px-16 pt-8 bg-secondary-base">
      {/* <div className="flex justify-center"> */}
      <h2 className="font-semibold text-primary-base text-2xl text-center">
        Trusted In Many Company
      </h2>
      {/* </div> */}
      <div className="flex flex-row justify-center items-center sm:space-x-12 md:space-x-20 lg:space-x-28">
        {COMPANIES.map(({ key, image }) => (
          <div key={key} className="w-1/12">
            <div className="relative w-24 h-24">
              <Image src={image} layout="fill" alt={key} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustedSection
