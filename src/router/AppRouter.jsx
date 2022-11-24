import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes"
// import { MarvelPage } from "../heroes/pages/MarvelPage"
import { Navbar } from "../ui"



export const AppRouter = () => {
  return (
    <>
        <Routes>
          
          <Route path="login" element={<LoginPage />} />
          <Route path="/*" element={<HeroesRoutes />} />
          

        </Routes>
    </>
  )
}
