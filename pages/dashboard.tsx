import type { NextPage } from "next"

import EnrollNewClassSection from "../components/dashboard/EnrollNewClassSection"
import GetStartedSection from "../components/dashboard/GetStartedSection"
import PersonalInformationSection from "../components/dashboard/PersonalInformationSection"
import ProjectOfTheMonthSection from "../components/dashboard/ProjectOfTheMonthSection"
import RecommendedCourseSection from "../components/dashboard/RecommendedCourseSection"

const Dashboard: NextPage = () => {
  return (
    <>
      <PersonalInformationSection />
      <GetStartedSection />
      <EnrollNewClassSection />
      <RecommendedCourseSection />
      <ProjectOfTheMonthSection />
    </>
  )
}

export default Dashboard
