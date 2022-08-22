import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"

const CommonNavbar: NextPage = () => {
  return (
    <nav className="fixed w-full flex flex-row bg-primary-base border-b-2 border-black divide-x-2 divide-black z-50">
      <div className="w-4/12 flex items-center justify-center">
        <div className="relative p-8">
          <Image src="/assets/images/howtopilot-logo.svg" layout="fill" />
        </div>
        <h1 className="font-bold text-4xl">HowToPilot</h1>
      </div>
      <Link href="#">
        <a className="flex grow items-center justify-center p-4 hover:bg-tertiary-base font-semibold">
          Courses
        </a>
      </Link>
      <Link href="#">
        <a className="flex grow items-center justify-center p-4 hover:bg-tertiary-base font-semibold">
          Learning Path
        </a>
      </Link>
      <Link href="#">
        <a className="flex grow items-center justify-center p-4 hover:bg-tertiary-base font-semibold">
          About Us
        </a>
      </Link>
      <div className="w-auto flex flex-row justify-center px-16 py-4 space-x-4">
        <Link href="#">
          <a className="flex items-center px-4 py-2 bg-primary-base hover:bg-tertiary-base font-semibold border-2 border-black rounded">
            Sign In
          </a>
        </Link>
        <Link href="#">
          <a className="flex flex-row items-center px-4 py-2 bg-secondary-base font-semibold text-white border-2 border-black rounded">
            Register
            <div className="relative flex items-center p-2 ml-4">
              <Image
                src="/assets/icons/common/register-arrow.svg"
                layout="fill"
              />
            </div>
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default CommonNavbar
