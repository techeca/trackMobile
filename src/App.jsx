import { useEffect } from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
import { motion } from 'motion/react'

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  const animatedRoutes = ["/welcome", "/signUp", "/signUpWithEmail", "/signIn"];
  const isAnimatedRoute = animatedRoutes.includes(location.pathname);

  useEffect(() => {
    //const user = localStorage.getItem('user')
    if (location.pathname === '/') {
      navigate('/welcome')
    }
  }, [])

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {isAnimatedRoute ? (
        <motion.div
          key={location.pathname}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex justify-center items-center w-full"
        >
          <Outlet />
        </motion.div>
      ) : <Outlet />}
    </div>
  )
}

export default App


