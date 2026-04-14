import Layout from "../components/Layout.jsx"
import cars from "../data/cars.js"
import { Link, useLocation } from "react-router-dom";
import { Pencil } from "lucide-react"

export default function CarDetails() {

  const path = useLocation().pathname;
  const preid = path.split("/car-details/")
  const id = preid[1]-1;
  return (
    <Layout 
      left={
        <div></div>
      }
      right={
        <div>
          <h1 className="font-medium text-2xl">Detalii comanda: #{id}</h1>
        </div>
      }>
        <div className="flex flex-col gap-3 p-6 w-full h-[90%]">

          <div className="flex flex-row bg-slate-200 border-[1px] border-slate-300 p-6 gap-4 rounded-lg h-full">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-9/12">
              <div className="bg-slate-200 border-2 border-slate-300 p-4 rounded-lg">
                <p>{cars[id].client}</p>
              </div>
              <div className="bg-slate-200 border-2 border-slate-300 p-4 rounded-lg">
                <p>{cars[id].car}</p>
              </div>
              <div className="bg-slate-200 border-2 border-slate-300 p-4 rounded-lg">
                <p>{cars[id].mechanic}</p>
              </div>
              <div className="bg-slate-200 border-2 border-slate-300 p-4 rounded-lg">
                <p>{cars[id].date}</p>
              </div>
            </div>
            <div className="flex flex-col text-left w-3/12 gap-3">
                <h1 className="font-medium text-2xl w-full text-right" >Status: <span className="font-light text-xl bg-violet-300 border-[1px] border-violet-400 rounded-lg p-1">{cars[id].status}</span></h1>
                <div className="bg-slate-200 border-2 border-slate-300 p-2 rounded-lg flex justify-center items-center gap-2">
                  <Pencil size={22}/>
                  <p className="text-lg">Editeaza comanda</p>
                </div>
                <div className="bg-slate-200 border-2 border-slate-300 p-5 rounded-lg"></div>
                <div className="bg-slate-200 border-2 border-slate-300 p-5 rounded-lg"></div>
                <div className="bg-slate-200 border-2 border-slate-300 p-5 rounded-lg"></div>
            </div>
          </div>
        </div>
    </Layout>
  )
}