import Header from "../../Header/Header"
import { Outlet } from 'react-router-dom'
import Footer from "../../footer/Footer"
function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout