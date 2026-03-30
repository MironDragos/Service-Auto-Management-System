import Layout from "../components/Layout.jsx"
import AreaChart from "../components/AreaChart.jsx"
import BarChart from "../components/BarChart.jsx"
import LineChart from "../components/LineChart.jsx"

export default function Dashboard() {
  const carsInService = [
        { luna: '1-5', masini: 90 },
        { luna: '5-10', masini: 52 },
        { luna: '10-15', masini: 38 },
        { luna: '15-20', masini: 65 },
        { luna: '20-25', masini: 48 },
        { luna: '25-30', masini: 70 },
    ];
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-8 p-8 w-full h-[90%]">

        <div className="grid grid-cols-[1.1fr_0.9fr] grid-rows-[0.9fr_1.1fr] gap-8 h-[70%]">

          <div className="p-8  rounded-lg bg-slate-200 ">
            <div className="flex justify-between">
              <h1 className="inline-block wrap">Cars in progress</h1>
              <span>
                <a href="" className="text-blue-600 underline pr-2">view all</a>
              </span>
            </div>
            <div className="flex h-5/6 justify-center items-center">
              <p className="font-bold text-7xl">12</p>
            </div>
          </div>

          <div className="p-8 rounded-lg bg-slate-200 ">
            <div className="flex justify-between">
              <h1 className="inline-block wrap">Cars waiting</h1>
              <span>
                <a href="" className="text-blue-600 underline pr-2">view all</a>
              </span>
            </div>
            <div className="flex h-5/6 justify-center items-center">
              <p className="font-bold text-7xl">56</p>
            </div>
          </div>

          <div className="pb-12 pr-8 pt-7  rounded-lg bg-slate-200 ">
            <div className="flex justify-between">
              <h1 className="inline-block pl-10 pb-4 wrap">Total cars this month</h1>
              <span>
                <a href="" className="text-blue-600 underline pr-2">view all</a>
              </span>
            </div>
            <BarChart data={carsInService}/>
          </div>

          <div className="p-8  rounded-lg bg-slate-200 ">
            <div className="flex justify-between">
              <h1 className="inline-block wrap">Cars completed today</h1>
              <span>
                <a href="" className="text-blue-600 underline pr-2">view all</a>
              </span>
            </div>
            <div className="flex h-5/6 justify-center items-center">
              <p className="font-bold text-7xl">8</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 h-[30%] rounded-lg bg-slate-200">
          <div className="flex justify-between">
            <h1 className="inline-block wrap">Current orders</h1>
            <span>
              <a href="" className="text-blue-600 underline ">view all</a>
            </span>
          </div>
          <div className="grid grid-cols-4 grid-rows-1">
            <div className="w-64 h-28 rounded-lg bg-slate-300"></div>
            <div className="w-64 h-28 rounded-lg bg-slate-300"></div>
            <div className="w-64 h-28 rounded-lg bg-slate-300"></div>
            <div className="w-64 h-28 rounded-lg bg-slate-300"></div>
          </div>
        </div>

        </div>
      </Layout>
    </>
  )
}