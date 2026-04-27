import Layout from "../components/Layout.jsx";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Pencil, Trash, Save, X } from "lucide-react";
import { supabase } from "../libs/supabaseClient.js";

export default function CarDetails() {
  const [car, setCar] = useState();
  const [editMode, setEditMode] = useState(false);

  const path = useLocation().pathname;
  const preid = path.split("/car-details/");
  const id = preid[1];

  async function getData() {
    const { data, error } = await supabase
      .from("cars")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      alert("Eroare: " + error);
    } else {
      setCar(data);
    }
  }

  function handleModeSwitch() {
    setEditMode((prevEditMode) => !prevEditMode);
  }

  useEffect(() => {
    getData();
  }, []);

  if (!car) {
    return (
      <Layout
        left={<div></div>}
        right={
          <div>
            <h1 className="font-medium text-2xl">Order details: #{id}</h1>
          </div>
        }
      >
        <div className="flex items-center justify-center h-[90%] bg-slate-200">
          <div className="h-12 w-12 animate-spin rounded-full border-8 border-gray-200 border-t-slate-600"></div>
        </div>
      </Layout>
    );
  }
  if (!editMode) {
    return (
      <Layout
        left={<div></div>}
        right={
          <div>
            <h1 className="font-medium text-2xl">Order details: #{id}</h1>
          </div>
        }
      >
        <div className="flex flex-col gap-3 p-6 w-full h-[90%] bg-slate-200">
          <div className="flex flex-row bg-gray-100 border-[1px] border-slate-300 p-6 gap-4 rounded-lg ">
            <div className="grid grid-cols-3 gap-4 w-9/12">
              {/* Coloana CLIENT */}
              <div className="flex flex-col gap-2">
                <p className="font-light text-2xl text-slate-800 ">Client</p>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">Nume</p>
                  <p className="text-slate-500 font-light ">{car.client}</p>
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">
                    Telefon
                  </p>
                  <p className="text-slate-500 font-light ">+373 602 457 50</p>
                </div>
              </div>

              {/* Coloana CAR */}
              <div className="flex flex-col gap-2">
                <p className="font-light text-2xl text-slate-800 ">Mașină</p>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">Model</p>
                  <p className="text-slate-500 font-light ">{car.car_model}</p>
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">
                    Problemă
                  </p>
                  <p className="text-slate-500 font-light ">
                    Scurgere lichid răcire
                  </p>
                </div>
              </div>

              {/* Coloana ORDER */}
              <div className="flex flex-col gap-2">
                <p className="font-light text-2xl text-slate-800">Comandă</p>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">
                    Mecanic
                  </p>
                  <p className="text-slate-500 font-light ">{car.mechanic}</p>
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">
                    Data Primirii
                  </p>
                  <p className="text-slate-500 font-light ">{car.date}</p>
                </div>
              </div>
            </div>

            {/* Bara Laterală (Neschimbată) */}
            <div className="flex flex-col text-left w-3/12 gap-3">
              <h1 className="font-medium text-2xl w-full text-right">
                Status:{" "}
                <span className="font-light text-xl bg-violet-300 border-[1px] border-violet-400 rounded-lg p-1">
                  {car.status}
                </span>
              </h1>
              <button
                type="button"
                onClick={handleModeSwitch}
                className="bg-gray-100 border-[1px] border-slate-300 p-2 rounded-lg flex justify-center items-center gap-2 hover:bg-slate-200 transition-colors"
              >
                <Pencil size={22} />
                <p className="text-lg">Edit</p>
              </button>
              <button className="bg-gray-100 border-[1px] border-slate-300 p-2 rounded-lg flex justify-center items-center gap-2 hover:bg-slate-200 transition-colors">
                <Trash size={22} />
                <p className="text-lg">Delete</p>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout
        left={<div></div>}
        right={
          <div>
            <h1 className="font-medium text-2xl">Order details: #{id}</h1>
          </div>
        }
      >
        <div className="flex flex-col gap-3 p-6 w-full h-[90%] bg-slate-200">
          <div className="flex flex-row bg-gray-100 border-[1px] border-slate-300 p-6 gap-4 rounded-lg ">
            <div className="grid grid-cols-3 gap-4 w-9/12 ">
              {/* Coloana CLIENT */}
              <div className="flex flex-col gap-2">
                <p className="font-light text-2xl text-slate-800">Client</p>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">Nume</p>
                  <input
                    className="focus:outline-none p-[2px] bg-gray-50 rounded-md border-[1px] border-gray-200 text-slate-500 font-light w-full"
                    type="text"
                    defaultValue={car.client}
                  />
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">
                    Telefon
                  </p>
                  <input
                    className="focus:outline-none p-[2px] bg-gray-50 rounded-md border-[1px] border-gray-200 text-slate-500 font-light w-full"
                    type="text"
                    defaultValue="+373 602 457 50"
                  />
                </div>
              </div>

              {/* Coloana CAR */}
              <div className="flex flex-col gap-2">
                <p className="font-light text-2xl text-slate-800">Mașină</p>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">Model</p>
                  <input
                    className="focus:outline-none p-[2px] bg-gray-50 rounded-md border-[1px] border-gray-200 text-slate-500 font-light w-full"
                    type="text"
                    defaultValue={car.car_model}
                  />
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">
                    Problemă
                  </p>
                  <input
                    className="focus:outline-none p-[2px] bg-gray-50 rounded-md border-[1px] border-gray-200 text-slate-500 font-light w-full"
                    type="text"
                    defaultValue="Scurgere lichid răcire"
                  />
                </div>
              </div>

              {/* Coloana ORDER / MECHANIC */}
              <div className="flex flex-col gap-2">
                <p className="font-light text-2xl text-slate-800">Comandă</p>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">
                    Mecanic
                  </p>
                  <input
                    className="focus:outline-none p-[2px] bg-gray-50 rounded-md border-[1px] border-gray-200 text-slate-500 font-light w-full"
                    type="text"
                    defaultValue={car.mechanic}
                  />
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">
                    Data Primirii
                  </p>
                  <input
                    className="focus:outline-none p-[2px] bg-gray-50 rounded-md border-[1px] border-gray-200 text-slate-500 font-light w-full"
                    type="text"
                    defaultValue={car.date}
                  />
                </div>
              </div>
            </div>

            {/* Bara Laterală */}
            <div className="flex flex-col text-left w-3/12 gap-3">
              <h1 className="font-medium text-2xl w-full text-right">
                Status:{" "}
                <span className="font-light text-xl bg-violet-300 border-[1px] border-violet-400 rounded-lg p-1">
                  {car.status}
                </span>
              </h1>
              <button
                type="button"
                onClick={handleModeSwitch}
                className="bg-green-100 border-[1px] border-green-300 p-2 rounded-lg flex justify-center items-center gap-2 hover:bg-green-200 transition-colors"
              >
                <Save size={22} />
                <p className="text-lg font-medium text-green-700">
                  Save changes
                </p>
              </button>
              <button
                type="button"
                onClick={handleModeSwitch}
                className="bg-red-100 border-[1px] border-red-300 p-2 rounded-lg flex justify-center items-center gap-2 hover:bg-red-200 transition-colors"
              >
                <X size={22} />
                <p className="text-lg">Cancel</p>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
