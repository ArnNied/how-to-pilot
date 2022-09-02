import { nanoid } from "nanoid"
import { useState } from "react"

import ButtonWithRingShadow from "../common/ButtonWithRingShadow"
import Card from "../common/Card"

const ProjectOfTheMonthSection = () => {
  const [projects, setProjects] = useState([
    {
      key: nanoid(),
      imageSrc: "/assets/images/courses/javascript-course.svg",
      title: "Python Tamer Crash Course",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      key: nanoid(),
      imageSrc: "/assets/images/courses/javascript-course.svg",
      title: "Python Tamer Crash Course",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      key: nanoid(),
      imageSrc: "/assets/images/courses/javascript-course.svg",
      title: "Python Tamer Crash Course",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
  ])

  return (
    <div className="flex flex-col justify-center px-72 py-16 bg-secondary-base space-y-12">
      <h3 className="font-semibold text-3xl text-primary-base text-center">
        Project Of The Month
      </h3>
      <div className="grid grid-cols-3 gap-x-4">
        {/* TODO: ADD MEDALS */}
        {projects.map(({ key, imageSrc, title, description, link }) => (
          <Card
            key={key}
            imageSrc={imageSrc}
            title={title}
            description={description}
            link={link}
            imageSize="w-20 h-20"
            titleSize="text-lg"
            titleNextToImage={true}
          />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <ButtonWithRingShadow
          text="Submit Your Project"
          buttonColor="bg-primary-base group-hover:bg-tertiary-orange"
          shadowColor="bg-secondary-base group-hover:bg-secondary-base"
          shadowBorderColor="border-primary-base group-hover:border-tertiary-orange"
        />
      </div>
    </div>
  )
}

export default ProjectOfTheMonthSection
