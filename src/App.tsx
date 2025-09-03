import { Route, Routes } from 'react-router'
import Layout from './components/Layout'

function Dashboard() {
  return <div>Dashboard</div>
}
function Users() {
  return <div>Users</div>
}
function Roles() {
  return <div>Roles</div>
}
function Products() {
  return <div>Products</div>
}
function Orders() {
  return <div>Orders</div>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/roles" element={<Roles/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Route>
    </Routes>
  )
}

export default App
