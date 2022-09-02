import { nanoid } from "nanoid"
import Link from "next/link"
import { useState } from "react"
import ArrowSVG from "~/assets/icons/common/arrow-right.svg"

import Card from "../common/Card"

const RecommendedCourseSection = () => {
  const [courses, setCourses] = useState([
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
      title: "C++ Body Massage Class",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      key: nanoid(),
      imageSrc: "/assets/images/courses/javascript-course.svg",
      title: "PHP Universal Scam Center",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
  ])
  return (
    <div className="flex flex-col px-72 py-24 space-y-8">
      <div className="flex flex-row">
        <div className="w-1/2 flex flex-col space-y-4">
          <h3 className="font-semibold text-2xl">Recommended Course</h3>
          <p>Here are some class recommendations for you</p>
        </div>
        <div className="w-1/2 flex justify-end">
          <Link href="#">
            <a className="h-fit flex flex-row items-center hover:text-tertiary-blue group">
              More Course{" "}
              <span className="ml-8">
                <ArrowSVG className="fill-black group-hover:fill-tertiary-blue" />
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        {courses.map(({ key, imageSrc, title, description, link }) => (
          <Card
            key={key}
            imageSrc={imageSrc}
            title={title}
            description={description}
            link={link}
            imageSize="w-16 h-16"
            titleSize="text-lg"
            titleNextToImage={true}
          />
        ))}
      </div>
    </div>
  )
}

export default RecommendedCourseSection
