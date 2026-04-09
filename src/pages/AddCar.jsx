import Layout from "../components/Layout.jsx"

export default function AddCar() {
  return (
    <Layout 
      left={
          <input type="text" id="myInput" placeholder="Search for names.."></input>
      }>
      <h1>Add Car</h1>
    </Layout>
  )
}