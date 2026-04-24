import Layout from "../components/Layout.jsx"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { supabase } from "../libs/supabaseClient.js";

export default function Cars({ passedFilter }) {

  !passedFilter ? passedFilter="All": null;

  const [cars, setCars] = useState([])
  const [filter, setFilter] = useState(passedFilter)
  const [searchContent, setSearchContent] = useState("")

  async function getData(){
    const { data, error } = await supabase
      .from('cars')
      .select('*')

    if(error){
      alert("Eroare: " + error)
    }else{
      setCars(data)
    }
  }
  
  useEffect(()=>{
    getData();
  }, [])

  function handleDelete(id){
    console.log(id)
  }

  const statusFiltredList = filter === "All" ? cars : cars.filter(car => car.status == filter)
  const searchFiltredList = statusFiltredList.filter(car=> car.client.toLowerCase().includes(searchContent.toLowerCase())||car.car_model.toLowerCase().includes(searchContent.toLowerCase()))
  if (cars.length === 0) {
    return (
      <Layout 
      left={
        <div></div>
      }
      right={
        <div>
          <h1 className="font-medium text-2xl">Cars in the workshop</h1>
        </div>
      }>
        <div className="flex items-center justify-center h-[90%] bg-slate-200">
          <div className="h-12 w-12 animate-spin rounded-full border-8 border-gray-200 border-t-slate-600"></div>
        </div>
      </Layout>
    )
  }

  return (
    <>
      <Layout
        left={
          <input onChange={(e)=>setSearchContent(e.target.value)} className="p-2 rounded-lg" type="text" id="myInput" on placeholder="Search cars.."></input>
        }
        right={
          <p className="font-medium text-2xl ">Cars in the workshop</p>
        }>
        <div className="flex flex-col gap-3 pt-2 w-full h-[90%] bg-slate-200">
          <div className="flex justify-between px-6 pt-6 ">
            <div className="flex gap-4">
              <p onClick={()=> setFilter("All") } className={`px-2 border-[1px] rounded-lg font-normal text-xl text-slate-700  hover:cursor-pointer ${filter === "All" ? 'bg-slate-800 border-white text-white' : 'text-slate-700'}`}>All</p>
              <p onClick={()=> setFilter("Waiting")} className={`px-2 border-[1px] rounded-lg font-normal text-xl text-slate-700 hover:cursor-pointer ${filter === "Waiting" ? 'bg-slate-800 border-white text-white' : 'text-slate-700'}`}>Waiting</p>
              <p onClick={()=> setFilter("In progress")} className={`px-2 border-[1px] rounded-lg font-normal text-xl text-slate-700 hover:cursor-pointer ${filter === "In progress" ? 'bg-slate-800 border-white text-white' : 'text-slate-700'}`}>In progress</p>
              <p onClick={()=> setFilter("Completed")} className={`px-2 font-normal border-[1px] rounded-lg text-xl text-slate-700 hover:cursor-pointer ${filter === "Completed" ? 'bg-slate-800 border-white text-white' : 'text-slate-700'}`}>Completed</p>
            </div>
            <div>
              <Link to="/add-car" className="font-normal text-lg text-blue-600 underline hover:text-blue-800" >Add a car</Link>
            </div>
          </div>
          <div className="px-6 overflow-hidden">
            <table className="w-full flex flex-col ">
              <thead className=" pb-4 w-full">
                <tr className="flex w-full rounded-lg bg-slate-100"> 
                  <th className="flex-1 border-l border-y border-slate-400 p-2 rounded-l-lg">Id</th>
                  <th className="flex-1 border-y border-slate-400 p-2">Client</th>
                  <th className="flex-1 border-y border-slate-400 p-2">Car</th>
                  <th className="flex-1 border-y border-slate-400 p-2">Mechanic</th>
                  <th className="flex-1 border-y border-slate-400 p-2">Status</th>
                  <th className="flex-1 border-y border-slate-400 p-2">Date</th>
                  <th className="flex-1 border-r border-y border-slate-400 p-2 rounded-r-lg">Action</th>
                </tr>
              </thead>
              <tbody className=" pr-2 flex flex-col gap-2 w-full overflow-y-auto max-h-[590px] rounded-lg"> 
                {searchFiltredList.map((prop) => (
                  <tr key={prop.id} className="flex w-full mb-2 rounded-lg bg-slate-100"> 
                    <td className="flex-1 border-l border-y border-slate-300 py-4 px-2 rounded-l-lg text-center">{prop.id}</td>
                    <td className="flex-1 border-y border-slate-300 py-4 px-2">{prop.client}</td>
                    <td className="flex-1 border-y border-slate-300 py-4 px-2">{prop.car_model}</td>
                    <td className="flex-1 border-y border-slate-300 py-4 px-2">{prop.mechanic}</td>
                    <td className="flex-1 border-y border-slate-300 py-4 px-2">{prop.status}</td>
                    <td className="flex-1 border-y border-slate-300 py-4 px-2">{prop.date}</td>
                    <td className="flex-1 border-r border-y border-slate-300 py-4 px-2 rounded-r-lg flex justify-between items-center">  
                      <Link className="text-blue-600" to={`/car-details/${prop.id}`}>Edit</Link>
                      <button onClick={async ()=>{
                        const { data, error } = await supabase
                          .from('cars')
                          .delete('*')
                          .eq('id',prop.id)
                        if(error){
                          alert("Eroare: " + error)
                        }else{
                          getData();
                        }
                      }} className="text-red-600" type="button">Delete</button>
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