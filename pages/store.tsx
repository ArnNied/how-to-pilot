import type { NextPage } from "next"

import Banner from "../components/store/Banner"
import Catalogue from "../components/store/Catalogue"
import Header from "../components/store/Header"

const Store: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Catalogue title="Customize Profile" />
      <Catalogue title="Animated Avatar" />
    </>
  )
}

export default Store
