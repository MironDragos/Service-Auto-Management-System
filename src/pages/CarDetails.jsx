import Layout from "../components/Layout.jsx"


export default function CarDetails() {
  return (
    <Layout 
      left={
      <input type="text" id="myInput" placeholder="Search for names.."></input>
      }>
      <h1>Car Details</h1>
    </Layout>
  )
}