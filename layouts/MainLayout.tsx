import { PropsWithChildren } from "react"

import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col pt-20">{children}</div>
      <Footer />
    </>
  )
}

export default MainLayout
