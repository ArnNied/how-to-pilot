import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import ArrowSVG from "~/assets/icons/common/arrow-right.svg"

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
    icon: "/assets/images/index/our-course/java-course.svg",
    title: "Mastering React JS",
    description: "react is one of the most favorite framework",
    link: "#",
  },
]

const RoadmapSection: NextPage = () => {
  return (
    <div className="flex flex-col justify-center py-16 px-32 space-y-8">
      <div className="flex flex-col space-y-4">
        <h2 className="text-secondary-base text-center text-opacity-50">
          Roadmap
        </h2>
        <h3 className="font-bold text-4xl text-center ">
          Try Our Learning Path
        </h3>
      </div>
      <div className="flex flex-row space-x-8">
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
                    <ArrowSVG className="fill-tertiary-blue group-hover:fill-tertiary-orange" />
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

export default RoadmapSection
