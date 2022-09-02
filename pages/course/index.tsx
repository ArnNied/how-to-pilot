import type { NextPage } from "next"

import CourseSection from "../../components/course/index/CourseSection"
import RoadmapSection from "../../components/course/index/RoadmapSection"

const Course: NextPage = () => {
  return (
    <>
      <RoadmapSection />
      <CourseSection />
    </>
  )
}

export default Course
