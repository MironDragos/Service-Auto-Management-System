import Sidebar from "./Sidebar.jsx"


export default function Layout({ left,right,children }){
    return(
        <div className="flex min-h-screen ">
            <Sidebar />
            <div className="w-4/5">
                <header className="flex justify-between items-center content-center bg-gray-100 px-6 h-20 border-b-[1px] border-slate-300">
                    {right}
                    {left}
                </header>
                {children}
            </div>
        </div>

    )
}