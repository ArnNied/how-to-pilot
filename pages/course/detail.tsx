import type { NextPage } from "next"

import InformationSection from "../../components/course/detail/InformationSection"
import SyllabusSection from "../../components/course/detail/SyllabusSection"

const CourseDetail: NextPage = () => {
  return (
    <>
      <InformationSection />
      <SyllabusSection />
    </>
  )
}

export default CourseDetail
