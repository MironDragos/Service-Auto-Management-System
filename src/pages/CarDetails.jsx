import Layout from "../components/Layout.jsx"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import { Pencil } from "lucide-react"
import { supabase } from "../libs/supabaseClient.js";

export default function CarDetails() {

  const [car, setCar] = useState()
  const path = useLocation().pathname;
  const preid = path.split("/car-details/")
  const id = preid[1]
  
  async function getData(){
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .eq('id', id)
      .single();

    if(error){
      alert("Eroare: " + error)
    }else{
      setCar(data)
    }
  }
  
  useEffect(()=>{
    getData();
  }, [])

  if (!car) {
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
        <div className="flex items-center justify-center h-[90%] bg-slate-200">
          <div class="h-12 w-12 animate-spin rounded-full border-8 border-gray-200 border-t-slate-600"></div>
        </div>
      </Layout>
    )
  }
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
        <div className="flex flex-col gap-3 p-6 w-full h-[90%] bg-slate-200">

          <div className="flex flex-row bg-gray-100 border-[1px] border-slate-300 p-6 gap-4 rounded-lg h-full">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-9/12">
              <div className="bg-gray-100 border-[1px] border-slate-300 p-4 rounded-lg">
                <p>{car.client}</p>
              </div>
              <div className="bg-gray-100 border-[1px] border-slate-300 p-4 rounded-lg">
                <p>{car.car_model}</p>
              </div>
              <div className="bg-gray-100 border-[1px] border-slate-300 p-4 rounded-lg">
                <p>{car.mechanic}</p>
              </div>
              <div className="bg-gray-100 border-[1px] border-slate-300 p-4 rounded-lg">
                <p>{car.date}</p>
              </div>
            </div>
            <div className="flex flex-col text-left w-3/12 gap-3">
                <h1 className="font-medium text-2xl w-full text-right" >Status: <span className="font-light text-xl bg-violet-300 border-[1px] border-violet-400 rounded-lg p-1">{car.status}</span></h1>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-2 rounded-lg flex justify-center items-center gap-2">
                  <Pencil size={22}/>
                  <p className="text-lg">Editeaza comanda</p>
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-5 rounded-lg"></div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-5 rounded-lg"></div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-5 rounded-lg"></div>
            </div>
          </div>
        </div>
    </Layout>
  )
}