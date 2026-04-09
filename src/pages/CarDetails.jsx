import Layout from "../components/Layout.jsx"


export default function CarDetails() {
  return (
    <Layout 
      header={<Header 
        left={
        <input type="text" id="myInput" on placeholder="Search for names.."></input>
      }/>}>
      <h1>Car Details</h1>
    </Layout>
  )
}