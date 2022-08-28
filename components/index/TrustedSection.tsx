import { nanoid } from "nanoid"
import Image from "next/image"

const COMPANIES = [
  {
    key: nanoid(),
    image: "/assets/images/index/trusted/discord-logo.svg",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/trusted/coinbase-logo.svg",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/trusted/spotify-logo.svg",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/trusted/github-logo.svg",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/trusted/zoom-logo.svg",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/trusted/twitch-logo.svg",
  },
]

const TrustedSection = () => {
  return (
    <div className="flex flex-col px-16 pt-8 bg-secondary-base">
      <h2 className="font-semibold text-primary-base text-2xl text-center">
        Trusted In Many Company
      </h2>
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
