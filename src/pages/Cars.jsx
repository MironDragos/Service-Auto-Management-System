import Layout from "../components/Layout.jsx"
import cars from "../data/cars.js"

export default function Cars() {
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-6 p-6 w-full h-[90%]">
          <div className= "p-6 bg-white">
          <table className="w-full border-separate border-spacing-y-5 ">
            <thead className="">
              <tr className="rounded-lg bg-slate-200">
                <th className="border-l border-y border-slate-400 p-2 rounded-l-lg">Id</th>
                <th className="border-y border-slate-400 p-2">Client</th>
                <th className="border-y border-slate-400 p-2">Car</th>
                <th className="border-y border-slate-400 p-2">Mechanic</th>
                <th className="border-y border-slate-400 p-2">Status</th>
                <th className="border-y border-slate-400 p-2">Date</th>
                <th className="border-r border-y border-slate-400 p-2 rounded-r-lg">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {cars.map((prop) => (
                <tr key={prop.id} className="rounded-lg bg-slate-100">
                  <td className="border-l border-y border-slate-300 py-4 px-2 rounded-l-lg text-center">{prop.id}</td>
                  <td className="border-y border-slate-300 py-4 px-2">{prop.client}</td>
                  <td className="border-y border-slate-300 py-4 px-2">{prop.car}</td>
                  <td className="border-y border-slate-300 py-4 px-2">{prop.mechanic}</td>
                  <td className="border-y border-slate-300 py-4 px-2">{prop.status}</td>
                  <td className="border-y border-slate-300 py-4 px-2">{prop.date}</td>
                  <td className="border-r border-y border-slate-300 py-4 px-2 rounded-r-lg flex justify-between items-center h-full">  
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