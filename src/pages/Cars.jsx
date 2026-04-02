import Layout from "../components/Layout.jsx"
import cars from "../data/cars.js"
import {useState} from "react"
import { Link } from "react-router-dom";

export default function Cars() {
  const [filter, setFilter] = useState("All")
  
  const filtredList = filter === "All" ? cars : cars.filter(car => car.status == filter)
  let active

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-3 p-6 w-full h-[90%]">

          <div className="flex justify-between px-6 pt-6 ">
            <div className="flex gap-6">
              <p onClick={()=> setFilter("All") } className={`font-normal text-xl text-slate-700 hover:text-slate-600 hover:cursor-pointer ${filter === "All" ? 'text-slate-800 underline' : 'text-slate-700'}`}>All</p>
              <p onClick={()=> setFilter("Waiting")} className={`font-normal text-xl text-slate-700 hover:text-slate-600 hover:cursor-pointer ${filter === "Waiting" ? 'text-slate-800 underline' : 'text-slate-700'}`}>Waiting</p>
              <p onClick={()=> setFilter("In progress")} className={`font-normal text-xl text-slate-700 hover:text-slate-600 hover:cursor-pointer ${filter === "In progress" ? 'text-slate-800 underline' : 'text-slate-700'}`}>In progress</p>
              <p onClick={()=> setFilter("Completed")} className={`font-normal text-xl text-slate-700 hover:text-slate-600 hover:cursor-pointer ${filter === "Completed" ? 'text-slate-800 underline' : 'text-slate-700'}`}>Completed</p>
            </div>
            <div>
              <Link to="/add-car" className="font-normal text-lg text-blue-600 underline hover:text-blue-800" >Add a car</Link>
            </div>
          </div>

          <div className="px-6 bg-white overflow-hidden">
  
  <table className="w-full flex flex-col">
    <thead className="pb-4 w-full">
      <tr className="flex w-full rounded-lg bg-slate-200"> 
        <th className="flex-1 border-l border-y border-slate-400 p-2 rounded-l-lg">Id</th>
        <th className="flex-1 border-y border-slate-400 p-2">Client</th>
        <th className="flex-1 border-y border-slate-400 p-2">Car</th>
        <th className="flex-1 border-y border-slate-400 p-2">Mechanic</th>
        <th className="flex-1 border-y border-slate-400 p-2">Status</th>
        <th className="flex-1 border-y border-slate-400 p-2">Date</th>
        <th className="flex-1 border-r border-y border-slate-400 p-2 rounded-r-lg">Action</th>
      </tr>
    </thead>
    
    <tbody className=" pr-2 flex flex-col gap-2 w-full overflow-y-auto max-h-[575px] rounded-lg"> 
      {filtredList.map((prop) => (
        <tr key={prop.id} className="flex w-full mb-2 rounded-lg bg-slate-100"> 
          <td className="flex-1 border-l border-y border-slate-300 py-4 px-2 rounded-l-lg text-center">{prop.id}</td>
          <td className="flex-1 border-y border-slate-300 py-4 px-2">{prop.client}</td>
          <td className="flex-1 border-y border-slate-300 py-4 px-2">{prop.car}</td>
          <td className="flex-1 border-y border-slate-300 py-4 px-2">{prop.mechanic}</td>
          <td className="flex-1 border-y border-slate-300 py-4 px-2">{prop.status}</td>
          <td className="flex-1 border-y border-slate-300 py-4 px-2">{prop.date}</td>
          <td className="flex-1 border-r border-y border-slate-300 py-4 px-2 rounded-r-lg flex justify-between items-center">  
            <button className="text-blue-700" type="button">Edit</button>
            <button className="text-red-600" type="button">Delete</button>
          </td>
        </tr>
      ))} 
    </tbody>
  </table>
</div>

        </div>
      </Layout>
    </>
  )
}