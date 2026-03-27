import Layout from "../components/Layout.jsx"
import Chart from "../components/AreaChart.jsx"

export default function Dashboard() {
  const data1 = [
        { luna: 'Ian', masini: 90 },
        { luna: 'Feb', masini: 52 },
        { luna: 'Mar', masini: 38 },
        { luna: 'Apr', masini: 65 },
        { luna: 'Mai', masini: 48 },
        { luna: 'Iun', masini: 70 },
    ];
  return (
    <>
      <Layout>
        <div className="grid grid-cols-2 gap-10 p-8 w-full h-[833px]">
          <div className="rounded-lg bg-slate-200"></div>
          <div className="rounded-lg bg-slate-200"></div>
          <div className="rounded-lg bg-slate-200"></div>
          <div className="rounded-lg bg-slate-200"></div>
        </div>
      </Layout>
    </>
  )
}