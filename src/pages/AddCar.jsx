import Layout from "../components/Layout.jsx"
import { useReact } from "react"

export default function AddCar() {
  return (
    <Layout 
      left={
        <div></div>
      }
      right={
        <div></div>
      }>
      <div className="flex flex-col justify-center items-center gap-6 p-6 w-full h-[90%]">
        <div className="flex flex-col justify-center items-center h-5/6 w-9/12 border-[1px] bg-slate-200 border-slate-300 p-6 px-8 rounded-lg">
          <h1 className="text-2xl font-semibold" >Add a car</h1>
          <form className="flex flex-col justify-evenly pt-4 h-full w-full" action="">
            <label htmlFor="clientName">Client Name</label>
            <input className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-2" id="clientName" type="text"/>

            <label htmlFor="carModel">Car Model</label>
            <input className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-2" id="carModel" type="text"/>

            <label htmlFor="mechanic">Mechanic</label>
            <input className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-2" id="mechanic" type="text"/>

            <label htmlFor="clientName">Status</label>
            <input className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-2" id="Status" type="text"/>

            <label htmlFor="clientName">Date</label>
            <input className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-2" id="Date" type="text"/>

            <input className="bg-slate-500 p-2 w-36 rounded-md text-white cursor-pointer font-medium" type="submit" name="" id="" />
          </form>
        </div>
      </div>
    </Layout>
  )
}