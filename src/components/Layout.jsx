import Sidebar from "./Sidebar.jsx"
import Header from "./Header.jsx"

export default function Layout({ children }){
    return(
        <div className="flex min-h-screen ">
            <Sidebar />
            <div className="w-4/5">
                <Header/>
                {children}
            </div>
        </div>

    )
}