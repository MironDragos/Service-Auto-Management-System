import Layout from "../components/Layout.jsx"
import Chart from "../components/AreaChart.jsx"

export default function Dashboard() {
  return (
    <>
      <Layout>
        <h1>Dashboard</h1>
        <div className="size-80">
          <Chart/>
        </div>
      </Layout>
    </>
  )
}