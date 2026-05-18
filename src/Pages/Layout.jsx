import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
    <p>Layout</p>
        <main className="nav-container">
            <div className="nav-content">
                <Outlet/>
            </div>
        </main>
    
    </>
  )
}

export default Layout