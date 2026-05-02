import NavTab from "./NavTab";
export default function Sidebar({ email, name }) {
  return (
    <div className="flex flex-col items-center p-7 bg-gray-100 w-1/5 min-w-[250px] min-h-screen border-r-[1px] border-slate-300">
      <img src="public/defaultPfp.jpg" className="size-20 rounded-full" />
      <h2 className="h-8 pt-2 mb-1 font-medium text-xl">{name}</h2>
      <h3 className="h-8 font-light">{email}</h3>
      <div className="flex flex-col w-full mt-6">
        <NavTab page="Dashboard" />
        <NavTab page="Cars" />
        <NavTab page="Add-Car" />
        <hr className="border border-slate-600 border-solid m-3" />
        <NavTab page="Settings" />
      </div>
    </div>
  );
}
