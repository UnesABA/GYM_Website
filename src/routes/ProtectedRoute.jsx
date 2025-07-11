import { useContext }  from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const user = useContext(AuthContext)
  const navigate = useNavigate()
  
  if(!user){
    return <navigate to= "/login" />
  }
  return children
}

export default ProtectedRoute