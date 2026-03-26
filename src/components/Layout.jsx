import Sidebar from "./Sidebar.jsx"
import Header from "./Header.jsx"

export default function Layout({ children }){
    return(
        <div className="flex min-h-screen ">
            <Sidebar />
            <div className="w-3/4">
                <Header/>
                {children}
            </div>
        </div>

    )
}