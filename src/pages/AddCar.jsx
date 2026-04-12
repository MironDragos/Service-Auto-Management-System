import Layout from "../components/Layout.jsx"
import { useState } from "react"

export default function AddCar() {
  const [clientName, setClientName] = useState("")
  const [carModel, setCarModel] = useState("")
  const [mechanic, setMechanic] = useState("")
  const [status, setStatus] = useState("")
  const [date, setDate] = useState("")

  function handleSubmit(e) {
  e.preventDefault()
  console.log({ clientName, carModel, mechanic, status, date })
  }

  return (
    <Layout 
      left={
        <div></div>
      }
      right={
        <div></div>
      }>
      <div className="flex flex-col justify-center items-center gap-6 p-6 w-full h-[90%]">
        <div className="flex flex-col justify-center items-center w-7/12 border-[1px] bg-slate-200 border-slate-300 p-6 px-8 rounded-lg">
          <h1 className="text-2xl font-semibold" >Add a car</h1>
          <form onSubmit={handleSubmit} className="flex flex-col pt-4 h-full w-full" action="">
            <label htmlFor="clientName">Client Name</label>
            <input onChange={(e)=>setClientName(e.target.value)} id="clientName" type="text" className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6"/>

            <label htmlFor="carModel">Car Model</label>
            <input onChange={(e)=>setCarModel(e.target.value)} id="carModel" type="text" className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6" />

            <label htmlFor="mechanic">Mechanic</label>
            <input onChange={(e)=>setMechanic(e.target.value)} id="mechanic" type="text" className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6" />

            <div className="flex justify-between "> 
              <div className="flex flex-col w-[48%]">
                <label htmlFor="status">Status</label>
                <select onChange={(e)=>setStatus(e.target.value)} name="status" id="status" className="border-slate-300 bg-slate-50 border-[1px] rounded-lg h-10 mb-6">
                  <option value="Waiting" className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6">Waiting</option>
                  <option value="Completed" className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6">Completed</option>
                  <option value="In progress" className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6">In progress</option>
                </select>
              </div>
              <div className="flex flex-col w-[48%]">
                <label htmlFor="Date">Date</label>
                <input onChange={(e)=>setDate(e.target.value)} id="Date" type="date" className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6" />
              </div>
            </div>

            <input className="bg-slate-500 p-2 w-36 rounded-md text-white cursor-pointer font-medium" type="submit" name="" id="" />
          </form>
        </div>
      </div>
    </Layout>
  )
}