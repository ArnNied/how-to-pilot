import { nanoid } from "nanoid"
import Image from "next/image"

import Card from "../../common/Card"

// TODO: IMPORT CORRECT IMAGE
const COURSES = [
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "Javascript Beginner Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "CSS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "HTML Hacking Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "Python Tamer Proffesional",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "PHP Universal Scam Center",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "C# Musical Melody Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "Java Barista Expert Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "Ruby Gem Miner Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "Golang Traveling Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "Rust Cleaning Home Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "Flutter Flexible Yoga Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },

  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "Swift Running Athlete Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "SQL Dolphin Riding Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "Haskell Aero Missile Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "C++ Body Massage Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    key: nanoid(),
    imageSrc: "/assets/images/index/our-course/java-course.svg",
    title: "R What?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
]

const CourseSection = () => {
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
      <div className="grid grid-cols-4 gap-5">
        {COURSES.map(({ key, imageSrc, title, description, link }) => (
          <Card
            key={key}
            imageSrc={imageSrc}
            title={title}
            description={description}
            link={link}
            titleNextToImage={true}
            imageSize="w-14 h-14"
            truncateAfter={2}
            titleSize="text-lg"
          />
        ))}
      </div>
    </div>
  )
}

export default CourseSection
