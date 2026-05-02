import Layout from "../components/Layout.jsx";
import { useState } from "react";
import { supabase } from "../libs/supabaseClient.js";

export default function AddCar() {
  const [clientName, setClientName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [mechanic, setMechanic] = useState("");
  const [status, setStatus] = useState("Waiting");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");

  const PEXEL_KEY = import.meta.env.VITE_PEXEL_KEY;

  async function pexelsAi(model) {
    const newModel = model.replace(" ", "+");
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${newModel}&orientation=square&size=small&per_page=1`,
      { headers: { Authorization: PEXEL_KEY } },
    );
    const data = await response.json();
    return data.photos[0].src.original;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const imgUrl = await pexelsAi(carModel);

    const { data, error } = await supabase.from("cars").insert([
      {
        client: clientName,
        car_model: carModel,
        mechanic: mechanic,
        status: status,
        date: date,
        image_url: imgUrl,
        phone: phone,
        issue: issue,
      },
    ]);

    if (error) {
      alert("Eroare: " + error);
    } else {
      setClientName("");
      setCarModel("");
      setMechanic("");
      setStatus("Waiting");
      setDate("");
      setPhone("");
      setIssue("");

      e.target.reset();

      alert("Adaugat cu succes");
    }
  }

  return (
    <Layout left={<div></div>} right={<div></div>}>
      <div className="flex flex-col justify-center items-center gap-6 p-6 w-full h-[90%] bg-slate-200">
        <div className="flex flex-col justify-center items-center w-7/12 border-[1px] bg-gray-100 border-slate-300 p-6 px-8 rounded-lg">
          <h1 className="text-2xl font-semibold">Add a car</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col pt-4 h-full w-full"
            action=""
          >
            <div className="flex justify-between gap-6">
              <div className="flex flex-col w-1/2">
                <label htmlFor="clientName">Client Name</label>
                <input
                  onChange={(e) => setClientName(e.target.value)}
                  id="clientName"
                  type="text"
                  className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6"
                  placeholder="First and Last name"
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label htmlFor="clientName">Client Phone</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  id="clientPhone"
                  type="text"
                  className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6"
                  placeholder="(xxx) xxx-xxxx"
                />
              </div>
            </div>
            <label htmlFor="carModel">Car Model</label>
            <input
              onChange={(e) => setCarModel(e.target.value)}
              id="carModel"
              type="text"
              className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6"
              placeholder="Brand and Model"
            />

            <label htmlFor="carModel">Car Issue</label>
            <input
              onChange={(e) => setIssue(e.target.value)}
              id="carIssue"
              type="text"
              className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6"
              placeholder="Cars issue"
            />

            <label htmlFor="mechanic">Mechanic</label>
            <input
              onChange={(e) => setMechanic(e.target.value)}
              id="mechanic"
              type="text"
              className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6"
              placeholder="Mechanic first name"
            />

            <div className="flex justify-between ">
              <div className="flex flex-col w-[48%]">
                <label htmlFor="status">Status</label>
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  name="status"
                  id="status"
                  className="border-slate-300 bg-slate-50 border-[1px] rounded-lg h-10 mb-6"
                >
                  <option
                    value="Waiting"
                    className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6"
                  >
                    Waiting
                  </option>
                  <option
                    value="Completed"
                    className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6"
                  >
                    Completed
                  </option>
                  <option
                    value="In progress"
                    className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6"
                  >
                    In progress
                  </option>
                </select>
              </div>
              <div className="flex flex-col w-[48%]">
                <label htmlFor="Date">Date</label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  id="Date"
                  type="date"
                  className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2 mb-6"
                />
              </div>
            </div>

            <input
              className="bg-slate-500 border-[1px] border-slate-600 p-2 w-36 rounded-lg text-white cursor-pointer font-medium hover:bg-slate-600"
              type="submit"
              name=""
              id=""
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
