import { Outlet } from "react-router-dom"
import Navs from "./Navs"
import AppTitle from "./AppTitle"

const MainLayout = () => {
    return (
        <div>
            <Navs />
            {/* <h1> Main Layout</h1> */}
            <AppTitle/>
            <Outlet />
        </div>
    )
}

export default MainLayout