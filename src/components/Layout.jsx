import Sidebar from "./Sidebar.jsx"
import Header from "./Header.jsx"

export default function Layout({ children }){
    return(
        <div class="flex min-h-screen w-120">
            <Sidebar class="h-screen"/>
            <div class="fle bg-slate-50">
                <Header/>
                {children}
            </div>
        </div>

    )
}