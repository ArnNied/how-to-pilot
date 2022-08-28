import { nanoid } from "nanoid"

import Card from "../common/Card"

const SELECTED_COURSES = [
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/react-course.svg",
    title: "Mastering React JS",
    description: "react is one of the most favorite framework",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/python-course.svg",
    title: "Python For Ai",
    description: "learning ai is fun, start your first ai with python",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/grid-course.svg",
    title: "GRID for dummy",
    description: "learn grid with absolutely beginner",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/interview-course.svg",
    title: "Coding interview",
    description: "having trouble getting an interview?",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "Mastering React JS",
    description: "react is one of the most favorite framework",
    link: "#",
  },
]

const RoadmapSection = () => {
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
      <div className="grid grid-cols-5 gap-x-5">
        {SELECTED_COURSES.map(({ key, imageSrc, title, description, link }) => (
          <Card
            key={key}
            imageSrc={imageSrc}
            title={title}
            description={description}
            link={link}
            titleNextToImage={false}
            imageSize="w-16 h-16"
            titleSize="text-xl"
          />
        ))}
      </div>
    </div>
  )
}

export default RoadmapSection
