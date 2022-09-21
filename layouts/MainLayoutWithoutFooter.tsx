import { PropsWithChildren } from "react"

import Navbar from "../components/common/Navbar"

const MainLayoutWithoutFooter = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col pt-20">{children}</div>
    </>
  )
}

export default MainLayoutWithoutFooter
