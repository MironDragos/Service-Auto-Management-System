import Sidebar from "./Sidebar.jsx"


export default function Layout({ left,right,children }){
    return(
        <div className="flex min-h-screen ">
            <Sidebar />
            <div className="w-4/5">
                <header className="flex justify-between items-center content-center bg-slate-200 px-8 h-20 ">
                    {right}
                    {left}
                </header>
                {children}
            </div>
        </div>

    )
}