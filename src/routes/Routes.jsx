import { Routes, Route } from "react-router-dom"
import Register          from "../pages/register/Register"
import Login             from "../pages/login/Login"
import Home              from "../pages/home/Home"
import ProtectedRoute    from "./ProtectedRoute"
import Workout from "../pages/workout/Workout"

const Router = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/"         element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login"    element={<Login />} />
      <Route path="/workout"  element={<Workout />} />
    </Routes>
  )
}

export default Router
