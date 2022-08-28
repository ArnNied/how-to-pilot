import Image from "next/image"
import Link from "next/link"
import FacebookSVG from "~/assets/icons/common/facebook-icon.svg"
import GithubSVG from "~/assets/icons/common/github-icon.svg"
import InstagramSVG from "~/assets/icons/common/instagram-icon.svg"
import LinkedinSVG from "~/assets/icons/common/linkedin-icon.svg"

const Footer = () => {
  return (
    <div className="flex flex-col px-32 bg-secondary-base">
      <div className="flex flex-row justify-between items-center py-12">
        <div className="flex items-center">
          <div className="relative p-8">
            <Image
              src="/assets/images/common/howtopilot-logo.svg"
              layout="fill"
            />
          </div>
          <h1 className="font-bold text-4xl text-tertiary-salmon">
            HowToPilot
          </h1>
        </div>
        <div className="flex flex-row space-x-8">
          <Link href="#">
            <a>
              <GithubSVG className="fill-tertiary-salmon" />
            </a>
          </Link>
          <Link href="#">
            <a>
              <FacebookSVG className="fill-tertiary-salmon" />
            </a>
          </Link>
          <Link href="#">
            <a>
              <InstagramSVG className="fill-tertiary-salmon" />
            </a>
          </Link>
          <Link href="#">
            <a>
              <LinkedinSVG className="fill-tertiary-salmon" />
            </a>
          </Link>
        </div>
      </div>
      {/* GRADIENT DIVIDER */}
      <div className="h-px bg-gradient-to-r from-secondary-base via-secondary-lighter to-secondary-base"></div>
      {/* GRADIENT DIVIDER */}
      <div className="flex flex-row justify-between py-12">
        <div className="w-1/2 flex flex-row justify-between">
          <Link href="#">
            <a className="font-semibold text-sm text-white hover:text-tertiary-orange">
              Course
            </a>
          </Link>
          <Link href="#">
            <a className="font-semibold text-sm text-white hover:text-tertiary-orange">
              Learning Path
            </a>
          </Link>
          <Link href="#">
            <a className="font-semibold text-sm text-white hover:text-tertiary-orange">
              Community
            </a>
          </Link>
          <Link href="#">
            <a className="font-semibold text-sm text-white hover:text-tertiary-orange">
              About Us
            </a>
          </Link>
        </div>
        <div className="flex">
          <p className="text-white">Made with ❤️ © 2022 How To Pilot</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
