/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const Navbar = () => {

  const { user, logOut } = UserAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  // console.log(user.email)

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute gap-5">
      <Link to='/'>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className="text-white pr-4">Cuenta</button>
          </Link>

          <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Cerrar sesión</button>
        </div>
      ) : (
        <div className="text-center">
          <Link to='/login'>
            <button className="text-white">Iniciar sesión</button>
          </Link>
          <Link to='/signup'>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer md:ml-5 text-white">Registrase</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar

