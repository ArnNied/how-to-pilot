import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import Arrow from "~/assets/icons/common/arrow-right.svg"

const SELECTED_COURSES = [
  {
    key: "react",
    icon: "/assets/images/index/our-course/react-course.svg",
    title: "Mastering React JS",
    description: "react is one of the most favorite framework",
    link: "#",
  },
  {
    key: "python",
    icon: "/assets/images/index/our-course/python-course.svg",
    title: "Python For Ai",
    description: "learning ai is fun, start your first ai with python",
    link: "#",
  },
  {
    key: "grid",
    icon: "/assets/images/index/our-course/grid-course.svg",
    title: "GRID for dummy",
    description: "learn grid with absolutely beginner",
    link: "#",
  },
  {
    key: "interview",
    icon: "/assets/images/index/our-course/interview-course.svg",
    title: "Coding interview",
    description: "having trouble getting an interview?",
    link: "#",
  },
  {
    key: "javascript",
    icon: "/assets/images/index/our-course/javascript-course.svg",
    title: "Mastering React JS",
    description: "react is one of the most favorite framework",
    link: "#",
  },
]

const OurCourseSection: NextPage = () => {
  return (
    <div className="flex flex-col px-32 py-16">
      <div className="flex flex-col space-y-4">
        <h2 className="text-secondary-base text-opacity-50 text-center">
          Our Course
        </h2>
        <h3 className="font-bold text-secondary-base text-3xl text-center">
          Browse Our Best Courses
        </h3>
      </div>
      <div className="flex flex-row px-12 mt-16 space-x-4">
        {SELECTED_COURSES.map(({ key, icon, title, description, link }) => (
          <div
            key={key}
            className="w-1/5 flex flex-col p-8 bg-white hover:bg-primary-base rounded-lg box-shadow-on-hover-with-ring-br"
          >
            <div className="h-full flex flex-col justify-between space-y-2">
              <div className="flex flex-col">
                <div className="relative w-12 h-12">
                  <Image src={icon} layout="fill" alt={key} />
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="font-bold text-secondary-light text-2xl">
                    {title}
                  </h3>
                  <p className="text-secondary-lighter text-base">
                    {description}
                  </p>
                </div>
              </div>
              <Link href={link}>
                <a className="w-fit flex flex-row items-center text-base text-tertiary-blue hover:text-tertiary-orange group">
                  Learn More
                  <span className="ml-4 w-fit h-full flex items-center">
                    <Arrow className="fill-tertiary-blue group-hover:fill-tertiary-orange" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurCourseSection