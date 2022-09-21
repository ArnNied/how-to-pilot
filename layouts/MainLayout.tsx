import { PropsWithChildren } from "react"

import Footer from "../components/common/Footer"
import MainLayoutWithoutFooter from "./MainLayoutWithoutFooter"

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <MainLayoutWithoutFooter>{children}</MainLayoutWithoutFooter>
      <Footer />
    </>
  )
}

export default MainLayout
