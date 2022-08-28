import { NextPage } from "next"

import CourseSection from "../components/course/CourseSection"
import RoadmapSection from "../components/course/RoadmapSection"

const Course: NextPage = () => {
  return (
    <>
      <RoadmapSection />
      <CourseSection />
    </>
  )
}

export default Course
