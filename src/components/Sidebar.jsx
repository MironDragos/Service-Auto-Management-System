import NavTab from "./NavTab"


export default function Sidebar(){
    return(
        <div className="flex flex-col items-center p-7 bg-slate-200 w-1/5 min-w-[250px] min-h-screen">
            <div className="size-20 rounded-full bg-slate-500"/>
            <h2>User_name</h2>
            <h3>User_email</h3>
            <div className="flex flex-col w-full mt-8">
                <NavTab page="Dashboard" />
                <NavTab page="Cars" />
                <NavTab page="Add-Car" />
                <hr className="border border-slate-600 border-solid m-3"/>
                <NavTab page="Settings" /> 
            </div>
        </div>
    )
}