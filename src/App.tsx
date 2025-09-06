import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import ListUser from './modules/users/ListUser'
import CreateOrUpdateUser from './modules/users/CreateOrUpdateUser'
import Login from './components/Login'
import RootContainer from './components/RootContainer'
import Dashboard from './modules/dashboard/Dashboard'

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
    <RootContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<ListUser />} />
          <Route path="/users/:userId" element={<CreateOrUpdateUser />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </RootContainer>
  )
}

export default App
