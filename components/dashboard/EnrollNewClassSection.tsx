import Link from "next/link"

import ButtonWithRingShadow from "../common/ButtonWithRingShadow"

const EnrollNewClassSection = () => {
  return (
    <div className="flex flex-col px-32  py-48 items-center bg-secondary-base space-y-8">
      <h2 className="flex font-bold text-6xl text-primary-base text-center">
        Start Enroll New Class
      </h2>
      <ButtonWithRingShadow
        text="Browse Class"
        link="/course"
        buttonColor="bg-primary-base group-hover:bg-tertiary-orange"
        shadowColor="bg-secondary-base group-hover:bg-secondary-base"
        shadowBorderColor="border-primary-base group-hover:border-tertiary-orange"
      />
    </div>
  )
}

export default EnrollNewClassSection
