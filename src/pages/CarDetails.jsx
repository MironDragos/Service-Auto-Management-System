import Layout from "../components/Layout.jsx";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pencil, Trash, Save, X } from "lucide-react";
import { supabase } from "../libs/supabaseClient.js";

export default function CarDetails() {
  const navigate = useNavigate();

  const [car, setCar] = useState();
  const [editMode, setEditMode] = useState(false);
  const [clientName, setClientName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [mechanic, setMechanic] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");

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
      setClientName(data.client);
      setCarModel(data.car_model);
      setMechanic(data.mechanic);
      setStatus(data.status);
      setDate(data.date);
      setPhone(data.phone);
      setIssue(data.issue);
    }
  }

  function handleModeSwitch() {
    setEditMode((prevEditMode) => !prevEditMode);
  }

  async function handleDelete() {
    if (confirm("Are you sure?")) {
      const { data, error } = await supabase
        .from("cars")
        .delete("*")
        .eq("id", id);

      if (error) {
        alert("Eroare: " + error);
      } else {
        setCar(data);
        navigate("/");
      }
    }
  }

  async function handleSave() {
    if (confirm("Are you sure?")) {
      const { data, error } = await supabase
        .from("cars")
        .update({
          client: clientName,
          car_model: carModel,
          mechanic: mechanic,
          status: status,
          date: date,
          phone: phone,
          issue: issue,
        })
        .eq("id", id);

      if (error) {
        alert("Eroare: " + error);
      } else {
        getData();
        handleModeSwitch();
      }
    }
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
                  <p className="font-semibold text-sm text-slate-600">Name</p>
                  <p className="text-slate-500 font-light ">{clientName}</p>
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">Phone</p>
                  <p className="text-slate-500 font-light ">{phone}</p>
                </div>
              </div>

              {/* Coloana CAR */}
              <div className="flex flex-col gap-2">
                <p className="font-light text-2xl text-slate-800 ">Car</p>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">Model</p>
                  <p className="text-slate-500 font-light ">{carModel}</p>
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">Issue</p>
                  <p className="text-slate-500 font-light ">{issue}</p>
                </div>
              </div>

              {/* Coloana ORDER */}
              <div className="flex flex-col gap-2">
                <p className="font-light text-2xl text-slate-800">Order</p>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">
                    Mechanic
                  </p>
                  <p className="text-slate-500 font-light ">{mechanic}</p>
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">
                    Date of Receipt
                  </p>
                  <p className="text-slate-500 font-light ">{date}</p>
                </div>
              </div>
            </div>

            {/* Bara Laterală (Neschimbată) */}
            <div className="flex flex-col text-left w-3/12 gap-3">
              <h1 className="font-medium text-2xl w-full text-right">
                Status:{" "}
                <span className="font-light text-xl bg-violet-300 border-[1px] border-violet-400 rounded-lg p-1">
                  {status}
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
              <button
                onClick={handleDelete}
                className="bg-gray-100 border-[1px] border-slate-300 p-2 rounded-lg flex justify-center items-center gap-2 hover:bg-slate-200 transition-colors"
              >
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
                  <p className="font-semibold text-sm text-slate-600">Name</p>
                  <input
                    onChange={(e) => setClientName(e.target.value)}
                    className="focus:outline-none p-[2px] bg-gray-50 rounded-md border-[1px] border-gray-200 text-slate-500 font-light w-full"
                    type="text"
                    defaultValue={clientName}
                  />
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">Phone</p>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    className="focus:outline-none p-[2px] bg-gray-50 rounded-md border-[1px] border-gray-200 text-slate-500 font-light w-full"
                    type="text"
                    defaultValue={phone}
                  />
                </div>
              </div>

              {/* Coloana CAR */}
              <div className="flex flex-col gap-2">
                <p className="font-light text-2xl text-slate-800">Car</p>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">Model</p>
                  <input
                    onChange={(e) => setCarModel(e.target.value)}
                    className="focus:outline-none p-[2px] bg-gray-50 rounded-md border-[1px] border-gray-200 text-slate-500 font-light w-full"
                    type="text"
                    defaultValue={carModel}
                  />
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">Issue</p>
                  <input
                    onChange={(e) => setIssue(e.target.value)}
                    className="focus:outline-none p-[2px] bg-gray-50 rounded-md border-[1px] border-gray-200 text-slate-500 font-light w-full"
                    type="text"
                    defaultValue={issue}
                  />
                </div>
              </div>

              {/* Coloana ORDER / MECHANIC */}
              <div className="flex flex-col gap-2">
                <p className="font-light text-2xl text-slate-800">Order</p>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">
                    Mechanic
                  </p>
                  <input
                    onChange={(e) => setMechanic(e.target.value)}
                    className="focus:outline-none p-[2px] bg-gray-50 rounded-md border-[1px] border-gray-200 text-slate-500 font-light w-full"
                    type="text"
                    defaultValue={mechanic}
                  />
                </div>
                <div className="bg-gray-100 border-[1px] border-slate-300 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-slate-600">
                    Date of Receipt
                  </p>
                  <input
                    onChange={(e) => setDate(e.target.value)}
                    className="focus:outline-none p-[2px] bg-gray-50 rounded-md border-[1px] border-gray-200 text-slate-500 font-light w-full"
                    type="text"
                    defaultValue={date}
                  />
                </div>
              </div>
            </div>

            {/* Bara Laterală */}
            <div className="flex flex-col text-left w-3/12 gap-3">
              <h1 className="font-medium text-2xl w-full text-right">
                Status:{" "}
                <span className="font-light text-xl bg-violet-300 border-[1px] border-violet-400 rounded-lg p-1">
                  <select
                    onChange={(e) => setStatus(e.target.value)}
                    name="status"
                    id="status"
                  >
                    <option value="" disabled selected hidden>
                      Choose...
                    </option>
                    <option value="Completed">Completed</option>
                    <option value="In progress">In progress</option>
                    <option value="Waiting">Waiting</option>
                  </select>
                </span>
              </h1>
              <button
                type="button"
                onClick={handleSave}
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
