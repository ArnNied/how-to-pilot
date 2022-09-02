import { nanoid } from "nanoid"
import { useState } from "react"

import Card from "../common/Card"

const GetStartedSection = () => {
  const [features, setFeatures] = useState([
    {
      key: nanoid(),
      imageSrc: "/assets/images/courses/javascript-course.svg",
      title: "Coaching With Expert",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      key: nanoid(),
      imageSrc: "/assets/images/courses/javascript-course.svg",
      title: "Learning Path",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      key: nanoid(),
      imageSrc: "/assets/images/courses/javascript-course.svg",
      title: "Pilot Community",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      key: nanoid(),
      imageSrc: "/assets/images/courses/javascript-course.svg",
      title: "Project For Pilot",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
  ])
  return (
    <div className="flex flex-col px-72 py-24 space-y-8">
      <div className="flex flex-col space-y-4">
        <h4 className="font-semibold text-2xl">Let's Get Started</h4>
        <p className="flex w-1/2">
          To start learning how to pilot, we recommend that you explore some of
          our flagship features
        </p>
      </div>
      <div className="grid grid-cols-4 gap-x-4">
        {features.map(({ key, imageSrc, title, description, link }) => (
          <Card
            key={key}
            imageSrc={imageSrc}
            title={title}
            description={description}
            link={link}
            imageSize="w-20 h-20"
            titleSize="text-lg"
          />
        ))}
      </div>
    </div>
  )
}

export default GetStartedSection
