import { nanoid } from "nanoid"
import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import ArrowSVG from "~/assets/icons/common/arrow-right.svg"

// TODO: IMPORT CORRECT IMAGE
const COURSES = [
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "Javascript Beginner Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "CSS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "HTML Hacking Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "Python Tamer Proffesional",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "PHP Universal Scam Center",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "C# Musical Melody Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "Java Barista Expert Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "Ruby Gem Miner Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "Golang Traveling Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "Rust Cleaning Home Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "Flutter Flexible Yoga Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },

  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "Swift Running Athlete Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "SQL Dolphin Riding Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "Haskell Aero Missile Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "C++ Body Massage Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    image: "/assets/images/index/our-course/javascript-course.svg",
    title: "R What?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
]

const CourseSection: NextPage = () => {
  return (
    <div className="flex flex-col px-32 pb-16 space-y-8">
      <div className="flex flex-row justify-between">
        <form className="flex flex-row items-center px-4 py-2 bg-white border-2 border-black rounded-full space-x-2">
          <label htmlFor="course_search" className="relative w-6 h-6">
            <Image src="/assets/icons/common/search-icon.svg" layout="fill" />
          </label>
          <input
            id="course_search"
            type="text"
            placeholder="Search Course"
            className="outline-none"
          />
        </form>
        {/* TODO: ONCLICK FUNCTINOALITY NEEDED */}
        <div className="flex items-center">
          <button className="flex flex-row justify-between items-center space-x-4">
            <h4 className="font-semibold text-xl">Course By Language</h4>
            <div className="relative w-6 h-6">
              <Image
                src="/assets/icons/common/arrow-down-solid.svg"
                layout="fill"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 ">
        {COURSES.map(({ key, image, title, description, link }) => (
          <div
            key={key}
            className="flex rounded-lg box-shadow-on-hover-with-ring-br"
          >
            <div className="w-full flex flex-col p-8 bg-white hover:bg-primary-base rounded-lg">
              <div className="flex flex-row items-center space-x-4">
                <div className="flex w-1/3 items-center">
                  <div className="relative w-16 h-16">
                    <Image src={image} layout="fill" />
                  </div>
                </div>

                <h4 className="w-2/3 flex font-semibold text-xl">{title}</h4>
              </div>
              <div className="flex mt-4 mb-4">
                <p className="text-sm">{description}</p>
              </div>
              <div className="flex mt-auto">
                <Link href={link}>
                  <a className="w-full flex flex-row justify-between items-center text-tertiary-blue hover:text-tertiary-orange group">
                    Learn More {/* <span className="relative"> */}
                    <ArrowSVG className="fill-tertiary-blue group-hover:fill-tertiary-orange" />
                    {/* </span> */}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseSection
